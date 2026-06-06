const express  = require('express');
const router   = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const requireAuth = require('../middleware/auth');

// GET /api/theme — theme פעיל למשתמש המחובר
router.get('/', requireAuth, async (req, res) => {
  const { userId, tenantId } = req.user;
  try {
    await poolConnect;
    const result = await (await getPool()).request()
      .input('UserID',   sql.Int, userId)
      .input('TenantID', sql.Int, tenantId)
      .execute('dbo.sp_GetEffectiveTheme');

    const theme = result.recordset[0];
    return res.json({ success: true, data: { colorScheme: theme.ColorScheme, darkMode: theme.DarkMode } });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// PUT /api/theme/user — שמירת העדפה אישית
router.put('/user', requireAuth, async (req, res) => {
  const { userId } = req.user;
  const { colorScheme, darkMode } = req.body;

  const validSchemes = ['blue','teal','purple','green','rose','amber'];
  if (colorScheme && !validSchemes.includes(colorScheme))
    return res.status(400).json({ success: false, message: 'ערכת צבעים לא חוקית' });

  try {
    await poolConnect;
    await (await getPool()).request()
      .input('UserID',      sql.Int,        userId)
      .input('ColorScheme', sql.NVarChar(20), colorScheme ?? null)
      .input('DarkMode',    sql.Bit,          darkMode    ?? null)
      .execute('dbo.sp_SaveUserTheme');

    return res.json({ success: true, message: 'נשמר בהצלחה' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// PUT /api/theme/org — ברירת מחדל לארגון (מנהל בלבד)
router.put('/org', requireAuth, async (req, res) => {
  const { tenantId, roleId } = req.user;
  if (roleId > 2)
    return res.status(403).json({ success: false, message: 'אין הרשאה' });

  const { colorScheme, darkMode } = req.body;

  const validSchemes = ['blue','teal','purple','green','rose','amber'];
  if (colorScheme && !validSchemes.includes(colorScheme))
    return res.status(400).json({ success: false, message: 'ערכת צבעים לא חוקית' });

  try {
    await poolConnect;
    await (await getPool()).request()
      .input('TenantID',    sql.Int,          tenantId)
      .input('ColorScheme', sql.NVarChar(20), colorScheme ?? null)
      .input('DarkMode',    sql.Bit,          darkMode    ?? null)
      .execute('dbo.sp_SaveOrgTheme');

    return res.json({ success: true, message: 'נשמר בהצלחה' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

module.exports = router;
