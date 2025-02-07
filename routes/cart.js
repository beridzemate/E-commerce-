// backend/routes/cart.js
const express = require('express');
const router = express.Router();
const { processCart } = require('../controllers/cartController');

// POST /api/cart - Process the cart and create an order
router.post('/', processCart);

module.exports = router;
