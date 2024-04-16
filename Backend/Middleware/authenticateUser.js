const jwt = require('jsonwebtoken');
function authenticateUser(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }

  try{
    const verifyToken = jwt.verify(token, process.env.SECRET);
    req.user = verifyToken;
    next();
  }catch{
    res.status(401).json({ error: 'Invalid token' });
  }
}
module.exports = authenticateUser;