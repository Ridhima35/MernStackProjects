const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

// Define route for GET /api/products
router.get('/', getProducts);

module.exports = router;
