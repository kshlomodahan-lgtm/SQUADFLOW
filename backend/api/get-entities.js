const { sql, getPool } = require('./db');
require('dotenv').config();

const TENANT_ID = parseInt(process.argv[2] || '1');

getPool().then(async pool => {
  const q = (query) => pool.request().input('TenantID', sql.Int, TENANT_ID).query(query);

  const [profiles, groups, contentGroups, users] = await Promise.all([
    q(`SELECT TOP 50 * FROM dbo.tblProfiles WHERE TenantID=@TenantID AND IsActive=1`),
    q(`SELECT TOP 50 * FROM dbo.tblGroups WHERE TenantID=@TenantID AND IsActive=1`),
    q(`SELECT TOP 50 * FROM dbo.tblContentGroups WHERE TenantID=@TenantID AND IsActive=1`),
    q(`SELECT TOP 50 UserID, Username, FullName, RoleID FROM dbo.tblUsers WHERE TenantID=@TenantID AND IsActive=1`),
  ]);

  console.log('\n📋 פרופילים:');
  if (profiles.recordset.length) {
    const cols = Object.keys(profiles.recordset[0]).join(' | ');
    console.log('  ' + cols);
    profiles.recordset.forEach(r => console.log('  ' + Object.values(r).join(' | ')));
  } else console.log('  (אין רשומות)');

  console.log('\n👥 קבוצות:');
  if (groups.recordset.length) {
    const cols = Object.keys(groups.recordset[0]).join(' | ');
    console.log('  ' + cols);
    groups.recordset.forEach(r => console.log('  ' + Object.values(r).join(' | ')));
  } else console.log('  (אין רשומות)');

  console.log('\n📂 קבוצות תוכן:');
  if (contentGroups.recordset.length) {
    const cols = Object.keys(contentGroups.recordset[0]).join(' | ');
    console.log('  ' + cols);
    contentGroups.recordset.forEach(r => console.log('  ' + Object.values(r).join(' | ')));
  } else console.log('  (אין רשומות)');

  console.log('\n👤 משתמשים:');
  if (users.recordset.length) {
    users.recordset.forEach(r => console.log(`  ID=${r.UserID} | ${r.Username} | ${r.FullName} | RoleID=${r.RoleID}`));
  } else console.log('  (אין רשומות)');

  process.exit(0);
}).catch(e => { console.error(e.message); process.exit(1); });
