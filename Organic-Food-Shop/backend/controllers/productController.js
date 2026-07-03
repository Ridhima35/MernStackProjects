const Product = require('../models/Product');

// Get products from database with pagination, search, and category filter
const getProducts = async (req, res) => {
    try {
        // 1. Get query parameters from the request URL (with defaults)
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6; // Shows 6 products per page
        const skip = (page - 1) * limit;

        // 2. Build the query object dynamically
        const query = {};

        // Search by product name (case-insensitive keyword matching)
        if (req.query.search) {
            query.name = { $regex: req.query.search, $options: 'i' };
        }

        // Filter by category (if it is not 'all')
        if (req.query.category && req.query.category.toLowerCase() !== 'all') {
            query.category = req.query.category;
        }

        // 3. Fetch count and filtered products from MongoDB
        const total = await Product.countDocuments(query);
        const products = await Product.find(query)
            .skip(skip)
            .limit(limit);

        // 4. Return paginated data and pagination metadata
        res.status(200).json({
            products,
            page,
            pages: Math.ceil(total / limit),
            totalProducts: total
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

module.exports = {
    getProducts
};
