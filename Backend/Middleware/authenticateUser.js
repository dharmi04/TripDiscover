// Middleware/authenticateUser.js

const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  // Get token from headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  try {
    // Verify token
    const decodedToken = jwt.verify(token, process.env.SECRET);

    // Attach user information to request object
    req.user = decodedToken;

    // Proceed to next middleware
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticateUser
