# SQUADFLOW — מסמך טכני של הפלטפורמה
**גרסה:** 1.0 | **תאריך:** 2026-06-10

---

## 1. ארכיטקטורה כללית

```
┌─────────────────────────────────────────────────┐
│  Angular 17+ SPA (apps/portal)                  │
│  Kendo DevCraft · Angular Material · RTL Hebrew │
└──────────────┬──────────────────────────────────┘
               │ HTTP/JSON via proxy (:4200→:3000)
┌──────────────▼──────────────────────────────────┐
│  Node.js 24 + Express REST API (backend/api)     │
│  JWT · Helmet · CORS · Multer                   │
└──────────────┬──────────────────────────────────┘
               │ node-mssql (sql.connect)
┌──────────────▼──────────────────────────────────┐
│  SQL Server 2019 — ProfitsCRM DB                │
│  Stored Procedures · Multi-tenant isolation     │
└─────────────────────────────────────────────────┘
```

**Static serving:** Angular build → `backend/frontend/` → served by Express  
**Production:** Node serves Angular + API on port 3000

---

## 2. מודל Multi-Tenant

כל ישות בDB מסוננת לפי `TenantID`.  
Super Admin (TenantID=1, RoleID=1) רואה את כל הדאטה.  
כל tenant מנוהל עצמאית: משתמשים, מוצרים, הגדרות, חיוב.

```
tblTenants ──< tblUsers
           ──< tblOrders
           ──< tblSubscriptions
           ──< tblGroups
           ──< tblOrgUnits
```

---

## 3. Authentication & Authorization

### JWT Token
```json
{ "tenantId": 1, "roleId": 1, "userId": 1,
  "fullName": "Administrator", "iat": ..., "exp": ... }
```
- `JWT_SECRET` קבוע ב-`.env` (`ProfitsCRM_JWT_Secret_2026!`)
- Expiry: 8h  
- Middleware: `verifyToken` (backend/api/middleware/auth.js)

### RBAC — 4 שכבות הרשאה

```
┌─────────────────────────────────────────────────┐
│ 1. Route Guard (Angular) — permissionGuard()   │
│    blocks navigation if no READ permission      │
├─────────────────────────────────────────────────┤
│ 2. *appHasPerm directive — hides/shows elements │
│    reacts to resolvedPermissions() signal       │
├─────────────────────────────────────────────────┤
│ 3. RbacService.can(screen,action) — frontend   │
│    reads resolvedPermissions signal             │
├─────────────────────────────────────────────────┤
│ 4. checkPermission() middleware — backend       │
│    in-memory cache Map<roleId, Set<SCREEN:ACT>> │
└─────────────────────────────────────────────────┘
```

**Permission cache:** loaded from DB on first request per role, invalidated by `clearPermCache(roleId)` after matrix save.  
**Super Admin bypass:** `roleId === 1` → always passes all checks.  
**Optimistic allow:** `_permissionsLoaded = false` → `can()` returns true (prevents UI flash on load).

### Permission Tables

| טבלה | תפקיד |
|-------|-------|
| `tblMenuItems` | כל המסכים/פעולות במערכת |
| `tblActionTypes` | READ / CREATE / UPDATE / DELETE / EXPORT |
| `tblRolePermissions` | מטריצת הרשאות לפי RoleID × MenuItemID × ActionCode |
| `tblRoles` | 6 תפקידים RBAC (SUPER_ADMIN, SYSTEM_ADMIN, MANAGER, DEVELOPER, VIEWER, GUEST) |

---

## 4. Frontend — Angular 17+

### מוסכמות
- **Standalone only** — אין NgModules
- **Signals only** — אין BehaviorSubject
- `@if` / `@for` control flow syntax
- RTL (`direction: rtl`) על body, עברית

### Services עיקריים

| Service | אחריות |
|---------|--------|
| `AuthService` | login, logout, user signal |
| `RbacService` | resolvedPermissions, orgUnits, orgPositions, jobTitles |
| `ThemeService` | light/dark, 6 color schemes, localStorage persist |
| `CounterService` | מונים טנאנט / לקוח |

### HTTP
- Proxy: `/api/*` → `http://localhost:3000`
- `authInterceptor` — מוסיף `Authorization: Bearer <token>` אוטומטית
- 401 → `auth.logout()` + redirect to login

### Design System
- Font: `Noto Sans Hebrew` + `Segoe UI`
- CSS Variables: `--sf-primary`, `--sf-bg`, `--sf-text`, `--sf-border`, ...
- Dark mode: `data-theme="dark"` על `<html>`
- Color schemes: `data-scheme="blue|teal|purple|green|rose|amber"` על `<html>`

---

## 5. Backend — Node.js Routes

