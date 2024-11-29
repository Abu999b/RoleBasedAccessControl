const User = require('../models/User');
const Role = require('../models/Role');

const createUser = async (req, res) => {
  const { username, password, roles } = req.body;

  const roleDocs = await Role.find({ name: { $in: roles } });
  if (roleDocs.length !== roles.length) {
    return res.status(400).json({ message: 'Invalid roles' });
  }

  const user = new User({ username, password, roles: roleDocs });
  await user.save();
  
  res.status(201).json(user);
};

module.exports = { createUser };
