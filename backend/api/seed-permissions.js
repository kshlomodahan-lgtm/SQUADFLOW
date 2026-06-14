/**
 * זריעת הרשאות מובנות לטנאנט פלטפורמה
 * הרץ: node seed-permissions.js <TenantID>
 * דוגמה: node seed-permissions.js 1
 */
const { sql, getPool } = require('./db');
require('dotenv').config();

const TENANT_ID = parseInt(process.argv[2] || '0');
if (!TENANT_ID) { console.error('Usage: node seed-permissions.js <TenantID>'); process.exit(1); }

const PERMISSIONS = [
  // ══════════════════════════════════════════════════════
  // MENU — פריטי תפריט ראשי
  // ══════════════════════════════════════════════════════
  { permCode: 'MENU_DASHBOARD',     permName: 'תפריט — דשבורד',         scope: 'MENU', controlType: '' },
  { permCode: 'MENU_ORGANIZATIONS', permName: 'תפריט — ארגונים',         scope: 'MENU', controlType: '' },
  { permCode: 'MENU_USERS',         permName: 'תפריט — משתמשים',         scope: 'MENU', controlType: '' },
  { permCode: 'MENU_PROJECTS',      permName: 'תפריט — פרויקטים',        scope: 'MENU', controlType: '' },
  { permCode: 'MENU_CATEGORIES',    permName: 'תפריט — קטגוריות',        scope: 'MENU', controlType: '' },
  { permCode: 'MENU_PRODUCTS',      permName: 'תפריט — מוצרים',          scope: 'MENU', controlType: '' },
  { permCode: 'MENU_PACKAGES',      permName: 'תפריט — חבילות',          scope: 'MENU', controlType: '' },
  { permCode: 'MENU_AUDIT',         permName: 'תפריט — יומן פעילות',     scope: 'MENU', controlType: '' },
  { permCode: 'MENU_SETTINGS',      permName: 'תפריט — הגדרות',          scope: 'MENU', controlType: '' },

  // ══════════════════════════════════════════════════════
  // SCREEN — מסכים
  // ══════════════════════════════════════════════════════
  { permCode: 'SCR_DASHBOARD',      permName: 'מסך — דשבורד',            scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_ORG_LIST',       permName: 'מסך — רשימת ארגונים',     scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_ORG_DIALOG',     permName: 'מסך — דיאלוג ארגון',      scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_USER_LIST',      permName: 'מסך — רשימת משתמשים',     scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_USER_DIALOG',    permName: 'מסך — דיאלוג משתמש',      scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_PROJECT_LIST',   permName: 'מסך — רשימת פרויקטים',    scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_CATEGORY_LIST',  permName: 'מסך — רשימת קטגוריות',    scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_PRODUCT_LIST',   permName: 'מסך — רשימת מוצרים',      scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_PRODUCT_DIALOG', permName: 'מסך — דיאלוג מוצר',       scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_PACKAGE_LIST',   permName: 'מסך — רשימת חבילות',      scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_PACKAGE_DIALOG', permName: 'מסך — דיאלוג חבילה',      scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_AUDIT_LOG',      permName: 'מסך — יומן פעילות',       scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_SETTINGS',       permName: 'מסך — הגדרות',            scope: 'SCREEN', controlType: '' },
  { permCode: 'SCR_PERM_CODES',     permName: 'מסך — ניהול הרשאות',      scope: 'SCREEN', controlType: '' },

  // ══════════════════════════════════════════════════════
  // CONTROL / BUTTON — כפתורי פעולה
  // ══════════════════════════════════════════════════════
  { permCode: 'CTRL_ORG_NEW',       permName: 'ארגונים — כפתור ארגון חדש',       scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_ORG_EDIT',      permName: 'ארגונים — כפתור עריכה',           scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_ORG_DELETE',    permName: 'ארגונים — כפתור מחיקה',           scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_ORG_TOGGLE',    permName: 'ארגונים — הפעלה/השהיה',           scope: 'CONTROL', controlType: 'BUTTON' },

  { permCode: 'CTRL_USER_NEW',      permName: 'משתמשים — כפתור משתמש חדש',       scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_USER_EDIT',     permName: 'משתמשים — כפתור עריכה',           scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_USER_DELETE',   permName: 'משתמשים — כפתור מחיקה',           scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_USER_TOGGLE',   permName: 'משתמשים — הפעלה/השהיה',           scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_USER_RESET_PWD',permName: 'משתמשים — איפוס סיסמה',           scope: 'CONTROL', controlType: 'BUTTON' },

  { permCode: 'CTRL_PROJ_NEW',      permName: 'פרויקטים — כפתור פרויקט חדש',     scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PROJ_EDIT',     permName: 'פרויקטים — כפתור עריכה',          scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PROJ_DELETE',   permName: 'פרויקטים — כפתור מחיקה',          scope: 'CONTROL', controlType: 'BUTTON' },

  { permCode: 'CTRL_PROD_NEW',      permName: 'מוצרים — כפתור מוצר חדש',         scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PROD_EDIT',     permName: 'מוצרים — כפתור עריכה',            scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PROD_DELETE',   permName: 'מוצרים — כפתור מחיקה',            scope: 'CONTROL', controlType: 'BUTTON' },

  { permCode: 'CTRL_PKG_NEW',       permName: 'חבילות — כפתור חבילה חדשה',       scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PKG_EDIT',      permName: 'חבילות — כפתור עריכה',            scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PKG_DELETE',    permName: 'חבילות — כפתור מחיקה',            scope: 'CONTROL', controlType: 'BUTTON' },

  { permCode: 'CTRL_PERM_NEW',      permName: 'הרשאות — כפתור הרשאה חדשה',       scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PERM_EDIT',     permName: 'הרשאות — כפתור עריכה',            scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PERM_LOCK',     permName: 'הרשאות — נעילה/שחרור',            scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_PERM_EXPAND',   permName: 'הרשאות — הרחבת פרטים',            scope: 'CONTROL', controlType: 'BUTTON' },

  { permCode: 'CTRL_AUDIT_EXPORT',  permName: 'יומן פעילות — ייצוא',             scope: 'CONTROL', controlType: 'BUTTON' },
  { permCode: 'CTRL_AUDIT_FILTER',  permName: 'יומן פעילות — סינון',             scope: 'CONTROL', controlType: 'PANEL' },
];

async function seed() {
  const pool = await getPool();
  let created = 0, skipped = 0;

  for (const p of PERMISSIONS) {
    try {
      await pool.request()
        .input('TenantID',    sql.Int,           TENANT_ID)
        .input('PermCode',    sql.VarChar(100),   p.permCode)
        .input('PermName',    sql.NVarChar(150),  p.permName)
        .input('Scope',       sql.VarChar(20),    p.scope)
        .input('ControlType', sql.VarChar(10),    p.controlType)
        .input('SourceType',  sql.VarChar(10),    'SCANNER')
        .query(`
          IF NOT EXISTS (SELECT 1 FROM dbo.tblPermissionCodes WHERE TenantID=@TenantID AND PermCode=@PermCode)
            INSERT INTO dbo.tblPermissionCodes
              (TenantID, PermCode, PermName, Scope, ControlType, SourceType, Tags, Notes, Description, ProductID, ProjectID)
            VALUES
              (@TenantID, @PermCode, @PermName, @Scope, @ControlType, @SourceType, '', '', '', 0, 0)
        `);
      console.log(`  ✓  ${p.permCode}`);
      created++;
    } catch (e) {
      if (e.message.includes('UQ_PermCode')) {
        console.log(`  –  ${p.permCode}  (קיים)`);
        skipped++;
      } else {
        console.error(`  ✗  ${p.permCode}: ${e.message}`);
      }
    }
  }

  console.log(`\nסה"כ: ${created} נוצרו, ${skipped} דולגו`);
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