| Route | קובץ | הערות |
|-------|------|-------|
| `/api/auth` | auth.js | login, me |
| `/api/users` | users.js | CRUD + toggle + RBAC roles |
| `/api/tenants` | tenants.js | ניהול ארגונים |
| `/api/roles` | roles.js | RBAC roles + permission matrix + field permissions |
| `/api/permissions` | permissions.js | resolve user permissions |
| `/api/groups` | groups.js | קבוצות משתמשים + שיוך |
| `/api/org` | org.js | org units, job titles, positions |
| `/api/categories` | categories.js | קטגוריות מוצרים |
| `/api/products` | products.js | קטלוג מוצרים |
| `/api/packages` | packages.js | חבילות מנוי |
| `/api/audit` | audit.js | יומן פעילות |
| `/api/menu-items` | menu-items.js | עץ תפריטים |
| `/api/screen-fields` | screen-fields.js | הגדרות שדות לפי מסך |
| `/api/counters` | counters.js | מונים |
| `/api/exchange-rates` | exchange-rates.js | שערי מטבע BOI |
| `/api/upload` | upload.js | לוגו (Multer) |

### Response shape (חובה בכל route)
```json
{ "success": true, "data": [...], "message": "..." }
```

### Audit Logging
`logAction(req, { actionType, entityType, entityId, entityName, oldValue, newValue })`  
— מוקרא מ-`backend/api/helpers/auditLogger.js`  
— מוסיף לגריד `tblAuditLog` עם IP, UserID, TenantID

---

## 6. DB Schema — טבלאות מרכזיות

```sql
-- משתמשים ותפקידים
tblUsers         (UserID PK, TenantID FK, RoleID FK, Username, PasswordHash, PasswordSalt)
tblRoles         (RoleID PK, TenantID, RoleName, RoleCode, RoleType, IsSystem)
tblUserRoles     (legacy — 3 תפקידים עבריים, לא בשימוש)

-- RBAC
tblMenuItems         (MenuItemID, ScreenCode, MenuItemCode, ParentMenuItemID)
tblActionTypes       (ActionCode PK, ActionName)
tblRolePermissions   (RoleID, MenuItemID, ActionCode, IsAllowed)
tblScreenFieldConfig (FieldCode, MenuItemCode, FieldLabel, RequiredAction, IsAudited)
tblRoleFieldPermissions (RoleID, MenuItemCode, FieldCode, IsAllowed)

-- ארגון
tblTenants        (TenantID PK, TenantCode UK, CompanyName, IsActive)
tblOrgUnits       (OrgUnitID PK, TenantID, ParentOrgUnitID, UnitName, UnitCode, UnitType)
tblJobTitles      (JobTitleID PK, TenantID, JobTitleName, JobTitleCode, TitleLevel)
tblOrgPositions   (PositionID PK, OrgUnitID FK, JobTitleID FK)

-- קבוצות (חדש)
tblGroups         (GroupID PK, TenantID, GroupName, GroupCode UK, ColorHex, IsActive)
tblGroupRoles     (GroupID, RoleID) — many-to-many
tblUserGroups     (UserID, GroupID) — many-to-many

-- קטלוג
tblCategories     (CategoryID PK, TenantID, CategoryName, ParentCategoryID)
tblProducts       (ProductID PK, TenantID, CategoryID, ProductCode, ProductName, PriceMonthly)
tblPackages       (PackageID PK, TenantID, PackageName, PriceMonthly, PriceAnnual)
tblPackageProducts (PackageID, ProductID)

-- חיוב
tblSubscriptions  (SubscriptionID PK, TenantID, PackageID, StartDate, EndDate, Status)
tblOrders         (OrderID PK, TenantID, OrderDate, TotalAmount, Status)

-- מונים
tblCounters       (CounterID PK, TenantID, CounterKey, CounterName, CurrentValue, IsLocked)

-- יומן
tblAuditLog       (LogID PK, TenantID, UserID, ActionType, EntityType, EntityID, CreatedAt)
```

### חוקי DB
- כל טבלה: prefix `tbl`
- PK: `[Entity]ID`
- Soft delete: `IsActive BIT` — אין `DELETE` פיזי
- Audit: `CreatedAt`, `UpdatedAt` בכל טבלה ראשית
- SP Output: `@ResultCode INT OUTPUT`, `@ResultMessage NVARCHAR(200) OUTPUT`
- Reserved words: לא להשתמש ב-`plan`, `count`, `user`, `name` כ-alias

---

## 7. Exchange Rates Service

- מקור: בנק ישראל (BOI) API
- מרענן יום יום ב-16:15 (CRON, ימים א'-ה')
- גיבוי: auto-fetch בהפעלת שרת אם לא עודכן היום
- טבלה: `tblExchangeRates`

---

## 8. Kendo Angular — רישיון ושימוש

- License: `apps/portal/kendo-ui-license.txt` (תוקף עד 06/06/2027)
- Theme: `@progress/kendo-theme-default/dist/all.css`
- Locale: `import '@progress/kendo-angular-intl/locales/he/all'` — שורה ראשונה ב-main.ts
- התקנה: `npm install @progress/kendo-angular-xxx --ignore-scripts --legacy-peer-deps`

---

## 9. Dev & Deploy

```bash
# Backend
cd backend/api && node server.js       # port 3000

# Frontend dev (proxy → 3000)
cd apps/portal && ng serve             # port 4200

# Build + deploy
cd apps/portal && ng build --configuration production
xcopy dist\portal\browser\* ..\backend\frontend\ /E /Y
```

**Login URL:** http://localhost:3000  
**Super Admin:** username = `sa`, tenant = `PRO_5149577`
