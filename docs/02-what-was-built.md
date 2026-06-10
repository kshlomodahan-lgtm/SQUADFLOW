# SQUADFLOW — מה נבנה עד כה
**תאריך עדכון:** 2026-06-10

---

## סטטוס לפי מודולים

### ✅ Authentication & Shell
- **Login page** (`/login`) — JWT auth, RTL Hebrew
- **Shell layout** — Sidebar nav + Topbar + Dark/Light toggle
- **authInterceptor** — מוסיף Bearer token לכל בקשת HTTP
- **401 handler** — logout אוטומטי + redirect לlogin
- **ThemeService** — 6 color schemes + dark mode, persist ב-localStorage

---

### ✅ ארגונים (Organizations)
**מסך:** `/app/organizations`  
**קובץ:** `features/organizations/`

- רשימת ארגונים — Kendo Grid + Hebrew paginator + multi-sort
- חיפוש live filter
- עריכה/הוספה — Sidebar Nav Dialog (6 טאבים: פרטים, קשר, כתובת, מנוי, בנק, הערות)
- `navigateToFirstError()` — קפיצה אוטומטית לטאב עם שגיאה
- toggle active/inactive
- `*appHasPerm='ORGANIZATIONS:CREATE'` / `UPDATE` על כפתורים
- `permissionGuard('ORGANIZATIONS', 'READ')` על route

**Backend:** `GET /api/tenants`, `POST`, `PUT`, `DELETE`  
**DB SP:** `sp_TenantList`, `sp_TenantGet`, `sp_TenantSave`  
**Audit:** כל CREATE/UPDATE/TOGGLE נרשם ב-`tblAuditLog`

---

### ✅ משתמשים (Users)
**מסך:** `/app/users`  
**קובץ:** `features/users/`

- רשימת משתמשים — Kendo Grid, badge לפי RoleCode
- עריכה/הוספה — Sidebar Nav Dialog (3 טאבים: פרטים, תפקיד, הגדרות)
- Dropdown תפקידים מ-`tblRoles` (6 RBAC roles) — **תוקן מ-`tblUserRoles` הישן**
- COALESCE fallback: `COALESCE(r.RoleName, ur.RoleName)` בtransition
- seg-ctrl (ירוק/אדום) לסטטוס — **אסור kendo-switch ב-RTL**
- toggle active/inactive
- `*appHasPerm='USERS:CREATE'` / `UPDATE`
- `permissionGuard('USERS', 'READ')` על route

**Backend:** `GET /api/users`, `POST`, `PUT/:id`, `PUT/:id/toggle`  
**DB SP:** `sp_UserCreate`, `sp_UserUpdate`, `sp_UserGet`

---

### ✅ קטלוג — קטגוריות, מוצרים, חבילות
**מסכים:** `/app/catalog/categories|products|packages`

**קטגוריות:**
- עץ קטגוריות רקורסיבי (parent/child)
- Kendo Grid + dialogs

**מוצרים:**
- כרטיס מוצר מורחב: pricing model, trial days, max users, storage, API calls
- תמיכה ב-deployment type (CLOUD / ON_PREMISE / HYBRID)
- `*appHasPerm` + `checkPermission` middleware

**חבילות:**
- חבילת מנוי עם מוצרים מקושרים
- pricing monthly/annual, setup fee, trial
- `*appHasPerm` + `checkPermission` middleware

**Backend SP:** `sp_CategoryList/Save`, `sp_ProductList/Get/Save`, `sp_PackageList/Get/Save`

---

### ✅ RBAC — תפקידים והרשאות
**מסך:** הגדרות → תפקידים והרשאות  
**קובץ:** `features/settings/roles-manager/`

**תפקידים:**
- 6 תפקידים: SUPER_ADMIN, SYSTEM_ADMIN, MANAGER, DEVELOPER, VIEWER, GUEST
- clone תפקיד (sp_RoleClone)
- IsSystem=1 → לא ניתן למחיקה

**מטריצת הרשאות:**
- Grid לכל מסך × פעולה (READ/CREATE/UPDATE/DELETE/EXPORT)
- שמירת מטריצה מלאה (sp_RolePermissionMatrix_Save)
- `clearPermCache(roleId)` לאחר שמירה — מחיקת cache

**הרשאות שדה:**
- `tblScreenFieldConfig` — הגדרת שדות לפי מסך
- `tblRoleFieldPermissions` — הרשאה per-field per-role
- API: `GET/PUT /api/roles/:id/field-permissions/:menuItemCode`

**Backend SP:** `sp_RoleList`, `sp_RoleSave`, `sp_RoleClone`, `sp_RolePermissionMatrix_Get/Save`

