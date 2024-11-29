const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Protect routes with auth and role-based access
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, roleMiddleware('user'), updateUserProfile);

module.exports = router;
