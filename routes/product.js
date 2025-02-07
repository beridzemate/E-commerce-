// backend/routes/products.js
const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productController');

// GET /api/products - Retrieve all products
router.get('/', getProducts);

// POST /api/products - Create a new product
router.post('/', createProduct);

module.exports = router;
