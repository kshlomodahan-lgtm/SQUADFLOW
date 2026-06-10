/**
 * dbSeeder — runs once on server startup
 * 1. Seeds tblActionTypes
 * 2. Creates tblUserRoleAssignments + tblUserPermissionOverrides if missing
 * 3. Auto-syncs platform menu items (TenantID=1)
 * 4. Seeds tblRolePermissions default matrix (only if completely empty)
 */
const { sql, getPool } = require('../db');

// ── Action Types ──────────────────────────────────────────────
const ACTION_TYPES = [
  { ActionCode: 'READ',           ActionName: 'צפייה',      ActionGroup: 'BASIC',     SortOrder: 1 },
  { ActionCode: 'CREATE',         ActionName: 'יצירה',      ActionGroup: 'WRITE',     SortOrder: 2 },
  { ActionCode: 'UPDATE',         ActionName: 'עדכון',      ActionGroup: 'WRITE',     SortOrder: 3 },
  { ActionCode: 'DELETE',         ActionName: 'מחיקה',      ActionGroup: 'WRITE',     SortOrder: 4 },
  { ActionCode: 'EXPORT',         ActionName: 'ייצוא',      ActionGroup: 'EXPORT',    SortOrder: 5 },
  { ActionCode: 'VIEW_SENSITIVE', ActionName: 'מידע רגיש',  ActionGroup: 'SENSITIVE', SortOrder: 6 },
];

// ── Platform menu seed (TenantID=1) ───────────────────────────
const PLATFORM_MENU = [
  { code: 'MAIN',               name: 'ראשי',              type: 'FOLDER', parent: null,       icon: 'menu',      route: '',                  actions: '',                                  sort: 0 },
  { code: 'DASHBOARD',          name: 'דשבורד',            type: 'SCREEN', parent: 'MAIN',     icon: 'grid',      route: '/app/dashboard',    actions: 'READ',                              sort: 1 },
  { code: 'ORGANIZATIONS',      name: 'ארגונים',            type: 'SCREEN', parent: 'MAIN',     icon: 'buildings', route: '/app/organizations', actions: 'READ,CREATE,UPDATE,DELETE,EXPORT',   sort: 2 },
  { code: 'USERS',              name: 'משתמשים',            type: 'SCREEN', parent: 'MAIN',     icon: 'person',    route: '/app/users',         actions: 'READ,CREATE,UPDATE,DELETE,EXPORT,VIEW_SENSITIVE', sort: 3 },
  { code: 'CATALOG',            name: 'קטלוג מוצרים',      type: 'FOLDER', parent: 'MAIN',     icon: 'layers',    route: '',                  actions: '',                                  sort: 4 },
  { code: 'CATALOG_CATEGORIES', name: 'קטגוריות',           type: 'SCREEN', parent: 'CATALOG',  icon: 'tag',       route: '/app/categories',    actions: 'READ,CREATE,UPDATE,DELETE',          sort: 1 },
  { code: 'CATALOG_PRODUCTS',   name: 'מוצרים',             type: 'SCREEN', parent: 'CATALOG',  icon: 'box',       route: '/app/products',      actions: 'READ,CREATE,UPDATE,DELETE,EXPORT',   sort: 2 },
  { code: 'CATALOG_PACKAGES',   name: 'חבילות',             type: 'SCREEN', parent: 'CATALOG',  icon: 'layers',    route: '/app/packages',      actions: 'READ,CREATE,UPDATE,DELETE,EXPORT',   sort: 3 },
  { code: 'AUDIT',              name: 'יומן פעילות',        type: 'SCREEN', parent: 'MAIN',     icon: 'clipboard', route: '/app/audit',         actions: 'READ,EXPORT',                       sort: 5 },
  { code: 'SETTINGS',           name: 'הגדרות',             type: 'FOLDER', parent: 'MAIN',     icon: 'gear',      route: '',                  actions: '',                                  sort: 6 },
  { code: 'SETTINGS_GENERAL',   name: 'הגדרות כלליות',     type: 'SCREEN', parent: 'SETTINGS', icon: 'gear',      route: '/app/settings',      actions: 'READ,UPDATE',                       sort: 1 },
  { code: 'SETTINGS_ROLES',     name: 'תפקידים והרשאות',   type: 'SCREEN', parent: 'SETTINGS', icon: 'lock',      route: '/app/settings',      actions: 'READ,CREATE,UPDATE,DELETE',          sort: 2 },
  { code: 'SETTINGS_ORGCHART',  name: 'מבנה ארגוני',       type: 'SCREEN', parent: 'SETTINGS', icon: 'buildings', route: '/app/settings',      actions: 'READ,CREATE,UPDATE,DELETE',          sort: 3 },
  { code: 'SETTINGS_MENU',      name: 'עץ תפריטים',        type: 'SCREEN', parent: 'SETTINGS', icon: 'menu',      route: '/app/settings',      actions: 'READ,CREATE,UPDATE,DELETE',          sort: 4 },
  { code: 'SETTINGS_SECURITY',  name: 'אבטחה',             type: 'SCREEN', parent: 'SETTINGS', icon: 'lock',      route: '/app/settings',      actions: 'READ,UPDATE,VIEW_SENSITIVE',         sort: 5 },
  { code: 'SETTINGS_GROUPS',    name: 'קבוצות',             type: 'SCREEN', parent: 'SETTINGS', icon: 'people',    route: '/app/settings',      actions: 'READ,CREATE,UPDATE,DELETE',          sort: 6 },
  { code: 'GROUPS',             name: 'קבוצות משתמשים',    type: 'SCREEN', parent: 'MAIN',     icon: 'people',    route: '/app/settings',      actions: 'READ,CREATE,UPDATE,DELETE',          sort: 7 },
];

