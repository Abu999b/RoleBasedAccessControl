const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./api/auth'); // Import the routes

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Parse incoming JSON requests

// Use the imported auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
