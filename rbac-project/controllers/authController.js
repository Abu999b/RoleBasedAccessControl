const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const login = async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username }).populate('roles');
  
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  const payload = { user: { id: user._id } };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  res.json({ token });
};

module.exports = { login };
