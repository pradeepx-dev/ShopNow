const Product = require('../models/productModel')
const { SEARCH_INDEX_NAME } = require('../utils/searchIndex')

const splitCsv = (value) =>
  String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

const parsePriceRanges = (value) =>
  splitCsv(value).map((range) => {
    const [min, max] = range.split('-').map((part) => (part === '' || part == null ? null : Number(part)))
    return {
      min: Number.isFinite(min) ? min : null,
      max: Number.isFinite(max) ? max : null
    }
  })

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const buildSearchCompound = ({ q, genders, categories, sizes, brands, priceRanges, minDiscount }) => {
  const must = []
  const filter = []

  if (q) {
    must.push({
      compound: {
        should: [
          {
            text: {
              query: q,
              path: ['name', 'brand', 'category', 'description'],
              fuzzy: { maxEdits: 1, prefixLength: 2 },
              score: { boost: { value: 3 } }
            }
          },
          {
            autocomplete: {
              query: q,
              path: 'name',
              fuzzy: { maxEdits: 1 },
              score: { boost: { value: 4 } }
            }
          }
        ],
        minimumShouldMatch: 1
      }
    })
  } else {
    must.push({ exists: { path: 'name' } })
  }

  if (genders.length) filter.push({ in: { path: 'gender', value: genders } })
  if (categories.length) filter.push({ in: { path: 'category', value: categories } })
  if (sizes.length) filter.push({ in: { path: 'sizes', value: sizes } })
  if (brands.length) filter.push({ in: { path: 'brand', value: brands } })

  if (priceRanges.length) {
    filter.push({
      compound: {
        should: priceRanges.map(({ min, max }) => ({
          range: {
            path: 'price',
            ...(min != null ? { gte: min } : {}),
            ...(max != null ? { lte: max } : {})
          }
        })),
        minimumShouldMatch: 1
      }
    })
  }

  if (minDiscount != null) {
    filter.push({ range: { path: 'discount', gte: minDiscount } })
  }

  return { must, filter }
}

const atlasSort = (sort) => {
  if (sort === 'price_asc') return { price: 1 }
  if (sort === 'price_desc') return { price: -1 }
  if (sort === 'discount') return { discount: -1 }
  if (sort === 'newest') return { createdAt: -1 }
  if (sort === 'rating') return { rating: -1 }
  return null
}

const mongooseSort = (sort) => {
  if (sort === 'price_asc') return { price: 1 }
  if (sort === 'price_desc') return { price: -1 }
  if (sort === 'discount') return { discount: -1 }
  if (sort === 'newest') return { createdAt: -1 }
  return { rating: -1, numReviews: -1 }
}

const fallbackFilter = ({ q, genders, categories, sizes, brands, priceRanges, minDiscount }) => {
  const filter = {}
  if (q) {
    const regex = new RegExp(escapeRegex(q), 'i')
    filter.$or = [{ name: regex }, { brand: regex }, { category: regex }, { description: regex }]
  }
  if (genders.length) filter.gender = { $in: genders }
  if (categories.length) filter.category = { $in: categories }
  if (sizes.length) filter.sizes = { $in: sizes }
  if (brands.length) filter.brand = { $in: brands }
  if (priceRanges.length) {
    filter.$and = (filter.$and || []).concat([{
      $or: priceRanges.map(({ min, max }) => ({
        price: {
          ...(min != null ? { $gte: min } : {}),
          ...(max != null ? { $lte: max } : {})
        }
      }))
    }])
  }
  if (minDiscount != null) filter.discount = { $gte: minDiscount }
  return filter
}

const searchWithAtlas = async ({ q, genders, categories, sizes, brands, priceRanges, minDiscount, sort, page, limit }) => {
  const compound = buildSearchCompound({ q, genders, categories, sizes, brands, priceRanges, minDiscount })
  const searchStage = {
    $search: {
      index: SEARCH_INDEX_NAME,
      compound,
      ...(atlasSort(sort) ? { sort: atlasSort(sort) } : {})
    }
  }

  const [facetResult] = await Product.aggregate([
    searchStage,
    {
      $facet: {
        metadata: [{ $count: 'total' }],
        products: [
          { $skip: (page - 1) * limit },
          { $limit: limit },
          {
            $project: {
              name: 1, price: 1, originalPrice: 1, discount: 1, description: 1,
              imageURL: 1, category: 1, brand: 1, gender: 1, sizes: 1, colors: 1,
              badge: 1, rating: 1, numReviews: 1, stock: 1, createdAt: 1,
              score: { $meta: 'searchScore' }
            }
          }
        ]
      }
    }
  ])

  return {
    products: facetResult?.products || [],
    total: facetResult?.metadata?.[0]?.total || 0
  }
}

