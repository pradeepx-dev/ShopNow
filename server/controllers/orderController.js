const Order = require('../models/orderModel');
const {sendEmail} = require('../utils/sendEmail');

//for Users
const createOrder = async (req, res) => {
    try {
        const { user, items, address, totalAmount, paymentId, status } = req.body;
        if (!user || !items || !address || !totalAmount) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const order = await Order.create({
            user,
            items,
            address,
            totalAmount,
            paymentId,
            status
        });
        const itemListHtml = Array.isArray(items)
            ? items.map(item => `<li>Quantity: ${item.quantity} - Price: ₹${item.price}</li>`).join('')
            : '';

        const message = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2>Thank you for your order, ${address.fullname || 'Customer'}!</h2>
                <p>Your order has been successfully placed with <strong>ShopNow</strong>.</p>

                <h3>Order Summary</h3>
                <p><strong>Order ID:</strong> ${order._id}</p>
                <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
                <p><strong>Payment ID:</strong> ${paymentId || 'N/A'}</p>
                <p><strong>Status:</strong> ${order.status}</p>

                ${itemListHtml ? `<h3>Items:</h3><ul>${itemListHtml}</ul>` : ''}

                <h3>Shipping Address</h3>
                <p>
                    ${address.fullname}<br/>
                    ${address.address}, ${address.city}<br/>
                    ${address.state} - ${address.zip}, ${address.country}<br/>
                    <strong>Phone:</strong> ${address.phone}
                </p>

                <hr/>   
                <p>We will notify you once your order is shipped.</p>
                <p>Best regards,<br/><strong>ShopNow Team</strong></p>
            </div>
        `;
        sendEmail(address.email, 'ShopNow - Order Created', message);
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//for Admins
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
            .sort({ createdAt: -1 })
            .populate('user', 'name email');
        res.status(200).json({ message: 'Orders fetched successfully', orders });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//for Users
const getMyOrders = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ user: userId })
            .sort({ createdAt: -1 });
        res.status(200).json({ message: 'Orders fetched successfully', orders });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//for Users
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.status(200).json({ message: 'Order fetched successfully', order });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//for Admins
const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.status = req.body.status;
            const updatedOrder = await order.save();
            res.status(200).json({message: `Order status updated to ${req.body.status}`, updatedOrder});
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//for users
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            await Order.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Order removed' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder, getOrders, getMyOrders, getOrderById, updateOrderStatus, deleteOrder };
