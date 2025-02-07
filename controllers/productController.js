// backend/controllers/productController.js
const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Private (for demo, no auth is enforced)
const createProduct = async (req, res) => {
  try {
    const { name, category, description, price, image } = req.body;
    const product = new Product({ name, category, description, price, image });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
};
