const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

// 1. Connect to Database
connectDB();

// 2. Middlewares
app.use(cors());          // Allows frontend on port 5173 to fetch data from backend on port 5000
app.use(express.json());  // Allows your Express server to parse incoming JSON payloads

// 3. API Routes
app.use('/api/products', productRoutes);

// 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
});

module.exports = app;
