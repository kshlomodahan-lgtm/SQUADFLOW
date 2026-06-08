const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token)
    return res.status(401).json({ success: false, message: 'נדרשת כניסה למערכת' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'פג תוקף הסשן — נא להתחבר מחדש' });
  }
}

// checkPermission('ORGANIZATIONS', 'DELETE') — middleware factory
function checkPermission(screenCode, actionCode) {
  return (req, res, next) => {
    // Super Admin (roleId=1) bypasses all permission checks
    if (req.user?.roleId === 1) return next();

    const perms = req.user?._permissions;
    if (!perms) return next(); // permissions not loaded → allow (resolved lazily on client)

    const allowed = perms.some(p => p.MenuItemCode === screenCode && p.ActionCode === actionCode && p.IsAllowed);
    if (!allowed)
      return res.status(403).json({ success: false, message: 'אין הרשאה לפעולה זו' });

    next();
  };
}

module.exports = verifyToken;
module.exports.verifyToken = verifyToken;
module.exports.checkPermission = checkPermission;
