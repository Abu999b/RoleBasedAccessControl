const express = require('express');
const { createUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, roleMiddleware(['admin']), createUser);

module.exports = router;
