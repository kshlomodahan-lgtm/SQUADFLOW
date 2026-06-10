const express = require('express');
const router  = express.Router();
const fs      = require('fs');
const path    = require('path');
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// ── Table auto-create / migrate ───────────────────────────────
async function initTables() {
  try {
    await poolConnect;
    const pool = await getPool();

    // Create tblScreenFieldConfig
    await pool.request().query(`
      IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblScreenFieldConfig' AND xtype='U')
      CREATE TABLE tblScreenFieldConfig (
        FieldConfigID   INT IDENTITY(1,1) PRIMARY KEY,
        TenantID        INT           NOT NULL,
        MenuItemCode    NVARCHAR(50)  NOT NULL,
        FieldCode       NVARCHAR(100) NOT NULL,
        FieldLabel      NVARCHAR(200) NOT NULL DEFAULT '',
        FieldGroup      NVARCHAR(100) NOT NULL DEFAULT '',
        FieldType       NVARCHAR(50)  NOT NULL DEFAULT 'text',
        IsVisible       BIT           NOT NULL DEFAULT 1,
        RequiredAction  NVARCHAR(50)  NOT NULL DEFAULT '',
        IsAudited       BIT           NOT NULL DEFAULT 0,
        ParentFieldCode NVARCHAR(100) NULL,
        SortOrder       INT           NOT NULL DEFAULT 0,
        UpdatedAt       DATETIME      NOT NULL DEFAULT GETDATE(),
        CONSTRAINT UQ_ScreenFieldConfig UNIQUE (TenantID, MenuItemCode, FieldCode)
      )
    `);

    // Migrate existing tables — add new columns if missing
    await pool.request().query(`
      IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblScreenFieldConfig') AND name='IsAudited')
        ALTER TABLE tblScreenFieldConfig ADD IsAudited BIT NOT NULL DEFAULT 0
    `);
    await pool.request().query(`
      IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('tblScreenFieldConfig') AND name='ParentFieldCode')
        ALTER TABLE tblScreenFieldConfig ADD ParentFieldCode NVARCHAR(100) NULL
    `);

    // Create tblRoleFieldPermissions
    await pool.request().query(`
      IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblRoleFieldPermissions' AND xtype='U')
      CREATE TABLE tblRoleFieldPermissions (
        PermID       INT IDENTITY(1,1) PRIMARY KEY,
        RoleID       INT           NOT NULL,
        TenantID     INT           NOT NULL,
        MenuItemCode NVARCHAR(50)  NOT NULL,
        FieldCode    NVARCHAR(100) NOT NULL,
        IsAllowed    BIT           NOT NULL DEFAULT 0,
        UpdatedAt    DATETIME      NOT NULL DEFAULT GETDATE(),
        CONSTRAINT UQ_RoleFieldPerm UNIQUE (RoleID, TenantID, MenuItemCode, FieldCode)
      )
    `);
  } catch(e) { console.warn('[screen-fields] init warning:', e.message); }
}
initTables();

// ── Template path map ─────────────────────────────────────────
const BASE = path.resolve(__dirname, '../../..', 'apps/portal/src/app/features');
const TEMPLATE_MAP = {
  'ORGANIZATIONS':      path.join(BASE, 'organizations/org-dialog/org-dialog.component.html'),
  'USERS':              path.join(BASE, 'users/user-dialog/user-dialog.component.html'),
  'CATALOG_CATEGORIES': path.join(BASE, 'catalog/categories/category-dialog/category-dialog.component.html'),
  'CATALOG_PRODUCTS':   path.join(BASE, 'catalog/products/product-dialog/product-dialog.component.html'),
  'CATALOG_PACKAGES':   path.join(BASE, 'catalog/packages/package-dialog/package-dialog.component.html'),
};

// ── HTML scanner ──────────────────────────────────────────────
function scanTemplate(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const fields = [];
  const seen = new Set();

  const regex = /formControlName="([^"]+)"/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const code = m[1];
    if (seen.has(code)) continue;
    seen.add(code);

    const before = html.substring(Math.max(0, m.index - 800), m.index);
    const after  = html.substring(m.index, Math.min(html.length, m.index + 300));

    const lblMatch = [...before.matchAll(/<label[^>]*>([^<]+)/g)].pop();
    const rawLabel = lblMatch ? lblMatch[1].replace(/\*/g, '').replace(/&quot;/g, '"').trim() : code;

    const h3Match = [...before.matchAll(/<h3>([^<]+)<\/h3>/g)].pop();
    const group   = h3Match ? h3Match[1].trim() : 'כללי';

    let type = 'text';
    if (after.includes('kendo-dropdownlist'))        type = 'dropdown';
    else if (after.includes('kendo-numerictextbox')) type = 'number';
    else if (after.includes('kendo-textarea'))        type = 'textarea';
    else if (/type="email"/.test(after))              type = 'email';
    else if (/type="password"|"'password'"/.test(after) || before.includes("'password'")) type = 'password';
    else if (after.includes('type="file"') || before.includes('accept=')) type = 'file';
    else if (before.includes('seg-ctrl') && !after.includes('kendo-')) type = 'boolean';

    fields.push({ code, label: rawLabel, group, type, sortOrder: fields.length });
  }

  return fields;
}

