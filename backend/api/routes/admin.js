const express    = require('express');
const router     = express.Router();
const crypto     = require('crypto');
const { sql, getPool, poolConnect } = require('../db');
const requireAuth = require('../middleware/auth');

function generateSalt()         { return crypto.randomBytes(32).toString('base64'); }
function hashPassword(pwd, salt){ return crypto.createHash('sha256').update(pwd + salt, 'utf8').digest('base64'); }

// ── POST /api/admin/reset-password ────────────────────────
// Body: { targetUsername, newPassword }
// Header: Authorization: Bearer <token>  (RoleID=1 נדרש)
router.post('/reset-password', requireAuth, async (req, res) => {
  const { targetUsername, newPassword } = req.body;
  const adminUserId = req.user.userId;

  if (req.user.roleId !== 1)
    return res.status(403).json({ success: false, message: 'נדרשת הרשאת מנהל מערכת' });

  if (!targetUsername || !newPassword || newPassword.length < 6)
    return res.status(400).json({ success: false, message: 'נא לספק שם משתמש וסיסמה (לפחות 6 תווים)' });

  try {
    await poolConnect;
    const salt = generateSalt();
    const hash = hashPassword(newPassword, salt);

    const result = await (await getPool()).request()
      .input('AdminUserID',     sql.Int,         adminUserId)
      .input('TargetUsername',  sql.VarChar(80),  targetUsername)
      .input('NewPasswordHash', sql.VarChar(255), hash)
      .input('NewPasswordSalt', sql.VarChar(100), salt)
      .input('ForceChange',     sql.Bit,          1)
      .output('ResultCode',     sql.Int)
      .output('ResultMessage',  sql.NVarChar(200))
      .execute('dbo.sp_ResetPassword');

    const { ResultCode, ResultMessage } = result.output;

    if (ResultCode !== 0)
      return res.status(ResultCode === 2 ? 403 : 404)
        .json({ success: false, code: ResultCode, message: ResultMessage });

    return res.json({ success: true, message: ResultMessage });

  } catch (err) {
    console.error('Reset password error:', err);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

module.exports = router;
