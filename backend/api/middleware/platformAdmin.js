// גישה רק ל-TenantID=1 (Profits — מנהלת הפלטפורמה) + RoleID=1
module.exports = function requirePlatformAdmin(req, res, next) {
  if (!req.user)
    return res.status(401).json({ success: false, message: 'נדרשת כניסה למערכת' });

  if (req.user.tenantId !== 1 || req.user.roleId !== 1)
    return res.status(403).json({ success: false, message: 'גישה מותרת רק למנהל הפלטפורמה' });

  next();
};
