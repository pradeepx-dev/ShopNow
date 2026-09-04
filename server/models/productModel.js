const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Men', 'Women', 'Kids', 'Unisex'],
        default: 'Unisex'
    },
    sizes: {
        type: [String],
        default: []
    },
    colors: {
        type: [String],
        default: []
    },
    badge: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

productSchema.pre('validate', function computeDiscount() {
    if (!this.originalPrice || this.originalPrice < this.price) {
        this.originalPrice = this.price
    }
    if (this.originalPrice > this.price) {
        this.discount = Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100)
    } else if (this.discount == null) {
        this.discount = 0
    }
})

module.exports = mongoose.model('Product', productSchema)
