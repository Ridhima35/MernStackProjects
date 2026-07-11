const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// 1. Connect to Database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/OrganicFoodShop')
  .then(() => console.log('MongoDB Connected: 127.0.0.1'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message));

// 2. Product Schema & Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  stock: { type: Number, default: 0 },
  brand: { type: String },
  description: { type: String },
  discount: { type: Number, default: 0 }
});

const Product = mongoose.model('Product', productSchema);

// 3. Middlewares
app.use(cors());
app.use(express.json());

// 4. API Routes
app.get('/api/products', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const query = {};

    // Search by product name
    if (req.query.search) {
      query.name = { $regex: req.query.search, $options: 'i' };
    }

    // Filter by category
    if (req.query.category && req.query.category.toLowerCase() !== 'all') {
      query.category = req.query.category;
    }

    // Fetch total count and products from MongoDB
    const total = await Product.countDocuments(query);
    const products = await Product.find(query).skip(skip).limit(limit);

    res.status(200).json({
      products,
      page,
      pages: Math.ceil(total / limit),
      totalProducts: total
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});

module.exports = app;
