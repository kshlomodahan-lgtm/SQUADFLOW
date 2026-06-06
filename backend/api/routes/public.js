const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');

// ── GET /api/public/tenant/:code ─────────────────────────
router.get('/tenant/:code', async (req, res) => {
  const code = (req.params.code || '').toUpperCase();
  if (!code) return res.status(400).json({ success: false });

  try {
    await poolConnect;

    const tenantRow = await (await getPool()).request()
      .input('TenantCode', sql.VarChar(30), code)
      .query(`
        SELECT TenantID, CompanyName, LogoUrl
        FROM   dbo.tblTenants
        WHERE  TenantCode = @TenantCode AND IsActive = 1
      `);

    if (!tenantRow.recordset.length)
      return res.status(404).json({ success: false, message: 'ארגון לא נמצא' });

    const { TenantID, CompanyName, LogoUrl } = tenantRow.recordset[0];

    // שלוף הגדרות תצוגה
    const settingsRow = await (await getPool()).request()
      .input('TenantID', sql.Int, TenantID)
      .query(`
        SELECT SettingKey, SettingValue
        FROM   dbo.tblSystemSettings
        WHERE  TenantID = @TenantID
          AND  SettingKey IN ('SystemName','LoginScreenPromptText','CopyrightText','BrandColor')
      `);

    const settings = {};
    settingsRow.recordset.forEach(r => { settings[r.SettingKey] = r.SettingValue; });

    return res.json({
      success:     true,
      companyName: CompanyName,
      logoUrl:     LogoUrl || null,
      systemName:  settings['SystemName']              || '',
      promptText:  settings['LoginScreenPromptText']   || '',
      copyright:   settings['CopyrightText']           || '',
      brandColor:  settings['BrandColor']              || '#C8472A',
    });
  } catch (err) {
    console.error('GET /public/tenant error:', err);
    return res.status(500).json({ success: false });
  }
});

module.exports = router;
