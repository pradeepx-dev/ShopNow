const express = require('express');
const router = express.Router();
const {createOrder, verifyPayment} = require('../controllers/paymentController')

// Payment routes 
router.get('/order' , createOrder )
router.post('/verify', verifyPayment)


module.exports = router;