// ── GET /api/screen-fields/:code ──────────────────────────────
router.get('/:code', async (req, res) => {
  const { code } = req.params;
  const tenantId  = req.user.tenantId;
  try {
    await poolConnect;
    const pool = await getPool();
    const r = await pool.request()
      .input('TenantID',     sql.Int,         tenantId)
      .input('MenuItemCode', sql.NVarChar(50), code)
      .query(`SELECT FieldCode, FieldLabel, FieldGroup, FieldType,
                     IsVisible, RequiredAction, IsAudited, ParentFieldCode, SortOrder
              FROM tblScreenFieldConfig
              WHERE TenantID=@TenantID AND MenuItemCode=@MenuItemCode
              ORDER BY SortOrder, FieldCode`);
    res.json({ success: true, data: r.recordset });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── POST /api/screen-fields/:code/scan ───────────────────────
router.post('/:code/scan', async (req, res) => {
  const { code } = req.params;
  const tenantId  = req.user.tenantId;

  const tplPath = TEMPLATE_MAP[code];
  if (!tplPath) return res.status(400).json({ success: false, message: `אין תבנית מוגדרת עבור ${code}` });
  if (!fs.existsSync(tplPath)) return res.status(404).json({ success: false, message: 'קובץ תבנית לא נמצא' });

  try {
    const scanned = scanTemplate(tplPath);
    await poolConnect;
    const pool = await getPool();

    for (const f of scanned) {
      await pool.request()
        .input('TenantID',     sql.Int,          tenantId)
        .input('MenuItemCode', sql.NVarChar(50),  code)
        .input('FieldCode',    sql.NVarChar(100), f.code)
        .input('FieldLabel',   sql.NVarChar(200), f.label)
        .input('FieldGroup',   sql.NVarChar(100), f.group)
        .input('FieldType',    sql.NVarChar(50),  f.type)
        .input('SortOrder',    sql.Int,           f.sortOrder)
        .query(`
          IF EXISTS (SELECT 1 FROM tblScreenFieldConfig
                     WHERE TenantID=@TenantID AND MenuItemCode=@MenuItemCode AND FieldCode=@FieldCode)
            UPDATE tblScreenFieldConfig
            SET FieldLabel=@FieldLabel, FieldGroup=@FieldGroup, FieldType=@FieldType,
                SortOrder=@SortOrder, UpdatedAt=GETDATE()
            WHERE TenantID=@TenantID AND MenuItemCode=@MenuItemCode AND FieldCode=@FieldCode
          ELSE
            INSERT INTO tblScreenFieldConfig
              (TenantID, MenuItemCode, FieldCode, FieldLabel, FieldGroup, FieldType,
               IsVisible, RequiredAction, IsAudited, SortOrder)
            VALUES (@TenantID, @MenuItemCode, @FieldCode, @FieldLabel, @FieldGroup, @FieldType,
                    1, '', 0, @SortOrder)
        `);
    }

    const r = await pool.request()
      .input('TenantID',     sql.Int,         tenantId)
      .input('MenuItemCode', sql.NVarChar(50), code)
      .query(`SELECT FieldCode, FieldLabel, FieldGroup, FieldType,
                     IsVisible, RequiredAction, IsAudited, ParentFieldCode, SortOrder
              FROM tblScreenFieldConfig
              WHERE TenantID=@TenantID AND MenuItemCode=@MenuItemCode
              ORDER BY SortOrder, FieldCode`);

    res.json({ success: true, data: r.recordset, message: `נסרקו ${scanned.length} שדות` });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// ── PUT /api/screen-fields/:code — save field config ─────────
router.put('/:code', async (req, res) => {
  const { code } = req.params;
  const tenantId  = req.user.tenantId;
  const { fields } = req.body; // [{ fieldCode, isVisible, requiredAction, isAudited }]

  if (!Array.isArray(fields)) return res.status(400).json({ success: false, message: 'fields חסר' });

  try {
    await poolConnect;
    const pool = await getPool();
    for (const f of fields) {
      await pool.request()
        .input('TenantID',      sql.Int,         tenantId)
        .input('MenuItemCode',  sql.NVarChar(50), code)
        .input('FieldCode',     sql.NVarChar(100), f.fieldCode)
        .input('IsVisible',     sql.Bit,           f.isVisible ? 1 : 0)
        .input('RequiredAction',sql.NVarChar(50),  f.requiredAction || '')
        .input('IsAudited',     sql.Bit,           f.isAudited ? 1 : 0)
        .query(`UPDATE tblScreenFieldConfig
                SET IsVisible=@IsVisible, RequiredAction=@RequiredAction,
                    IsAudited=@IsAudited, UpdatedAt=GETDATE()
                WHERE TenantID=@TenantID AND MenuItemCode=@MenuItemCode AND FieldCode=@FieldCode`);
    }
    res.json({ success: true, message: 'הגדרות שדות נשמרו' });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
