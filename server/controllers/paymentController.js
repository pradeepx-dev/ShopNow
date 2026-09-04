const Razorpay = require('razorpay')
const crypto = require('crypto')
dotenv = require('dotenv').config()

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});

// @desc create order
// @route GET /api/payment/order
// @access Private
const createOrder = async (req, res) => {
    try {
        const {amount} = req.body
        const order = await instance.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(16).toString("hex"),
        });
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// @desc verify payment
// @route POST /api/payment/verify
// @access Private
const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
            .update(body.toString())
            .digest('hex');
        if (expectedSignature === razorpay_signature) {
            res.json({ message: 'Payment verified successfully' });
        } else {
            res.status(400).json({ message: 'Invalid payment' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {createOrder, verifyPayment}