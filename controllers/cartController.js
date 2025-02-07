// backend/controllers/cartController.js
const Order = require('../models/Order');

// @desc    Process a cart (create an order)
// @route   POST /api/cart
// @access  Public (for demo purposes)
const processCart = async (req, res) => {
  try {
    // Assume req.body contains { userInfo, cartItems }
    const { userInfo, cartItems } = req.body;
    // Calculate total price from cart items (each item must have price and quantity)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const order = new Order({
      user: userInfo,
      items: cartItems,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  processCart,
};
