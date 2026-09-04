const express = require('express');
const router = express.Router();
const {getAnalytics} = require('../controllers/analyticsController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

// Analytics routes - to be implemented
router.get('/', protect, admin, getAnalytics);

module.exports = router;
