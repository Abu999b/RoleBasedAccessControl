const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./api/auth');
const userRoutes = require('./api/user');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize the Express app
const app = express();
app.use(express.json()); // to parse JSON request bodies

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Export the app as a Vercel function
module.exports = app;