---

### ✅ Permission Engine
**קבצים:** 
- `core/directives/has-perm.directive.ts`
- `core/guards/permission.guard.ts`
- `core/services/rbac.service.ts`
- `middleware/auth.js` — checkPermission + cache

**Frontend:**
- `HasPermDirective (*appHasPerm)` — Structural directive עם `effect()` → reacts לsignal
- `permissionGuard(screen, action)` — CanActivateFn factory
- `RbacService.resolvePermissions()` — קורא `/api/permissions/resolve`
- `optimistic allow` — מחזיר `true` עד שsignal נטען

**Backend:**
- `checkPermission(screenCode, actionCode)` — async middleware factory
- In-memory cache: `Map<roleId, Set<'SCREEN:ACTION'>>`
- `_cacheLoading` Map — מונע concurrent DB loads לאותו roleId
- Super Admin bypass: `roleId === 1 → next()`

---

### ✅ מבנה ארגוני (Org Chart)
**מסך:** הגדרות → מבנה ארגוני  
**קובץ:** `features/settings/org-chart/`

- עץ יחידות ארגוניות — cards view + tree view (toggle)
- 5 סוגי יחידות: COMPANY, DIVISION, DEPARTMENT, TEAM, UNIT
- CRUD יחידות (dialog)
- תארי תפקיד (Job Titles) — רשימה + CRUD
- משרות (Positions) per יחידה — headCount, reportsTo
- `RbacService.getOrgUnits/getJobTitles/getPositions/saveOrgUnit/saveJobTitle`

**Backend:** `GET/POST/PUT/DELETE /api/org/units|titles|positions`

---

### ✅ קבוצות משתמשים (Groups) — חדש!
**מסך:** הגדרות → קבוצות  
**קובץ:** `features/settings/groups/`

- ניהול קבוצות: שם, קוד, תיאור, צבע, סדר
- שיוך תפקידים RBAC לקבוצה (many-to-many)
- שיוך/הסרת משתמשים לקבוצה (many-to-many)
- `tblGroups`, `tblGroupRoles`, `tblUserGroups` — נוצרים auto ב-startup
- `*appHasPerm` + `checkPermission` middleware

**Backend:** `GET/POST/PUT/DELETE /api/groups`, `GET/POST/DELETE /api/groups/:id/users`

---

### ✅ יומן פעילות (Audit Log)
**מסך:** הגדרות → יומן פעילות  
**קובץ:** `features/audit/`

- `tblAuditLog` — כל create/update/delete מוקלט
- `logAction(req, {...})` helper — מוקרא מכל route
- Action Types + Entity Types management (tabs)
- Filter: entity type, date range, user

---

### ✅ מונים (Counters)
**מסך:** הגדרות → מונים  
**קובץ:** בתוך SettingsComponent

- מונים ברמת TENANT / CUSTOMER
- prefix + date format + step/start/max
- reset period: NEVER / ANNUAL / MONTHLY
- lock/unlock
- `tblCounters` + SPs

---

### ✅ עץ תפריטים (Menu Manager)
**מסך:** הגדרות → עץ תפריטים  
**קובץ:** `features/settings/menu-manager/`

- ניהול `tblMenuItems` — כל המסכים במערכת
- ScreenCode, MenuItemCode, ParentMenuItemID
- SortOrder, IsActive

---

### ✅ שערי מטבע (Exchange Rates)
- BOI API — שקל מול דולר/אירו/לירה שטרלינג/יין/פרנק
- CRON job ב-16:15 ימים א'-ה'
- Auto-fetch בhardware בסטארטאפ

---

## סיכום פיצ'רים

| פיצ'ר | Frontend | Backend | DB |
|--------|----------|---------|-----|
| Auth JWT | ✅ | ✅ | ✅ |
| Organizations | ✅ | ✅ | ✅ |
| Users | ✅ | ✅ | ✅ |
| Categories | ✅ | ✅ | ✅ |
| Products | ✅ | ✅ | ✅ |
| Packages | ✅ | ✅ | ✅ |
| RBAC Matrix | ✅ | ✅ | ✅ |
| Field Permissions | ✅ | ✅ | ✅ |
| Permission Engine | ✅ | ✅ | — |
| Groups | ✅ | ✅ | auto |
| Org Chart | ✅ | ✅ | ✅ |
| Audit Log | ✅ | ✅ | ✅ |
| Counters | ✅ | ✅ | ✅ |
| Menu Manager | ✅ | ✅ | ✅ |
| Exchange Rates | — | ✅ | ✅ |
| Dark Mode | ✅ | ✅ | ✅ |
| Color Schemes | ✅ | ✅ | ✅ |