// ── Default permission matrix ─────────────────────────────────
// Hierarchy: PLATFORM_ADMIN(1)=bypass > SUPER_ADMIN(2)=bypass-within-tenant > TMPL_*(3-6)=explicit perms
// PLATFORM_ADMIN and SUPER_ADMIN bypass checkPermission entirely — no rows needed for them.
// { MenuItemCode → { RoleCode → [ActionCodes] } }
const DEFAULT_PERMS = {
  DASHBOARD:          { SUPER_ADMIN: ['READ'],                                                         TMPL_ADMIN: ['READ'],                        TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: ['READ']  },
  ORGANIZATIONS:      { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE','EXPORT'],                      TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: []        },
  USERS:              { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE','EXPORT','VIEW_SENSITIVE'],      TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: []        },
  CATALOG_CATEGORIES: { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE'],                               TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ','CREATE','UPDATE'],  TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: ['READ']  },
  CATALOG_PRODUCTS:   { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE','EXPORT'],                      TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ','CREATE','UPDATE'],  TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: ['READ']  },
  CATALOG_PACKAGES:   { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE','EXPORT'],                      TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: []        },
  AUDIT:              { SUPER_ADMIN: ['READ','EXPORT'],                                                 TMPL_ADMIN: ['READ','EXPORT'],               TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: [],        TMPL_READONLY: []        },
  SETTINGS_GENERAL:   { SUPER_ADMIN: ['READ','UPDATE'],                                                 TMPL_ADMIN: ['READ','UPDATE'],               TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: []        },
  SETTINGS_ROLES:     { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE'],                               TMPL_ADMIN: ['READ'],                        TMPL_MANAGER: [],                         TMPL_EMPLOYEE: [],        TMPL_READONLY: []        },
  SETTINGS_ORGCHART:  { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE'],                               TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: []        },
  SETTINGS_MENU:      { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE'],                               TMPL_ADMIN: ['READ'],                        TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: [],        TMPL_READONLY: []        },
  SETTINGS_SECURITY:  { SUPER_ADMIN: ['READ','UPDATE','VIEW_SENSITIVE'],                                TMPL_ADMIN: ['READ'],                        TMPL_MANAGER: [],                         TMPL_EMPLOYEE: [],        TMPL_READONLY: []        },
  SETTINGS_GROUPS:    { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE'],                               TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: []        },
  GROUPS:             { SUPER_ADMIN: ['READ','CREATE','UPDATE','DELETE'],                               TMPL_ADMIN: ['READ','CREATE','UPDATE'],       TMPL_MANAGER: ['READ'],                   TMPL_EMPLOYEE: ['READ'],  TMPL_READONLY: []        },
};

// ─────────────────────────────────────────────────────────────

async function runSeed() {
  try {
    const pool = await getPool();
    await fixLoginAuditFK(pool);
    await renameCorePlatformRoles(pool);
    await seedActionTypes(pool);
    await createMissingTables(pool);
    await syncPlatformMenu(pool);
    await seedDefaultPermissions(pool);
    console.log('[seeder] ✅ DB seed complete');
  } catch (e) {
    console.warn('[seeder] ⚠ seed error (non-fatal):', e.message);
  }
}

// ── 0a. Rename core platform roles (idempotent) ───────────────
async function renameCorePlatformRoles(pool) {
  await pool.request().query(`
    -- RoleID=1: was SUPER_ADMIN → now PLATFORM_ADMIN (god mode, cross-tenant)
    IF EXISTS (SELECT 1 FROM dbo.tblRoles WHERE RoleID=1 AND RoleCode='SUPER_ADMIN')
      UPDATE dbo.tblRoles SET RoleCode='PLATFORM_ADMIN', RoleName=N'מנהל פלטפורמה' WHERE RoleID=1;

    -- RoleID=2: was PLATFORM_USER → now SUPER_ADMIN (full access within own tenant)
    IF EXISTS (SELECT 1 FROM dbo.tblRoles WHERE RoleID=2 AND RoleCode='PLATFORM_USER')
      UPDATE dbo.tblRoles SET RoleCode='SUPER_ADMIN', RoleName=N'מנהל עליון' WHERE RoleID=2;
  `);
}

// ── 0b. Fix tblLoginAudit FK — allows NULL/0 UserID for failed logins ──
async function fixLoginAuditFK(pool) {
  await pool.request().query(`
    -- Drop FK on UserID so failed logins (UserID=0/NULL) can be audited
    IF EXISTS (SELECT 1 FROM sys.foreign_keys
               WHERE name='FK_tblLoginAudit_User'
                 AND parent_object_id = OBJECT_ID('dbo.tblLoginAudit'))
      ALTER TABLE dbo.tblLoginAudit DROP CONSTRAINT FK_tblLoginAudit_User;

    -- Make UserID nullable if it isn't already
    IF EXISTS (SELECT 1 FROM sys.columns
               WHERE object_id = OBJECT_ID('dbo.tblLoginAudit')
                 AND name = 'UserID' AND is_nullable = 0)
      ALTER TABLE dbo.tblLoginAudit ALTER COLUMN UserID INT NULL;
  `);
}

// ── 1. Action Types ───────────────────────────────────────────
async function seedActionTypes(pool) {
  for (const at of ACTION_TYPES) {
    await pool.request()
      .input('ActionCode',  sql.VarChar(30),   at.ActionCode)
      .input('ActionName',  sql.NVarChar(50),  at.ActionName)
      .input('ActionGroup', sql.VarChar(20),   at.ActionGroup)
      .input('SortOrder',   sql.Int,           at.SortOrder)
      .query(`
        IF NOT EXISTS (SELECT 1 FROM dbo.tblActionTypes WHERE ActionCode = @ActionCode)
          INSERT INTO dbo.tblActionTypes (ActionCode, ActionName, ActionGroup, SortOrder, IsActive)
          VALUES (@ActionCode, @ActionName, @ActionGroup, @SortOrder, 1)
        ELSE
          UPDATE dbo.tblActionTypes
          SET ActionName=@ActionName, ActionGroup=@ActionGroup, SortOrder=@SortOrder
          WHERE ActionCode=@ActionCode
      `);
  }
}

// ── 2. Missing tables ─────────────────────────────────────────
async function createMissingTables(pool) {
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserRoleAssignments' AND xtype='U')
    CREATE TABLE dbo.tblUserRoleAssignments (
      AssignmentID     INT IDENTITY(1,1) PRIMARY KEY,
      UserID           INT NOT NULL,
      RoleID           INT NOT NULL,
      TenantID         INT NOT NULL DEFAULT 0,
      AssignedAt       DATETIME DEFAULT GETDATE(),
      AssignedByUserID INT NULL,
      ExpiryDate       DATETIME NULL,
      IsActive         BIT DEFAULT 1,
      CONSTRAINT UQ_UserRoleAssign UNIQUE (UserID, RoleID)
    )
  `);

  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblUserPermissionOverrides' AND xtype='U')
    CREATE TABLE dbo.tblUserPermissionOverrides (
      OverrideID        INT IDENTITY(1,1) PRIMARY KEY,
      UserID            INT NOT NULL,
      TenantID          INT NOT NULL DEFAULT 0,
      MenuItemID        INT NOT NULL,
      ActionCode        VARCHAR(30) NOT NULL,
      IsAllowed         BIT NOT NULL,
      Reason            NVARCHAR(200) DEFAULT '',
      ExpiryDate        DATETIME NULL,
      CreatedAt         DATETIME DEFAULT GETDATE(),
      CreatedByUserID   INT NULL,
      CONSTRAINT UQ_UserPermOverride UNIQUE (UserID, MenuItemID, ActionCode)
    )
  `);
}

// ── 3. Platform menu items (TenantID=1, idempotent) ───────────
async function syncPlatformMenu(pool) {
  const existing = await pool.request().query(
    `SELECT MenuItemID, MenuItemCode FROM dbo.tblMenuItems WHERE TenantID=1 AND IsActive=1`
  );
  const codeToId = {};
  existing.recordset.forEach(r => { codeToId[r.MenuItemCode] = r.MenuItemID; });

  for (const item of PLATFORM_MENU) {
    if (codeToId[item.code]) continue;
    const parentId = item.parent ? (codeToId[item.parent] || 0) : 0;

    try {
      const r = await pool.request()
        .input('MenuItemID',   sql.Int,           0)
        .input('TenantID',     sql.Int,           1)
        .input('ParentID',     sql.Int,           parentId)
        .input('MenuItemCode', sql.NVarChar(50),  item.code)
        .input('MenuItemName', sql.NVarChar(100), item.name)
        .input('MenuItemType', sql.VarChar(20),   item.type)
        .input('Route',        sql.NVarChar(200), item.route || '')
        .input('Icon',         sql.NVarChar(50),  item.icon || 'grid')
        .input('SortOrder',    sql.Int,           item.sort || 0)
        .input('IsVisible',    sql.Bit,           1)
        .input('IsActive',     sql.Bit,           1)
        .input('ActionCodes',  sql.NVarChar(500), item.actions || '')
        .output('ResultCode',    sql.Int)
        .output('ResultMessage', sql.NVarChar(200))
        .execute('sp_MenuItemSave');

      if (r.output.ResultCode > 0) codeToId[item.code] = r.output.ResultCode;
    } catch (e) {
      console.warn(`[seeder] menu item ${item.code}:`, e.message);
    }
  }
}

// ── 4. Default permission matrix ──────────────────────────────
async function seedDefaultPermissions(pool) {
  // Skip if already has data (idempotent guard)
  const chk = await pool.request().query(
    `SELECT COUNT(*) AS cnt FROM dbo.tblRolePermissions WHERE IsAllowed=1`
  );
  if (chk.recordset[0].cnt > 0) {
    // Still upsert GROUPS/SETTINGS_GROUPS — might be new
    await upsertGroupPerms(pool);
    return;
  }

  // Load role map: RoleCode → RoleID
  const rolesR = await pool.request().query(
    `SELECT RoleID, RoleCode FROM dbo.tblRoles WHERE IsActive=1 AND RoleID > 1`
  );
  const roleMap = {};
  rolesR.recordset.forEach(r => { roleMap[r.RoleCode] = r.RoleID; });

  // Load menu map: MenuItemCode → MenuItemID (for tenant 1 items)
  const menuR = await pool.request().query(
    `SELECT MenuItemID, MenuItemCode FROM dbo.tblMenuItems WHERE IsActive=1 AND TenantID=1`
  );
  const menuMap = {};
  menuR.recordset.forEach(m => { menuMap[m.MenuItemCode] = m.MenuItemID; });

  let inserted = 0;
  for (const [screen, roleDefs] of Object.entries(DEFAULT_PERMS)) {
    const menuId = menuMap[screen];
    if (!menuId) { console.warn(`[seeder] menu item not found: ${screen}`); continue; }

    for (const [roleCode, actions] of Object.entries(roleDefs)) {
      const roleId = roleMap[roleCode];
      if (!roleId) continue;

      for (const action of actions) {
        await pool.request()
          .input('RoleID',     sql.Int,         roleId)
          .input('MenuItemID', sql.Int,         menuId)
          .input('ActionCode', sql.VarChar(30), action)
          .query(`
            IF NOT EXISTS (SELECT 1 FROM dbo.tblRolePermissions
                           WHERE RoleID=@RoleID AND MenuItemID=@MenuItemID AND ActionCode=@ActionCode)
              INSERT INTO dbo.tblRolePermissions (RoleID, MenuItemID, ActionCode, IsAllowed, UpdatedAt, UpdatedByUserID)
              VALUES (@RoleID, @MenuItemID, @ActionCode, 1, GETDATE(), 1)
          `);
        inserted++;
      }
    }
  }
  console.log(`[seeder] seeded ${inserted} default permissions`);
}

// Upsert only GROUPS + SETTINGS_GROUPS permissions (called on subsequent startups)
async function upsertGroupPerms(pool) {
  const groupScreens = ['GROUPS', 'SETTINGS_GROUPS'];

  const menuR = await pool.request().query(
    `SELECT MenuItemID, MenuItemCode FROM dbo.tblMenuItems
     WHERE MenuItemCode IN ('GROUPS','SETTINGS_GROUPS') AND IsActive=1 AND TenantID=1`
  );
  const menuMap = {};
  menuR.recordset.forEach(m => { menuMap[m.MenuItemCode] = m.MenuItemID; });

  const rolesR = await pool.request().query(
    `SELECT RoleID, RoleCode FROM dbo.tblRoles WHERE IsActive=1 AND RoleID > 1`
  );
  const roleMap = {};
  rolesR.recordset.forEach(r => { roleMap[r.RoleCode] = r.RoleID; });

  for (const screen of groupScreens) {
    const menuId = menuMap[screen];
    if (!menuId) continue;
    const roleDefs = DEFAULT_PERMS[screen] || {};

    for (const [roleCode, actions] of Object.entries(roleDefs)) {
      const roleId = roleMap[roleCode];
      if (!roleId) continue;

      for (const action of actions) {
        await pool.request()
          .input('RoleID',     sql.Int,         roleId)
          .input('MenuItemID', sql.Int,         menuId)
          .input('ActionCode', sql.VarChar(30), action)
          .query(`
            IF NOT EXISTS (SELECT 1 FROM dbo.tblRolePermissions
                           WHERE RoleID=@RoleID AND MenuItemID=@MenuItemID AND ActionCode=@ActionCode)
              INSERT INTO dbo.tblRolePermissions (RoleID, MenuItemID, ActionCode, IsAllowed, UpdatedAt, UpdatedByUserID)
              VALUES (@RoleID, @MenuItemID, @ActionCode, 1, GETDATE(), 1)
          `);
      }
    }
  }
}

module.exports = { runSeed };
