const User = require('../models/userModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');

const getAnalytics = async(req, res) => {
    try{
        const users = await User.countDocuments({role: 'user'});
        const products = await Product.countDocuments({});
        const orders = await Order.countDocuments({});

        const order = await Order.find({});

        const totalRevenue = order.reduce((total, order) => total + (order.totalAmount || 0), 0);

        res.status(200).json({
            users,
            products,
            orders,
            totalRevenue    
        });
    }catch(err){
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = { getAnalytics };