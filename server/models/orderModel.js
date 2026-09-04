const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                min: 1,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
        }
    ],
    address: {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: Number, required: true },
        country: { type: String, required: true }
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        // required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed", "cancelled"],
        default: "pending"
    }
})

module.exports = mongoose.model('Order', orderSchema);
