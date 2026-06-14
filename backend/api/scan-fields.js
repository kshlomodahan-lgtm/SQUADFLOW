/**
 * סורק שדות טפסים מכל קבצי HTML ב-Angular ויוצר הרשאות CONTROL/FIELD
 * הרץ: node scan-fields.js <TenantID>
 * דוגמה: node scan-fields.js 1
 */
const fs   = require('fs');
const path = require('path');
const { sql, getPool } = require('./db');
require('dotenv').config();

const TENANT_ID   = parseInt(process.argv[2] || '0');
const PORTAL_ROOT = path.resolve(__dirname, '../../apps/portal/src/app/features');

if (!TENANT_ID) { console.error('Usage: node scan-fields.js <TenantID>'); process.exit(1); }

// מיפוי נתיב → קידומת קוד הרשאה
const SCREEN_MAP = [
  { match: 'organizations/org-dialog',              prefix: 'ORG_DLG',      name: 'דיאלוג ארגון'       },
  { match: 'organizations/organizations',           prefix: 'ORG_LIST',     name: 'רשימת ארגונים'      },
  { match: 'users/user-dialog',                     prefix: 'USER_DLG',     name: 'דיאלוג משתמש'       },
  { match: 'users/users',                           prefix: 'USER_LIST',    name: 'רשימת משתמשים'      },
  { match: 'catalog/products/product-dialog',       prefix: 'PROD_DLG',     name: 'דיאלוג מוצר'        },
  { match: 'catalog/packages/package-dialog',       prefix: 'PKG_DLG',      name: 'דיאלוג חבילה'       },
  { match: 'catalog/categories/category-dialog',    prefix: 'CAT_DLG',      name: 'דיאלוג קטגוריה'     },
  { match: 'projects/project-dialog',               prefix: 'PROJ_DLG',     name: 'דיאלוג פרויקט'      },
  { match: 'projects/workspace/cortex',             prefix: 'CORTEX',       name: 'CORTEX'              },
  { match: 'projects/workspace/nexus',              prefix: 'NEXUS',        name: 'NEXUS'               },
  { match: 'projects/workspace/ws-connectors',      prefix: 'WS_CONN',      name: 'חיבורים ב-Workspace' },
  { match: 'settings/org-settings',                 prefix: 'SETTINGS_ORG', name: 'הגדרות ארגון'        },
  { match: 'settings/connectors',                   prefix: 'CONNECTORS',   name: 'חיבורים'             },
  { match: 'settings/settings',                     prefix: 'SETTINGS',     name: 'הגדרות'              },
  { match: 'settings/permission-codes',             prefix: 'PERM_CODES',   name: 'הרשאות'              },
  { match: 'settings/perm-assignments',             prefix: 'PERM_ASSIGN',  name: 'שיוך הרשאות'        },
  { match: 'settings/profiles',                     prefix: 'PROFILES',     name: 'פרופילים'            },
  { match: 'settings/groups',                       prefix: 'GROUPS',       name: 'קבוצות'              },
  { match: 'settings/content-groups',               prefix: 'CONT_GROUPS',  name: 'קבוצות תוכן'        },
  { match: 'audit/action-types',                    prefix: 'AUDIT_ACTIONS',name: 'סוגי פעולה'          },
  { match: 'audit/entity-types',                    prefix: 'AUDIT_ENTITIES',name:'סוגי ישות'           },
  { match: 'login',                                 prefix: 'LOGIN',        name: 'מסך כניסה'           },
];

// תבניות חיפוש בHTML
const FIELD_PATTERNS = [
  /formControlName="([^"]+)"/g,
  /formControlName='([^']+)'/g,
  /\[formControlName\]="'([^']+)'"/g,
];

// שדות שלא נייצר עבורם הרשאה
const SKIP_FIELDS = new Set(['isActive', 'isLocked', 'password', 'confirmPassword', 'currentPassword']);

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fields  = new Set();
  for (const pattern of FIELD_PATTERNS) {
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(content)) !== null) {
      const field = m[1];
      if (!SKIP_FIELDS.has(field)) fields.add(field);
    }
  }
  return [...fields];
}

function camelToUpper(str) {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toUpperCase()
    .replace(/^_/, '');
}

function resolveScreen(filePath) {
  const rel = filePath.replace(/\\/g, '/');
  for (const entry of SCREEN_MAP) {
    if (rel.includes(entry.match)) return entry;
  }
  return null;
}

function walkDir(dir) {
  const results = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) results.push(...walkDir(full));
    else if (item.endsWith('.component.html')) results.push(full);
  }
  return results;
}

async function scan() {
  const pool    = await getPool();
  const files   = walkDir(PORTAL_ROOT);
  let created   = 0, skipped = 0;

  for (const file of files) {
    const screen = resolveScreen(file);
    if (!screen) continue;

    const fields = scanFile(file);
    if (!fields.length) continue;

    console.log(`\n  📄 ${screen.name} (${screen.prefix}) — ${fields.length} שדות`);

    for (const field of fields) {
      const fieldUpper = camelToUpper(field);
      const permCode   = `CTRL_${screen.prefix}_${fieldUpper}`;
      const permName   = `${screen.name} — שדה: ${field}`;

      try {
        await pool.request()
          .input('TenantID',    sql.Int,           TENANT_ID)
          .input('PermCode',    sql.VarChar(100),   permCode)
          .input('PermName',    sql.NVarChar(150),  permName)
          .input('Scope',       sql.VarChar(20),    'CONTROL')
          .input('ControlType', sql.VarChar(10),    'FIELD')
          .input('SourceType',  sql.VarChar(10),    'SCANNER')
          .query(`
            IF NOT EXISTS (SELECT 1 FROM dbo.tblPermissionCodes WHERE TenantID=@TenantID AND PermCode=@PermCode)
              INSERT INTO dbo.tblPermissionCodes
                (TenantID, PermCode, PermName, Scope, ControlType, SourceType, Tags, Notes, Description, ProductID, ProjectID)
              VALUES
                (@TenantID, @PermCode, @PermName, @Scope, @ControlType, @SourceType, '', '', '', 0, 0)
          `);
        console.log(`    ✓  ${permCode}`);
        created++;
      } catch (e) {
        if (e.message.includes('UQ_PermCode')) {
          console.log(`    –  ${permCode}  (קיים)`);
          skipped++;
        } else {
          console.error(`    ✗  ${permCode}: ${e.message}`);
        }
      }
    }
  }

  console.log(`\nסה"כ: ${created} נוצרו, ${skipped} דולגו`);
  process.exit(0);
}

scan().catch(e => { console.error(e); process.exit(1); });
