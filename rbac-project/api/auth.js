const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// POST route for login
router.post('/login', login);

// POST route for register
router.post('/register', register);

module.exports = router;
