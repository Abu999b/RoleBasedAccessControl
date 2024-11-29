const Role = require('../models/Role');

const roleMiddleware = (roles) => async (req, res, next) => {
  try {
    const user = await req.user.populate('roles').execPopulate();
    const userRoles = user.roles.map(role => role.name);

    const hasRole = roles.some(role => userRoles.includes(role));

    if (!hasRole) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: 'Error in checking role', error: err.message });
  }
};

module.exports = roleMiddleware;
