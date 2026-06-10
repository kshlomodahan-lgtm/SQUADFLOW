const express = require('express');
const router  = express.Router();
const { sql, getPool, poolConnect } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// GET /api/menu-items — tree for current tenant (auto-seeds root "ראשי" folder)
router.get('/', async (req, res) => {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('TenantID', sql.Int, req.user.tenantId)
      .output('ResultCode', sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_MenuItemList');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    let items = result.recordset;

    // Auto-seed "ראשי" root folder for tenant if missing
    const hasRootFolder = items.some(i => i.TenantID === req.user.tenantId && i.MenuItemType === 'FOLDER' && !i.ParentID);
    if (!hasRootFolder) {
      await pool.request()
        .input('MenuItemID',  sql.Int,           0)
        .input('TenantID',    sql.Int,           req.user.tenantId)
        .input('ParentID',    sql.Int,           0)
        .input('MenuItemCode',sql.NVarChar(50),  'MAIN')
        .input('MenuItemName',sql.NVarChar(100), 'ראשי')
        .input('MenuItemType',sql.VarChar(20),   'FOLDER')
        .input('Route',       sql.NVarChar(200), '')
        .input('Icon',        sql.NVarChar(50),  'menu')
        .input('SortOrder',   sql.Int,           0)
        .input('IsVisible',   sql.Bit,           1)
        .input('IsActive',    sql.Bit,           1)
        .input('ActionCodes', sql.NVarChar(500), '')
        .output('ResultCode',    sql.Int)
        .output('ResultMessage', sql.NVarChar(200))
        .execute('sp_MenuItemSave');

      const r2 = await pool.request()
        .input('TenantID', sql.Int, req.user.tenantId)
        .output('ResultCode', sql.Int)
        .output('ResultMessage', sql.NVarChar(200))
        .execute('sp_MenuItemList');
      items = r2.recordset;
    }

    // Hide platform items (TenantID=0) when tenant has their own version of the same code
    const tenantCodes = new Set(items.filter(i => i.TenantID === req.user.tenantId).map(i => i.MenuItemCode));
    const filtered = items.filter(i => i.TenantID !== 0 || !tenantCodes.has(i.MenuItemCode));

    res.json({ success: true, data: filtered });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/menu-items — create
router.post('/', async (req, res) => {
  const { parentId=0, menuItemCode, menuItemName, menuItemType='SCREEN', route='', icon='', sortOrder=0, isVisible=true, actionCodes='' } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('MenuItemID',  sql.Int,          0)
      .input('TenantID',    sql.Int,          req.user.tenantId)
      .input('ParentID',    sql.Int,          parentId)
      .input('MenuItemCode',sql.NVarChar(50), menuItemCode)
      .input('MenuItemName',sql.NVarChar(100),menuItemName)
      .input('MenuItemType',sql.VarChar(20),  menuItemType)
      .input('Route',       sql.NVarChar(200),route)
      .input('Icon',        sql.NVarChar(50), icon)
      .input('SortOrder',   sql.Int,          sortOrder)
      .input('IsVisible',   sql.Bit,          isVisible ? 1 : 0)
      .input('IsActive',    sql.Bit,          1)
      .input('ActionCodes', sql.NVarChar(500),actionCodes)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_MenuItemSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, data: { menuItemId: result.output.ResultCode }, message: 'נשמר בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// PUT /api/menu-items/:id — update
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { parentId=0, menuItemCode, menuItemName, menuItemType='SCREEN', route='', icon='', sortOrder=0, isVisible=true, isActive=true, actionCodes='' } = req.body;
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .input('MenuItemID',  sql.Int,          id)
      .input('TenantID',    sql.Int,          req.user.tenantId)
      .input('ParentID',    sql.Int,          parentId)
      .input('MenuItemCode',sql.NVarChar(50), menuItemCode)
      .input('MenuItemName',sql.NVarChar(100),menuItemName)
      .input('MenuItemType',sql.VarChar(20),  menuItemType)
      .input('Route',       sql.NVarChar(200),route)
      .input('Icon',        sql.NVarChar(50), icon)
      .input('SortOrder',   sql.Int,          sortOrder)
      .input('IsVisible',   sql.Bit,          isVisible ? 1 : 0)
      .input('IsActive',    sql.Bit,          isActive ? 1 : 0)
      .input('ActionCodes', sql.NVarChar(500),actionCodes)
      .output('ResultCode',    sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_MenuItemSave');

    if (result.output.ResultCode < 0)
      return res.status(400).json({ success: false, message: result.output.ResultMessage });

    res.json({ success: true, message: 'עודכן בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// DELETE /api/menu-items/:id — soft delete
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await poolConnect;
    const pool = await getPool();
    await pool.request()
      .input('MenuItemID', sql.Int, id)
      .input('TenantID',   sql.Int, req.user.tenantId)
      .query('UPDATE tblMenuItems SET IsActive=0, UpdatedAt=GETDATE() WHERE MenuItemID=@MenuItemID AND TenantID=@TenantID AND IsSystem IS NULL');
    res.json({ success: true, message: 'נמחק בהצלחה' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// POST /api/menu-items/sync-from-routes — build tenant menu from app routes
const ROUTE_SEED = [
  { code: 'MAIN',               name: 'ראשי',             type: 'FOLDER', parent: null,       icon: 'menu',      route: '',                 actions: '',                         sortOrder: 0 },
  { code: 'DASHBOARD',          name: 'דשבורד',           type: 'SCREEN', parent: 'MAIN',     icon: 'grid',      route: '/app/dashboard',   actions: 'READ',                     sortOrder: 1 },
  { code: 'ORGANIZATIONS',      name: 'ארגונים',           type: 'SCREEN', parent: 'MAIN',     icon: 'buildings', route: '/app/organizations',actions: 'READ,CREATE,UPDATE,DELETE,EXPORT', sortOrder: 2 },
  { code: 'USERS',              name: 'משתמשים',           type: 'SCREEN', parent: 'MAIN',     icon: 'person',    route: '/app/users',        actions: 'READ,CREATE,UPDATE,DELETE,EXPORT,VIEW_SENSITIVE', sortOrder: 3 },
  { code: 'CATALOG',            name: 'קטלוג מוצרים',     type: 'FOLDER', parent: 'MAIN',     icon: 'layers',    route: '',                 actions: '',                         sortOrder: 4 },
  { code: 'CATALOG_CATEGORIES', name: 'קטגוריות',          type: 'SCREEN', parent: 'CATALOG',  icon: 'tag',       route: '/app/categories',   actions: 'READ,CREATE,UPDATE,DELETE', sortOrder: 1 },
  { code: 'CATALOG_PRODUCTS',   name: 'מוצרים',            type: 'SCREEN', parent: 'CATALOG',  icon: 'box',       route: '/app/products',     actions: 'READ,CREATE,UPDATE,DELETE,EXPORT', sortOrder: 2 },
  { code: 'CATALOG_PACKAGES',   name: 'חבילות',            type: 'SCREEN', parent: 'CATALOG',  icon: 'layers',    route: '/app/packages',     actions: 'READ,CREATE,UPDATE,DELETE,EXPORT', sortOrder: 3 },
  { code: 'AUDIT',              name: 'יומן פעילות',       type: 'SCREEN', parent: 'MAIN',     icon: 'clipboard', route: '/app/audit',        actions: 'READ,EXPORT',              sortOrder: 5 },
  { code: 'SETTINGS',           name: 'הגדרות',            type: 'FOLDER', parent: 'MAIN',     icon: 'gear',      route: '',                 actions: '',                         sortOrder: 6 },
  { code: 'SETTINGS_GENERAL',   name: 'הגדרות כלליות',    type: 'SCREEN', parent: 'SETTINGS', icon: 'gear',      route: '/app/settings',    actions: 'READ,UPDATE',              sortOrder: 1 },
  { code: 'SETTINGS_ROLES',     name: 'תפקידים והרשאות',  type: 'SCREEN', parent: 'SETTINGS', icon: 'lock',      route: '/app/settings',    actions: 'READ,CREATE,UPDATE,DELETE', sortOrder: 2 },
  { code: 'SETTINGS_ORGCHART',  name: 'מבנה ארגוני',      type: 'SCREEN', parent: 'SETTINGS', icon: 'buildings', route: '/app/settings',    actions: 'READ,CREATE,UPDATE,DELETE', sortOrder: 3 },
  { code: 'SETTINGS_MENU',      name: 'עץ תפריטים',       type: 'SCREEN', parent: 'SETTINGS', icon: 'menu',      route: '/app/settings',    actions: 'READ,CREATE,UPDATE,DELETE', sortOrder: 4 },
  { code: 'SETTINGS_SECURITY',  name: 'אבטחה',            type: 'SCREEN', parent: 'SETTINGS', icon: 'lock',      route: '/app/settings',    actions: 'READ,UPDATE,VIEW_SENSITIVE', sortOrder: 5 },
  { code: 'SETTINGS_GROUPS',   name: 'קבוצות',            type: 'SCREEN', parent: 'SETTINGS', icon: 'people',    route: '/app/settings',    actions: 'READ,CREATE,UPDATE,DELETE', sortOrder: 6 },
  { code: 'GROUPS',            name: 'קבוצות משתמשים',   type: 'SCREEN', parent: 'MAIN',     icon: 'people',    route: '/app/settings',    actions: 'READ,CREATE,UPDATE,DELETE', sortOrder: 7 },
];

router.post('/sync-from-routes', async (req, res) => {
  const tenantId = req.user.tenantId;
  try {
    await poolConnect;
    const pool = await getPool();

    // Fetch existing tenant items
    const existing = await pool.request()
      .query(`SELECT MenuItemID, MenuItemCode FROM tblMenuItems WHERE TenantID=${tenantId} AND IsActive=1`);
    const codeToId = {};
    existing.recordset.forEach(r => { codeToId[r.MenuItemCode] = r.MenuItemID; });

    let created = 0;
    for (const item of ROUTE_SEED) {
      if (codeToId[item.code]) continue; // already exists
      const parentId = item.parent ? (codeToId[item.parent] || 0) : 0;
      const r = await pool.request()
        .input('MenuItemID',  sql.Int,           0)
        .input('TenantID',    sql.Int,           tenantId)
        .input('ParentID',    sql.Int,           parentId)
        .input('MenuItemCode',sql.NVarChar(50),  item.code)
        .input('MenuItemName',sql.NVarChar(100), item.name)
        .input('MenuItemType',sql.VarChar(20),   item.type)
        .input('Route',       sql.NVarChar(200), item.route || '')
        .input('Icon',        sql.NVarChar(50),  item.icon || 'grid')
        .input('SortOrder',   sql.Int,           item.sortOrder || 0)
        .input('IsVisible',   sql.Bit,           1)
        .input('IsActive',    sql.Bit,           1)
        .input('ActionCodes', sql.NVarChar(500), item.actions || '')
        .output('ResultCode',    sql.Int)
        .output('ResultMessage', sql.NVarChar(200))
        .execute('sp_MenuItemSave');
      if (r.output.ResultCode > 0) {
        codeToId[item.code] = r.output.ResultCode;
        created++;
      }
    }

    // Return updated full list (with dedup)
    const final = await pool.request()
      .input('TenantID', sql.Int, tenantId)
      .output('ResultCode', sql.Int)
      .output('ResultMessage', sql.NVarChar(200))
      .execute('sp_MenuItemList');
    const tenantCodes = new Set(final.recordset.filter(i => i.TenantID === tenantId).map(i => i.MenuItemCode));
    const filtered = final.recordset.filter(i => i.TenantID !== 0 || !tenantCodes.has(i.MenuItemCode));

    res.json({ success: true, data: filtered, message: `סונכרן בהצלחה — נוספו ${created} פריטים` });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/menu-items/action-types
router.get('/action-types', async (req, res) => {
  try {
    await poolConnect;
    const pool = await getPool();
    const result = await pool.request()
      .query('SELECT ActionCode, ActionName, ActionGroup, SortOrder FROM tblActionTypes WHERE IsActive=1 ORDER BY SortOrder');
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
