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
    await addUserProfileColumns(pool);
    await updateSpUserUpdate(pool);
    await addEntityTokenColumns(pool);
    await seedActionTypes(pool);
    await createMissingTables(pool);
    await createConnectorsTable(pool);
    await seedDefaultConnectors(pool);
    await syncPlatformMenu(pool);
    await seedDefaultPermissions(pool);
    console.log('[seeder] ✅ DB seed complete');
  } catch (e) {
    console.warn('[seeder] ⚠ seed error (non-fatal):', e.message);
  }
}

// ── 0e. Add Token UUID column to all main entities (idempotent) ──
async function addEntityTokenColumns(pool) {
  const tables = [
    'tblTenants',
    'tblUsers',
    'tblOrgUnits',
    'tblOrgPositions',
    'tblRoles',
    'tblJobTitles',
    'tblMenuItems',
    'tblActionTypes',
  ];

  for (const tbl of tables) {
    // Skip if table doesn't exist yet
    const exists = await pool.request().query(
      `SELECT 1 FROM sysobjects WHERE name='${tbl}' AND xtype='U'`
    );
    if (!exists.recordset.length) continue;

    // Step 1: add column if missing (nullable first, to avoid conflict with existing rows)
    await pool.request().query(`
      IF NOT EXISTS (
        SELECT 1 FROM sys.columns
        WHERE object_id = OBJECT_ID('dbo.${tbl}') AND name = 'Token'
      )
        ALTER TABLE dbo.${tbl} ADD Token NVARCHAR(36) NULL;
    `);

    // Step 2: backfill NULL tokens
    await pool.request().query(`
      UPDATE dbo.${tbl}
      SET Token = CONVERT(NVARCHAR(36), NEWID())
      WHERE Token IS NULL OR Token = '';
    `);

    // Step 3: add UNIQUE constraint if missing
    await pool.request().query(`
      IF NOT EXISTS (
        SELECT 1 FROM sys.indexes
        WHERE object_id = OBJECT_ID('dbo.${tbl}') AND name = 'UQ_${tbl}_Token'
      )
        ALTER TABLE dbo.${tbl}
          ADD CONSTRAINT UQ_${tbl}_Token UNIQUE (Token);
    `);
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

    -- Roles 3-6: translate names to Hebrew
    UPDATE dbo.tblRoles SET RoleName=N'מנהל מערכת' WHERE RoleID=3 AND RoleName IN ('System Admin','TMPL_ADMIN');
    UPDATE dbo.tblRoles SET RoleName=N'מנהל'        WHERE RoleID=4 AND RoleName IN ('Manager','TMPL_MANAGER');
    UPDATE dbo.tblRoles SET RoleName=N'עובד'         WHERE RoleID=5 AND RoleName IN ('Employee','TMPL_EMPLOYEE');
    UPDATE dbo.tblRoles SET RoleName=N'קריאה בלבד'  WHERE RoleID=6 AND RoleName IN ('Read Only','TMPL_READONLY');
  `);
}

// ── 0d. Update sp_UserUpdate to accept profile fields ─────────
async function updateSpUserUpdate(pool) {
  await pool.request().query(`
    CREATE OR ALTER PROCEDURE dbo.sp_UserUpdate
      @UserID           INT,
      @FirstName        NVARCHAR(100),
      @LastName         NVARCHAR(100),
      @Email            NVARCHAR(150),
      @RoleID           INT,
      @IsActive         BIT,
      @Phone            NVARCHAR(30)  = NULL,
      @JobTitle         NVARCHAR(100) = NULL,
      @Notes            NVARCHAR(500) = NULL,
      @PrimaryOrgUnitID INT           = NULL,
      @ResultCode       INT           OUTPUT,
      @ResultMessage    NVARCHAR(200) OUTPUT
    AS
    BEGIN
      SET NOCOUNT ON;
      IF NOT EXISTS (SELECT 1 FROM dbo.tblUsers WHERE UserID=@UserID AND UserID>0)
      BEGIN SET @ResultCode=404; SET @ResultMessage=N'משתמש לא נמצא'; RETURN; END;
      IF EXISTS (SELECT 1 FROM dbo.tblUsers WHERE Email=@Email AND UserID<>@UserID AND UserID>0)
      BEGIN SET @ResultCode=2; SET @ResultMessage=N'כתובת המייל כבר רשומה למשתמש אחר'; RETURN; END;
      UPDATE dbo.tblUsers
      SET FirstName=@FirstName, LastName=@LastName, Email=@Email,
          RoleID=@RoleID, IsActive=@IsActive,
          Phone=@Phone, JobTitle=@JobTitle, Notes=@Notes,
          PrimaryOrgUnitID=@PrimaryOrgUnitID
      WHERE UserID=@UserID;
      SET @ResultCode=0; SET @ResultMessage=N'המשתמש עודכן בהצלחה';
    END;
  `);
}

// ── 0c. Add user profile columns (idempotent) ────────────────
async function addUserProfileColumns(pool) {
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblUsers') AND name='Phone')
      ALTER TABLE dbo.tblUsers ADD Phone NVARCHAR(30) NULL;
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblUsers') AND name='JobTitle')
      ALTER TABLE dbo.tblUsers ADD JobTitle NVARCHAR(100) NULL;
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblUsers') AND name='Notes')
      ALTER TABLE dbo.tblUsers ADD Notes NVARCHAR(500) NULL;
    IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblUsers') AND name='PrimaryOrgUnitID')
      ALTER TABLE dbo.tblUsers ADD PrimaryOrgUnitID INT NULL;
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

// ── Connectors table + seed ───────────────────────────────────
const { encryptConfig } = require('./connectorEncryption');

const CONNECTOR_DEFS = [
  // ── AI & Agents ──────────────────────────────────────────────
  {
    key: 'claude_api', category: 'AI', name: 'Claude (Anthropic API)', icon: '🤖',
    description: 'חיבור ל-Claude AI של Anthropic לביצוע פעולות AI, העשרת נתונים וסוכנים',
    schema: [
      { key: 'api_key',   label: 'API Key',          type: 'password', required: true,  placeholder: 'sk-ant-api03-...' },
      { key: 'model_id',  label: 'מודל ברירת מחדל', type: 'text',     required: false, default: 'claude-haiku-4-5-20251001', placeholder: 'claude-haiku-4-5-20251001' },
      { key: 'max_tokens',label: 'Max Tokens',        type: 'number',   required: false, default: 1024 },
    ],
    defaultConfig: { model_id: 'claude-haiku-4-5-20251001', max_tokens: 1024 },
  },
  {
    key: 'openai_api', category: 'AI', name: 'OpenAI', icon: '🧠',
    description: 'חיבור ל-OpenAI (GPT-4, GPT-4o) כגיבוי או לשימוש ייעודי',
    schema: [
      { key: 'api_key', label: 'API Key',    type: 'password', required: true,  placeholder: 'sk-...' },
      { key: 'org_id',  label: 'Org ID',     type: 'text',     required: false, placeholder: 'org-...' },
      { key: 'model',   label: 'מודל',       type: 'text',     required: false, default: 'gpt-4o-mini' },
    ],
    defaultConfig: { model: 'gpt-4o-mini' },
  },
  // ── Databases ────────────────────────────────────────────────
  {
    key: 'mssql_primary', category: 'DATABASE', name: 'MS-SQL ראשי', icon: '🗄️',
    description: 'בסיס הנתונים הראשי של המערכת — Microsoft SQL Server',
    schema: [
      { key: 'server',   label: 'שרת (IP / Hostname)', type: 'text',     required: true  },
      { key: 'database', label: 'שם מסד נתונים',       type: 'text',     required: true  },
      { key: 'userName', label: 'שם משתמש',            type: 'text',     required: true  },
      { key: 'password', label: 'סיסמה',               type: 'password', required: true  },
      { key: 'port',     label: 'פורט',                type: 'number',   required: false, default: 1433 },
      { key: 'encrypt',  label: 'הצפנת TLS',          type: 'boolean',  required: false, default: false },
    ],
    defaultConfig: {},
  },
  {
    key: 'mssql_backup', category: 'DATABASE', name: 'MS-SQL גיבוי', icon: '💾',
    description: 'שרת SQL גיבוי (Failover) — לא חובה',
    schema: [
      { key: 'server',   label: 'שרת (IP / Hostname)', type: 'text',     required: true  },
      { key: 'database', label: 'שם מסד נתונים',       type: 'text',     required: true  },
      { key: 'userName', label: 'שם משתמש',            type: 'text',     required: true  },
      { key: 'password', label: 'סיסמה',               type: 'password', required: true  },
      { key: 'port',     label: 'פורט',                type: 'number',   required: false, default: 1433 },
    ],
    defaultConfig: {},
  },
  // ── Email ────────────────────────────────────────────────────
  {
    key: 'smtp', category: 'EMAIL', name: 'SMTP', icon: '📧',
    description: 'שרת דואר יוצא — לשליחת התראות, אישורים ודוחות',
    schema: [
      { key: 'host',         label: 'שרת SMTP',        type: 'text',     required: true,  placeholder: 'smtp.gmail.com' },
      { key: 'port',         label: 'פורט',            type: 'number',   required: true,  default: 587 },
      { key: 'userName',     label: 'שם משתמש',        type: 'text',     required: true  },
      { key: 'password',     label: 'סיסמה / App Password', type: 'password', required: true  },
      { key: 'from_address', label: 'כתובת שולח',      type: 'text',     required: true,  placeholder: 'noreply@company.com' },
      { key: 'tls',          label: 'STARTTLS',         type: 'boolean',  required: false, default: true },
    ],
    defaultConfig: { port: 587, tls: true },
  },
  {
    key: 'sendgrid', category: 'EMAIL', name: 'SendGrid', icon: '📨',
    description: 'SendGrid API לשליחת אימיילים בנפח גדול',
    schema: [
      { key: 'api_key',      label: 'API Key',      type: 'password', required: true,  placeholder: 'SG.xxx...' },
      { key: 'from_address', label: 'כתובת שולח',  type: 'text',     required: true,  placeholder: 'noreply@company.com' },
    ],
    defaultConfig: {},
  },
  // ── Storage ──────────────────────────────────────────────────
  {
    key: 'azure_blob', category: 'STORAGE', name: 'Azure Blob Storage', icon: '☁️',
    description: 'אחסון קבצים ב-Microsoft Azure',
    schema: [
      { key: 'account_name', label: 'Account Name',  type: 'text',     required: true  },
      { key: 'account_key',  label: 'Account Key',   type: 'password', required: true  },
      { key: 'container',    label: 'Container Name', type: 'text',    required: true  },
    ],
    defaultConfig: {},
  },
  {
    key: 'aws_s3', category: 'STORAGE', name: 'AWS S3', icon: '📦',
    description: 'אחסון קבצים ב-Amazon S3',
    schema: [
      { key: 'access_key', label: 'Access Key ID',     type: 'text',     required: true  },
      { key: 'secret_key', label: 'Secret Access Key', type: 'password', required: true  },
      { key: 'region',     label: 'Region',            type: 'text',     required: true,  placeholder: 'us-east-1' },
      { key: 'bucket',     label: 'Bucket Name',       type: 'text',     required: true  },
    ],
    defaultConfig: {},
  },
  // ── Webhooks & Integrations ──────────────────────────────────
  {
    key: 'slack', category: 'WEBHOOK', name: 'Slack', icon: '💬',
    description: 'שליחת התראות ועדכונים לערוצי Slack',
    schema: [
      { key: 'bot_token',       label: 'Bot Token',        type: 'password', required: true,  placeholder: 'xoxb-...' },
      { key: 'default_channel', label: 'ערוץ ברירת מחדל', type: 'text',     required: false, default: '#general' },
      { key: 'webhook_url',     label: 'Incoming Webhook URL', type: 'text', required: false },
    ],
    defaultConfig: { default_channel: '#general' },
  },
  {
    key: 'teams', category: 'WEBHOOK', name: 'Microsoft Teams', icon: '👥',
    description: 'שליחת התראות ל-Microsoft Teams',
    schema: [
      { key: 'webhook_url', label: 'Incoming Webhook URL', type: 'text', required: true, placeholder: 'https://xxx.webhook.office.com/...' },
    ],
    defaultConfig: {},
  },
  {
    key: 'github', category: 'WEBHOOK', name: 'GitHub', icon: '🐙',
    description: 'חיבור ל-GitHub — Repos, Issues, Actions',
    schema: [
      { key: 'personal_access_token', label: 'Personal Access Token', type: 'password', required: true,  placeholder: 'ghp_...' },
      { key: 'org_name',              label: 'Organization Name',      type: 'text',     required: false },
    ],
    defaultConfig: {},
  },
  {
    key: 'boi_rates', category: 'WEBHOOK', name: 'שע"ח בנק ישראל', icon: '🏦',
    description: 'שערי חליפין מבנק ישראל — מתעדכן אוטומטית כל יום',
    schema: [
      { key: 'base_url', label: 'Base URL', type: 'text', required: false, default: 'https://edge.boi.gov.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/EXR', placeholder: 'https://...' },
      { key: 'timeout',  label: 'Timeout (שניות)', type: 'number', required: false, default: 30 },
    ],
    defaultConfig: { timeout: 30 },
  },
  // ── Auth / Identity ──────────────────────────────────────────
  {
    key: 'google_oauth', category: 'AUTH', name: 'Google OAuth', icon: '🔑',
    description: 'כניסה עם חשבון Google (OAuth 2.0)',
    schema: [
      { key: 'client_id',     label: 'Client ID',     type: 'text',     required: true  },
      { key: 'client_secret', label: 'Client Secret', type: 'password', required: true  },
      { key: 'redirect_uri',  label: 'Redirect URI',  type: 'text',     required: true,  placeholder: 'https://yourdomain.com/auth/google/callback' },
    ],
    defaultConfig: {},
  },
  {
    key: 'azure_ad', category: 'AUTH', name: 'Microsoft Azure AD', icon: '🔐',
    description: 'כניסה עם חשבון Microsoft / Azure Active Directory',
    schema: [
      { key: 'tenant_id',     label: 'Tenant ID',     type: 'text',     required: true  },
      { key: 'client_id',     label: 'Client ID',     type: 'text',     required: true  },
      { key: 'client_secret', label: 'Client Secret', type: 'password', required: true  },
    ],
    defaultConfig: {},
  },
];

async function createConnectorsTable(pool) {
  await pool.request().query(`
    IF NOT EXISTS (SELECT 1 FROM sysobjects WHERE name='tblConnectors' AND xtype='U')
    CREATE TABLE dbo.tblConnectors (
      ConnectorID    INT IDENTITY(1,1) PRIMARY KEY,
      TenantID       INT           NOT NULL DEFAULT 0,
      ProductID      INT           NOT NULL DEFAULT 0,
      ScopeLevel     VARCHAR(20)   NOT NULL DEFAULT 'PLATFORM',
      ConnectorKey   VARCHAR(50)   NOT NULL,
      Category       VARCHAR(30)   NOT NULL,
      ConnectorName  NVARCHAR(100) NOT NULL,
      IconEmoji      NVARCHAR(10)  NOT NULL DEFAULT '',
      Description    NVARCHAR(300) NOT NULL DEFAULT '',
      SchemaJSON     NVARCHAR(MAX) NULL,
      ConfigJSON     NVARCHAR(MAX) NULL,
      IsEnabled      BIT           NOT NULL DEFAULT 0,
      LastTestedAt   DATETIME      NULL,
      LastTestStatus VARCHAR(10)   NULL,
      LastTestMsg    NVARCHAR(300) NULL,
      UpdatedAt      DATETIME      NOT NULL DEFAULT GETDATE(),
      UpdatedBy      INT           NULL,
      CONSTRAINT UQ_Connector_Scope UNIQUE (TenantID, ProductID, ConnectorKey)
    )
  `);
}

async function seedDefaultConnectors(pool) {
  // Read .env values for mssql_primary default config
  const mssqlDefault = encryptConfig({
    server:   process.env.DB_SERVER   || '',
    database: process.env.DB_NAME     || '',
    userName: process.env.DB_USER     || '',
    password: process.env.DB_PASSWORD || '',
    port:     1433,
    encrypt:  false,
  });

  for (const def of CONNECTOR_DEFS) {
    const schemaJson = JSON.stringify(def.schema);
    // For mssql_primary: auto-populate from .env; others: empty config (user must fill)
    const configJson = def.key === 'mssql_primary'
      ? mssqlDefault
      : (Object.keys(def.defaultConfig).length ? encryptConfig(def.defaultConfig) : null);

    const isEnabled = def.key === 'mssql_primary' || def.key === 'boi_rates';

    await pool.request()
      .input('TenantID',      sql.Int,           0)
      .input('ProductID',     sql.Int,           0)
      .input('ScopeLevel',    sql.VarChar(20),   'PLATFORM')
      .input('ConnectorKey',  sql.VarChar(50),   def.key)
      .input('Category',      sql.VarChar(30),   def.category)
      .input('ConnectorName', sql.NVarChar(100), def.name)
      .input('IconEmoji',     sql.NVarChar(10),  def.icon)
      .input('Description',   sql.NVarChar(300), def.description)
      .input('SchemaJSON',    sql.NVarChar(sql.MAX), schemaJson)
      .input('ConfigJSON',    sql.NVarChar(sql.MAX), configJson)
      .input('IsEnabled',     sql.Bit,           isEnabled ? 1 : 0)
      .query(`
        IF NOT EXISTS (SELECT 1 FROM dbo.tblConnectors WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey)
          INSERT INTO dbo.tblConnectors
            (TenantID, ProductID, ScopeLevel, ConnectorKey, Category, ConnectorName, IconEmoji, Description, SchemaJSON, ConfigJSON, IsEnabled, UpdatedAt)
          VALUES
            (@TenantID, @ProductID, @ScopeLevel, @ConnectorKey, @Category, @ConnectorName, @IconEmoji, @Description, @SchemaJSON, @ConfigJSON, @IsEnabled, GETDATE())
        ELSE
          UPDATE dbo.tblConnectors
          SET SchemaJSON=@SchemaJSON, ConnectorName=@ConnectorName, IconEmoji=@IconEmoji, Description=@Description
          WHERE TenantID=@TenantID AND ProductID=@ProductID AND ConnectorKey=@ConnectorKey
      `);
  }
  console.log('[seeder] connectors seeded/updated');
}

module.exports = { runSeed };
