const Product = require('../models/productModel')

const SEARCH_INDEX_NAME = 'product_search'

const SEARCH_INDEX_DEFINITION = {
  mappings: {
    dynamic: false,
    fields: {
      name: [
        { type: 'string', analyzer: 'lucene.standard' },
        {
          type: 'autocomplete',
          analyzer: 'lucene.standard',
          tokenization: 'edgeGram',
          minGrams: 2,
          maxGrams: 15,
          foldDiacritics: true
        }
      ],
      brand: [
        { type: 'string', analyzer: 'lucene.standard' },
        {
          type: 'autocomplete',
          tokenization: 'edgeGram',
          minGrams: 2,
          maxGrams: 15,
          foldDiacritics: true
        },
        { type: 'token' }
      ],
      category: [
        { type: 'string', analyzer: 'lucene.standard' },
        {
          type: 'autocomplete',
          tokenization: 'edgeGram',
          minGrams: 2,
          maxGrams: 15,
          foldDiacritics: true
        },
        { type: 'token' }
      ],
      description: { type: 'string', analyzer: 'lucene.standard' },
      gender: [
        { type: 'token' },
        { type: 'string', analyzer: 'lucene.keyword' }
      ],
      sizes: [
        { type: 'token' },
        { type: 'string', analyzer: 'lucene.keyword' }
      ],
      price: { type: 'number' },
      discount: { type: 'number' },
      rating: { type: 'number' },
      createdAt: { type: 'date' }
    }
  }
}

const ensureProductSearchIndex = async () => {
  try {
    const cursor = Product.collection.listSearchIndexes(SEARCH_INDEX_NAME)
    const existing = await cursor.toArray()
    if (existing.length > 0 && existing[0].status !== 'FAILED') {
      console.log(`Atlas Search index "${SEARCH_INDEX_NAME}" is ready`)
      return
    }

    if (existing.length > 0) {
      await Product.collection.updateSearchIndex(SEARCH_INDEX_NAME, SEARCH_INDEX_DEFINITION)
      console.log(`Repairing Atlas Search index "${SEARCH_INDEX_NAME}" (it may take a minute to build)`)
    } else {
      await Product.collection.createSearchIndex({
        name: SEARCH_INDEX_NAME,
        definition: SEARCH_INDEX_DEFINITION
      })
      console.log(`Created Atlas Search index "${SEARCH_INDEX_NAME}" (it may take a minute to build)`)
    }
  } catch (error) {
    console.warn('Atlas Search index setup skipped:', error.message)
  }
}

module.exports = { SEARCH_INDEX_NAME, ensureProductSearchIndex }
