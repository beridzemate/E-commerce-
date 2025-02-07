// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample product list (greens and flowers)
const products = [
  {
    id: 1,
    name: 'Aloe Vera',
    category: 'Green',
    description: 'A succulent known for its soothing gel.',
    price: 12.99,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.keyaseth.com%2Fblogs%2Fingredient-info%2Faloe-vera&psig=AOvVaw0Lu6esKuQNAWyH4Q8_DpIU&ust=1739024295992000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJC4u73gsYsDFQAAAAAdAAAAABAJ'
  },
  {
    id: 2,
    name: 'Rose Bouquet',
    category: 'Flower',
    description: 'A bouquet of fresh red roses.',
    price: 29.99,
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rosebowlflowershop.com%2Fflower-arrangement%2Fdazzling-50-large-headed-red-rose-valentines-bouquet%2Finprod2300767&psig=AOvVaw0bVYL07iUPxteeJmTcwfPA&ust=1739024354028000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCB19ngsYsDFQAAAAAdAAAAABAE'
  },
  {
    id: 3,
    name: 'Orchid Plant',
    category: 'Flower',
    description: 'Elegant orchid with long-lasting blooms.',
    price: 45.00,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FYSZL-Artificial-Potted-Arrangement-Ceramics%2Fdp%2FB0BRCMCDWY&psig=AOvVaw29cd8kzbuIJj0ASg0GDLTp&ust=1739024392773000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCDmOzgsYsDFQAAAAAdAAAAABAJ'
  },
  {
    id: 4,
    name: 'Bonsai Tree',
    category: 'Green',
    description: 'A miniature bonsai tree to beautify your space.',
    price: 55.50,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbonsairesourcecenter.com%2Fthe-ultimate-guide-to-bonsai-trees%2F&psig=AOvVaw2DZFRsxYGTsvtuGUw0TTSR&ust=1739024431909000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPif0_7gsYsDFQAAAAAdAAAAABAE'
  }
];

// GET /api/products: return all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:id: return a specific product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// POST /api/cart: (example endpoint for processing orders)
app.post('/api/cart', (req, res) => {
  console.log('Received cart data:', req.body);
  // In a real application, process and save the order here.
  res.json({ message: 'Cart received successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
