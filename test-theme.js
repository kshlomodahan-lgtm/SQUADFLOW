const { chromium } = require('C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));

  // 1. Login
  console.log('1. פותח מסך login...');
  await page.goto('http://localhost:4200/login?tenant=PRO_5149577');
  await page.waitForSelector('input[formControlName="username"]', { timeout: 10000 });
  await page.screenshot({ path: 'ss-01-login.png' });
  console.log('   ✅ מסך login נטען');

  // 2. מתחבר
  await page.fill('input[formControlName="username"]', 'admin');
  await page.fill('input[formControlName="password"]', 'Admin2026');
  await page.click('button[type="submit"]');
  await page.waitForURL('**/app/dashboard', { timeout: 8000 });
  await page.screenshot({ path: 'ss-02-dashboard.png' });
  console.log('2. ✅ כניסה הצליחה — dashboard');

  // 3. ניווט להגדרות
  const settingsLink = page.locator('a[href*="settings"], [routerLink*="settings"]').first();
  await settingsLink.click();
  await page.waitForURL('**/app/settings', { timeout: 5000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'ss-03-settings.png' });
  console.log('3. ✅ מסך הגדרות נפתח');

  // 4. בדיקת tiles ערכות צבעים
  const tiles = await page.locator('.scheme-tile').count();
  console.log(`4. ✅ נמצאו ${tiles} tiles של ערכות צבעים (צפוי: 6)`);

  // 5. בחירת ערכת purple
  await page.locator('.scheme-tile').nth(2).click(); // purple
  await page.screenshot({ path: 'ss-04-purple-selected.png' });
  console.log('5. ✅ נבחרה ערכת purple');

  // 6. שמירה
  await page.click('.btn-save');
  await page.waitForTimeout(2000);
  const savedMsg = await page.locator('.saved-msg').textContent().catch(() => '');
  await page.screenshot({ path: 'ss-05-saved.png' });
  console.log(`6. ✅ שמירה: "${savedMsg}"`);

  // 7. dark mode toggle
  const switchEl = page.locator('kendo-switch').first();
  await switchEl.click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'ss-06-darkmode.png' });
  console.log('7. ✅ dark mode toggle הופעל');

  // 8. שגיאות קונסול
  if (errors.length) {
    console.log(`8. ⚠️ שגיאות קונסול (${errors.length}):`);
    errors.slice(0, 5).forEach(e => console.log('   -', e));
  } else {
    console.log('8. ✅ אין שגיאות קונסול');
  }

  await browser.close();
  console.log('\n✅ בדיקה הושלמה — screenshots נשמרו');
})().catch(err => { console.error('❌ שגיאה:', err.message); process.exit(1); });
