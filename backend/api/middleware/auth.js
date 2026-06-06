const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function requireAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token)
    return res.status(401).json({ success: false, message: 'נדרשת כניסה למערכת' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'פג תוקף הסשן — נא להתחבר מחדש' });
  }
};
