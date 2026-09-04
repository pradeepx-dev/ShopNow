const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const multer = require('multer');

const upload = multer({ storage:multer.memoryStorage() }); 

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getHomePageData
} = require('../controllers/productController');
const { searchProducts, suggestProducts } = require('../controllers/searchController');

router.post('/', protect, admin, upload.single('image'), createProduct);
router.get('/', getProducts);
router.get('/homepage', getHomePageData);
router.get('/search', searchProducts);
router.get('/suggest', suggestProducts);
router.get('/:id', getProductById);
router.put('/:id', protect, admin, upload.single('image'), updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
