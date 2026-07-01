const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/organic_shop');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        // Do not crash serverless instance on initial connection failure in production
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
};

module.exports = connectDB;
