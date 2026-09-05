const Product = require('../models/productModel')
const { SEARCH_INDEX_NAME } = require('../utils/searchIndex')

const GENDER_MAP = {
  men: 'Men',
  man: 'Men',
  male: 'Men',
  women: 'Women',
  woman: 'Women',
  female: 'Women',
  kids: 'Kids',
  kid: 'Kids',
  children: 'Kids',
  child: 'Kids',
  boys: 'Kids',
  boy: 'Kids',
  girls: 'Kids',
  girl: 'Kids',
  unisex: 'Unisex'
}

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

  if (genders.length) {
    const allGenders = Array.from(new Set(genders.flatMap(g => [g, g.toLowerCase(), g.charAt(0).toUpperCase() + g.slice(1).toLowerCase()])))
    filter.push({ in: { path: 'gender', value: allGenders } })
  }
  if (categories.length) {
    const allCategories = Array.from(new Set(categories.flatMap(c => [c, c.toLowerCase(), c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()])))
    filter.push({
      compound: {
        should: [
          { in: { path: 'category', value: allCategories } },
          { text: { query: categories.join(' '), path: ['category', 'name', 'description'] } }
        ],
        minimumShouldMatch: 1
      }
    })
  }
  if (sizes.length) filter.push({ in: { path: 'sizes', value: sizes } })
  if (brands.length) {
    const allBrands = Array.from(new Set(brands.flatMap(b => [b, b.toLowerCase(), b.charAt(0).toUpperCase() + b.slice(1).toLowerCase()])))
    filter.push({ in: { path: 'brand', value: allBrands } })
  }

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
  const conditions = []

  if (q) {
    const regex = new RegExp(escapeRegex(q), 'i')
    conditions.push({
      $or: [
        { name: regex },
        { brand: regex },
        { category: regex },
        { description: regex },
        { gender: regex }
      ]
    })
  }

  if (genders.length) {
    const genderRegexes = genders.map((g) => new RegExp(`^${escapeRegex(g)}$`, 'i'))
    conditions.push({ gender: { $in: genderRegexes } })
  }

  if (categories.length) {
    const catRegexes = categories.map((c) => new RegExp(escapeRegex(c), 'i'))
    conditions.push({
      $or: [
        { category: { $in: catRegexes } },
        { name: { $in: catRegexes } },
        { description: { $in: catRegexes } }
      ]
    })
  }

  if (sizes.length) {
    conditions.push({ sizes: { $in: sizes } })
  }

  if (brands.length) {
    const brandRegexes = brands.map((b) => new RegExp(`^${escapeRegex(b)}$`, 'i'))
    conditions.push({ brand: { $in: brandRegexes } })
  }

  if (priceRanges.length) {
    conditions.push({
      $or: priceRanges.map(({ min, max }) => ({
        price: {
          ...(min != null ? { $gte: min } : {}),
          ...(max != null ? { $lte: max } : {})
        }
      }))
    })
  }

  if (minDiscount != null) {
    conditions.push({ discount: { $gte: minDiscount } })
  }

  if (conditions.length === 0) return {}
  if (conditions.length === 1) return conditions[0]
  return { $and: conditions }
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
    const q = String(req.query.q || req.query.tag || '').trim()
    const rawGenders = splitCsv(req.query.gender)
    const rawCategories = splitCsv(req.query.category)
    const sizes = splitCsv(req.query.size)
    const brands = splitCsv(req.query.brand)
    const priceRanges = parsePriceRanges(req.query.price)
    const discountValues = splitCsv(req.query.discount).map(Number).filter(Number.isFinite)
    const minDiscount = discountValues.length ? Math.min(...discountValues) : null
    const sort = String(req.query.sort || 'popularity')
    const page = Math.max(1, Number(req.query.page) || 1)
    const limit = Math.min(48, Math.max(1, Number(req.query.limit) || 24))

    const genders = rawGenders.map((g) => GENDER_MAP[g.toLowerCase()] || g)
    const categories = []

    for (const cat of rawCategories) {
      if (cat.toLowerCase() === 'all') continue
      const matchedGender = GENDER_MAP[cat.toLowerCase()]
      if (matchedGender) {
        if (!genders.includes(matchedGender)) {
          genders.push(matchedGender)
        }
      } else {
        categories.push(cat)
      }
    }

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
