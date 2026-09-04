const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { createOrder, getOrders, getOrderById, updateOrderStatus, deleteOrder, getMyOrders } = require('../controllers/orderController');

router.post('/', protect, createOrder);
router.get('/', protect, admin, getOrders);
router.get('/:id', protect, getOrderById);
router.get('/myorders/:userId', protect, getMyOrders);
router.put('/:id', protect, admin, updateOrderStatus);
router.delete('/:id', protect, admin, deleteOrder);

module.exports = router;
