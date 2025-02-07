// backend/models/Order.js
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