const searchWithFallback = async ({ q, genders, categories, sizes, brands, priceRanges, minDiscount, sort, page, limit }) => {
  const filter = fallbackFilter({ q, genders, categories, sizes, brands, priceRanges, minDiscount })
  const [products, total] = await Promise.all([
    Product.find(filter).sort(mongooseSort(sort)).skip((page - 1) * limit).limit(limit),
    Product.countDocuments(filter)
  ])
  return { products, total }
}

const searchProducts = async (req, res) => {
  try {
    const q = String(req.query.q || '').trim()
    const genders = splitCsv(req.query.gender)
    const categories = splitCsv(req.query.category)
    const sizes = splitCsv(req.query.size)
    const brands = splitCsv(req.query.brand)
    const priceRanges = parsePriceRanges(req.query.price)
    const discountValues = splitCsv(req.query.discount).map(Number).filter(Number.isFinite)
    const minDiscount = discountValues.length ? Math.min(...discountValues) : null
    const sort = String(req.query.sort || 'popularity')
    const page = Math.max(1, Number(req.query.page) || 1)
    const limit = Math.min(48, Math.max(1, Number(req.query.limit) || 24))

    let result
    let source = 'atlas'
    try {
      result = await searchWithAtlas({ q, genders, categories, sizes, brands, priceRanges, minDiscount, sort, page, limit })
    } catch (error) {
      console.warn('Atlas Search unavailable, using fallback:', error.message)
      source = 'fallback'
      result = await searchWithFallback({ q, genders, categories, sizes, brands, priceRanges, minDiscount, sort, page, limit })
    }

    const [genderOptions, categoryOptions, sizeOptions, brandOptions] = await Promise.all([
      Product.distinct('gender'),
      Product.distinct('category'),
      Product.distinct('sizes'),
      Product.distinct('brand')
    ])

    res.json({
      products: result.products,
      total: result.total,
      page,
      pages: Math.ceil(result.total / limit) || 0,
      source,
      filters: {
        genders: genderOptions.filter(Boolean).sort(),
        categories: categoryOptions.filter(Boolean).sort(),
        sizes: sizeOptions.filter(Boolean),
        brands: brandOptions.filter(Boolean).sort()
      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const suggestProducts = async (req, res) => {
  try {
    const q = String(req.query.q || '').trim()
    if (q.length < 2) {
      return res.json({ suggestions: [] })
    }

    try {
      const suggestions = await Product.aggregate([
        {
          $search: {
            index: SEARCH_INDEX_NAME,
            compound: {
              should: [
                {
                  autocomplete: {
                    query: q,
                    path: 'name',
                    fuzzy: { maxEdits: 1 },
                    tokenOrder: 'sequential'
                  }
                },
                {
                  autocomplete: {
                    query: q,
                    path: 'brand',
                    fuzzy: { maxEdits: 1 }
                  }
                },
                {
                  autocomplete: {
                    query: q,
                    path: 'category',
                    fuzzy: { maxEdits: 1 }
                  }
                }
              ]
            }
          }
        },
        { $limit: 8 },
        {
          $project: {
            name: 1, brand: 1, category: 1, price: 1, imageURL: 1, gender: 1,
            score: { $meta: 'searchScore' }
          }
        }
      ])
      return res.json({ suggestions, source: 'atlas' })
    } catch (error) {
      console.warn('Atlas autocomplete unavailable, using fallback:', error.message)
      const regex = new RegExp(escapeRegex(q), 'i')
      const suggestions = await Product.find({
        $or: [{ name: regex }, { brand: regex }, { category: regex }]
      })
        .select('name brand category price imageURL gender')
        .limit(8)
      return res.json({ suggestions, source: 'fallback' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { searchProducts, suggestProducts }
