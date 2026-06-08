# SQUADFLOW — AI Development Platform
## הנחיות צוות הפיתוח

---

## הקשר הפרויקט

SQUADFLOW הוא פלטפורמת SaaS רב-שוכרית לניהול צוותי פיתוח AI.
בית תוכנה אחד (Super Admin) מנהל מספר לקוחות/ארגונים (Tenants), כל ארגון עם משתמשים, מוצרים, פרויקטים וחיוב עצמאי.

**עיקרון מפתח:** המוצר בנוי כך שבית התוכנה מתמקד בלקוח — הצוות (AI) מטפל בפיתוח.

---

## צוות הפיתוח — תפקידים

### 👨‍💻 Frontend Angular Dev
**אחריות:** כל קוד Angular בתיקיית `apps/portal/`
- כותב רק Angular 17+ Standalone components עם Signals
- משתמש ב-Kendo Angular DevCraft לגרידים וטבלאות
- משתמש ב-Angular Material לאיקונים, spinners, tooltips בלבד
- **לא** מוסיף libs חדשות בלי אישור
- מיישם design system (ראה פרק Design System)
- RTL עברית ברירת מחדל, תמיכה ב-LTR אנגלית
- אין NgModules — כל קובץ standalone: true

**לקחים מניסיון:**
- `import '@progress/kendo-angular-intl/locales/he/all'` — **שורה ראשונה ב-`src/main.ts`** תמיד. בלעדיו Kendo Charts/NumericTextBox/Paginator קורסים בשקט
- `themeColor` על `kendo-loader`: ערכים חוקיים — `"primary"`, `"secondary"`, `"tertiary"` בלבד. `"light"` גורם לשגיאת TypeScript
- `SortDescriptor` — תמיד מ-`@progress/kendo-data-query`, לא מ-`@progress/kendo-angular-grid`
- `kendo-switch` — **אסור לשימוש** ב-RTL context. ה-thumb מתנתק מה-track ולא ניתן לתיקון ב-CSS. תחליף: **seg-ctrl** (ראה פרק "פקד Seg-Ctrl" למטה)
- `kendo-dropdownlist` עם Reactive Forms + primitive values — חובה `[valuePrimitive]="true"` אחרת ה-dropdown מוצג ריק
- `kendo-dialog-actions` — Kendo מגדיר `direction: ltr` פנימית. חובה `direction: rtl !important` ב-`::ng-deep .k-dialog-actions` כדי שכפתורי ה-footer יסתדרו נכון ב-RTL
- Kendo Grid סטנדרט אחיד לכל מסך — ראה פרק "סטנדרט Kendo Grid" למטה

### 🔧 Backend Node.js Dev
**אחריות:** כל קוד בתיקיית `backend/`
- Node.js 24 + Express — REST API, CORS, Helmet
- mssql (node-mssql) — **חובה** `sql.connect(config)` ולא `new sql.ConnectionPool()` (גורם לבעיית NVarChar/עברית)
- JWT (jsonwebtoken) — Token מכיל: tenantId, roleId, userId, fullName
- Multer — העלאת קבצי לוגו → `frontend/assets/logos/`
- Stored Procedures עבור לוגיקה עסקית מורכבת
- Multi-tenant: כל query מסונן לפי TenantID

**לקחים מניסיון:**
- `JWT_SECRET` נוצר רנדומלי בכל הפעלת שרת — משתמשים מתנתקים אוטומטית. יש להגדיר סוד קבוע ב-`.env`
- auth interceptor ב-Angular חייב לתפוס 401 ולקרוא `auth.logout()` — אחרת הדף נתקע ריק ללא הסבר
- Response shape אחיד: `{ success: bool, data: T, message: string }` — כל route

### 🗄️ DB Architect
**אחריות:** סכמת DB ב-SQL Server
- כל טבלה מתחילה ב-`tbl`
- PK תמיד `[EntityName]ID` (TenantID, UserID, ProductID)
- Created/Updated audit columns בכל טבלה ראשית
- אין hard deletes — תמיד `IsActive bit`

**לקחים מניסיון:**
- **מילים שמורות כ-alias** — `plan`, `count`, `user`, `name` הן reserved words ב-SQL Server. תמיד השתמש ב-`planType`, `cnt`, `userName` וכד'
- `FORMAT(date, 'yyyy-MM')` — עלול להיכשל. השתמש ב-`CAST(YEAR(d) AS VARCHAR) + '-' + RIGHT('0'+CAST(MONTH(d) AS VARCHAR),2)`
- SP Output params תמיד: `@ResultCode INT OUTPUT`, `@ResultMessage NVARCHAR(200) OUTPUT`
- Password hashing: `crypto.createHash('sha256').update(password + salt, 'utf8').digest('base64')` — לא bcrypt (תאימות node-mssql)

### 🎨 UX Reviewer
**אחריות:** לבדוק שעיצוב עומד בסטנדרט Design System לפני merge
- לבן, נקי, Light SaaS (כמו Linear / Notion)
- אין dark-by-default
- RTL מלא — כפתורים, פאגינטור, טקסטים
- כפתור שמירה תמיד כתום Profits + סימן ✓
- כפתור ביטול תמיד לבן/אפור

---

## Design System

### CSS Variables (tokens)

```scss
// Primary (משתנה לפי scheme)
--sf-primary
--sf-primary-hover
--sf-primary-light
--sf-accent

// Backgrounds
--sf-bg          // #f8fafc  (רקע עמוד)
--sf-bg-card     // #ffffff  (רקע כרטיס/sidebar/topbar)
--sf-bg-hover    // #f1f5f9

// Borders
--sf-border        // #e2e8f0
--sf-border-focus  // = primary

// Typography
--sf-text           // #0f172a
--sf-text-secondary // #64748b
--sf-text-muted     // #94a3b8

// Semantic
--sf-success  // #10b981
--sf-warning  // #f59e0b
--sf-danger   // #ef4444

// Grid Header (משתנה לפי scheme)
--sf-grid-hd-bg
--sf-grid-hd-color
--sf-grid-hd-border
```

### Color Schemes (6 palettes)

מנוהל ע"י `ThemeService` — מגדיר `data-scheme` על `<html>`:

| Scheme | Primary | שם |
|--------|---------|-----|
| `blue`   | #0D47FF | כחול (ברירת מחדל) |
| `teal`   | #0891b2 | תכלת |
| `purple` | #7c3aed | סגול |
| `green`  | #059669 | ירוק |
| `rose`   | #e11d48 | אדום |
| `amber`  | #d97706 | כתום |

### Dark Mode

מנוהל ע"י `ThemeService` — מגדיר `data-theme="dark"` על `<html>`.
**אין** hardcoded `#fff` או `#0f172a` — תמיד `var(--sf-bg-card)` / `var(--sf-text)`.

### Typography

```scss
font-family: 'Noto Sans Hebrew', 'Segoe UI', Arial, sans-serif;
```
קוד/badges: `'Share Tech Mono', monospace`

### כפתורים — חוק ברזל

| כפתור | צבע | מחלקה |
|--------|------|--------|
| שמירה / פעולה ראשית | כתום Profits (#f97316) + ✓ | `btn-save` |
| ביטול / משני | לבן + גבול אפור | `btn-cancel` |
| מחיקה | אדום | `btn-danger` |
| Kendo primary | themeColor="primary" | — |

---

## Frontend Angular — מוסכמות קוד

### מבנה קובץ Component

```typescript
@Component({
  selector: 'app-xxx',
  standalone: true,
  imports: [...],
  templateUrl: './xxx.component.html',
  styleUrl:    './xxx.component.scss',
})
export class XxxComponent {
  // 1. Inputs / Outputs
  // 2. Signals (loading, error, data)
  // 3. Constructor + DI
  // 4. ngOnInit
  // 5. Public methods (event handlers)
  // 6. Private methods
}
```

### Signals — תמיד (לא BehaviorSubject)

```typescript
loading = signal(true);
error   = signal('');
items   = signal<Item[]>([]);
```

### HTTP / Services

```typescript
this.svc.getAll().subscribe({
  next: r  => { this.items.set(r.data); this.loading.set(false); },
  error: () => { this.error.set('שגיאה בטעינה'); this.loading.set(false); },
});
```

### RTL

- `direction: rtl` על `body` ב-styles.scss — כל העמוד RTL
- שמות מותג (SQUADFLOW) ו-LTR strings: עטוף ב-`direction: ltr` inline
- Kendo Grid: `direction: rtl` על ה-grid container

---

## תבניות מסכים — Screen Templates

### מסך רשימה (List Screen)

**מבנה HTML:**
```
page-header (כותרת + כפתור "חדש")
toolbar (search-wrap + filters)
@if loading → spinner
@if error   → error-box
@if data    → kendo-grid
dialog (לעריכה/הוספה)
```

**כללי Kendo Grid:**
- `scrollable="none"` — אין scroll פנימי, הדף גולל
- `[sortable]="{ mode: 'single', allowUnsort: false }"`
- מיון עם `orderBy` מ-`@progress/kendo-data-query`
- `SortDescriptor` מיובא מ-`@progress/kendo-data-query` (לא מ-kendo-angular-grid)
- Paginator: `pageSizes: [10, 25, 50]`
- לוקליזציה: `<kendo-grid-messages>` עם עברית מלאה
- עמודת ארגון/שם: ללא `[width]` — גמישה (מלאה)
- עמודות קבועות: `[width]="px"`
- עמודת checkbox: `[width]="44"`
- עמודת פעולות: `[width]="80"` + `[sortable]="false"` + `[resizable]="false"`

**Header צבע:** `var(--sf-grid-hd-bg)` / `var(--sf-grid-hd-color)` / `var(--sf-grid-hd-border)`

**Search Box:**
```html
<div class="search-wrap">
  <mat-icon class="search-icon">search</mat-icon>
  <input class="search-input" type="text" placeholder="חיפוש..." (input)="onSearch($any($event.target).value)" />
</div>
```

### מסך טופס / דיאלוג (Form / Dialog)

- Dialog = component נפרד עם `@Input() org` + `@Output() closed` + `@Output() saved`
- כל שדה: label עברי + input/kendo-textbox
- כפתורי footer: `btn-save` (כתום) **ימין**, `btn-cancel` שמאל — ב-RTL `direction: rtl !important` על `.k-dialog-actions`
- ולידציה: Angular ReactiveFormsModule + הצגת שגיאה בעברית
- דיאלוג מורכב (5+ שדות מקובצים): **sidebar nav** כמו org-dialog — ראה פרק "Sidebar Nav Dialog" למטה
- שדה boolean (סטטוס פעיל/מושהה): **seg-ctrl** — ראה פרק "פקד Seg-Ctrl" למטה. **אסור** `kendo-switch`

### מסך דשבורד

- Grid של KPI cards (3-4 בשורה)
- כל card: איקון + מספר גדול + כותרת + טרנד
- Chart: Kendo Chart (לא Chart.js)
- רוחב cards: `minmax(200px, 1fr)`

### מסך הגדרות (Settings)

- Tab navigation (Kendo TabStrip)
- כל tab = section הגדרות נפרד
- שמירה per-section (לא global save)

---

## שמות קבצים ומבנה תיקיות

```
apps/portal/src/app/
├── core/
│   ├── models/          # interfaces (PascalCase fields)
│   ├── services/        # *service.ts (providedIn: 'root')
│   └── interceptors/
├── features/
│   ├── organizations/   # list + dialog
│   ├── users/
│   ├── dashboard/
│   └── settings/
├── shared/
│   └── components/      # רכיבים משותפים
└── shell/               # layout (sidebar + topbar)
```

---

## APIs ו-Naming

- Base URL: מוגדר ב-`proxy.conf.json` + `environment.ts`
- HTTP: `this.http.get<ResponseType>('/api/...')`
- Response shape: `{ success: bool, data: T, message: string }`
- שמות endpoints: camelCase (`/api/tenants`, `/api/users`)
- JWT: נשלח אוטומטית ע"י `authInterceptor`

---

## ThemeService API

```typescript
import { ThemeService, COLOR_SCHEMES } from '../core/services/theme.service';

// inject
constructor(public theme: ThemeService) {}

// שימוש בתבנית
theme.toggleMode()          // light ⇆ dark
theme.setScheme('purple')   // החלפת palette
theme.isDark()              // boolean signal
theme.scheme()              // 'blue' | 'teal' | ...
theme.schemes               // COLOR_SCHEMES[]
```

---

## סטנדרט Kendo Grid — חובה בכל מסך רשימה

כל גריד במערכת חייב להיות **זהה** — אותם features, אותו עיצוב:

```html
<kendo-grid
  [data]="{ data: pagedData, total: gridData.length }"
  [skip]="skip" [pageSize]="pageSize"
  [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10, 25, 50] }"
  [sortable]="{ mode: 'single', allowUnsort: false }"
  [sort]="sort"
  [reorderable]="true" [resizable]="true"
  [selectable]="{ mode: 'multiple', checkboxOnly: true }"
  [columnMenu]="true"
  scrollable="none"
  (pageChange)="onPageChange($event)"
  (sortChange)="onSortChange($event)">

  <!-- Checkbox מולטי-סלקט -->
  <kendo-grid-checkbox-column [width]="44" [showSelectAll]="true" />

  <!-- עמודת פעולות — ללא columnMenu -->
  <kendo-grid-column title="" [width]="80" [sortable]="false"
    [resizable]="false" [columnMenu]="false">
  </kendo-grid-column>

  <kendo-grid-messages
    pagerItemsPerPage="שורות בעמוד" pagerOf="מתוך" pagerItems="רשומות"
    columnMenuFilter="סנן" columnMenuSort="מיון" columnMenuColumns="עמודות"
    columnMenuSortAscending="עולה" columnMenuSortDescending="יורד"
    selectionCheckboxLabel="בחר שורה" selectAllCheckboxLabel="בחר הכל"
    noRecords="לא נמצאו רשומות" loading="טוען..." />
</kendo-grid>
```

**SCSS חובה לכל גריד (החלף `.xxx-grid` בשם הגריד):**
```scss
.xxx-grid .k-grid-header th.k-header {
  background: var(--sf-grid-hd-bg) !important;
  color: var(--sf-grid-hd-color) !important;
  font-weight: 700 !important; font-size: .78rem !important;
  border-bottom: 2px solid var(--sf-grid-hd-border) !important;
  border-color: var(--sf-grid-hd-border) !important;
}
.xxx-grid .k-grid-header { background: var(--sf-grid-hd-bg) !important; }
.xxx-grid .k-column-menu-button { color: var(--sf-grid-hd-color); opacity: .7; }
```

---

## מה לא לעשות — חוקים נוקשים

- ❌ אין `NgModule` — standalone בלבד
- ❌ אין `BehaviorSubject` — Signals בלבד
- ❌ אין colors hardcoded (`#fff`, `#000`) — רק `var(--sf-*)`
- ❌ אין `p-table` (PrimeNG) לטבלאות — Kendo Grid בלבד
- ❌ אין `alert()` / `confirm()` — Kendo Dialog / Material Snackbar
- ❌ אין `console.log` בקוד production
- ❌ `SortDescriptor` לא מ-`kendo-angular-grid` — מ-`kendo-data-query`
- ❌ `--ignore-scripts` נדרש בהתקנת kendo packages
- ✅ מותר push ל-main ישירות לנוהל גיבוי לילי (nightly backup) — commit + push בלבד, ללא force push
- ❌ **אסור `kendo-switch`** — ב-RTL context ה-thumb מתנתק. תחליף: seg-ctrl
- ❌ `seg-ctrl` שייך לדיאלוגי עריכה/הוספה בלבד — במסכי רשימה (גריד) משתמשים ב-badge בלבד
- ✅ **חובה** `import '@progress/kendo-angular-intl/locales/he/all'` כ-**שורה ראשונה** ב-`src/main.ts` — בלעדיו Kendo Charts / NumericTextBox / Paginator קורסים בשקט עם "Missing locale info for 'he'"
- ✅ **חובה** `direction: rtl !important` (עם !important) על `.k-dialog-actions` — Kendo מגדיר LTR פנימית ומבטל RTL ללא !important

---

## פקד Seg-Ctrl — סטנדרט לשדות boolean בדיאלוגים

**שימוש:** שדה סטטוס (פעיל / מושהה) בדיאלוגי עריכה/הוספה בלבד. **לא** בגריד/רשימה — שם badge בלבד.

**HTML:**
```html
<div class="seg-ctrl">
  <button type="button" class="seg-btn"
          [class.seg-on]="!!form.get('isActive')?.value"
          (click)="form.get('isActive')?.setValue(true)">
    ✓ פעיל
  </button>
  <button type="button" class="seg-btn"
          [class.seg-off]="!form.get('isActive')?.value"
          (click)="form.get('isActive')?.setValue(false)">
    ✗ מושהה
  </button>
</div>
```

**SCSS (להכניס לכל dialog component):**
```scss
.seg-ctrl {
  display: inline-flex;
  direction: rtl;
  align-self: flex-start;
  border: 1px solid var(--sf-border);
  border-radius: 8px;
  overflow: hidden;
}

.seg-btn {
  padding: 7px 20px;
  font-size: .82rem;
  font-weight: 500;
  font-family: 'Noto Sans Hebrew', sans-serif;
  border: none;
  background: var(--sf-bg);
  color: var(--sf-text-secondary);
  cursor: pointer;
  transition: background .15s, color .15s;

  & + & { border-inline-start: 1px solid var(--sf-border); }

  &:hover:not(.seg-on):not(.seg-off) { background: var(--sf-bg-hover); color: var(--sf-text); }
  &.seg-on  { background: #10b981; color: #fff; font-weight: 600; }
  &.seg-off { background: #ef4444; color: #fff; font-weight: 600; }
}
```

**כיצד עובד:** כל לחיצה מגדירה ערך ספציפי (לא toggle). `direction: rtl` + `align-self: flex-start` — כפתור "פעיל" תמיד ימין, "מושהה" תמיד שמאל, המסגרת צמודה לתוכן.

---

## Sidebar Nav Dialog — סטנדרט לדיאלוגים מורכבים

**מתי:** דיאלוג עם 5+ שדות מקובצים לנושאים שונים (כמו org-dialog: פרטי ארגון, קשר, כתובת, מנוי, בנק, הערות).

**מבנה TS:**
```typescript
interface NavGroup { id: string; text: string; icon: SVGIcon; }

activeGroup = signal('general');

readonly groups: NavGroup[] = [
  { id: 'general', text: 'פרטי ארגון', icon: buildingsIcon },
  // ...
];

private readonly groupFields: Record<string, string[]> = {
  general: ['tenantCode', 'companyName'],
  // ...
};

private navigateToFirstError() {
  for (const [group, fields] of Object.entries(this.groupFields)) {
    if (fields.some(f => this.form.get(f)?.invalid)) {
      this.activeGroup.set(group); return;
    }
  }
}

save() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    this.navigateToFirstError();  // קריטי: ניווט אוטומטי לטאב עם שגיאה
    this.errorMsg = 'יש שדות חובה שלא מולאו';
    return;
  }
}
```

**מבנה HTML:**
```html
<kendo-dialog [width]="860" [minWidth]="600">
  <div class="org-dialog-body"> <!-- flex: nav | content -->
    <nav class="org-nav">
      @for (g of groups; track g.id) {
        <button class="nav-item" [class.active]="activeGroup() === g.id" (click)="activeGroup.set(g.id)">
          <kendo-svg-icon [icon]="g.icon" />
          {{ g.text }}
        </button>
      }
    </nav>
    <div class="org-content">
      @if (activeGroup() === 'general') { ... }
      @if (activeGroup() === 'contact') { ... }
    </div>
  </div>
  <kendo-dialog-actions>
    <div class="dialog-footer"> <!-- direction: rtl !important בלווי SCSS -->
      <button class="btn-save">✓ שמור</button>
      <button class="btn-cancel">ביטול</button>
    </div>
  </kendo-dialog-actions>
</kendo-dialog>
```

**דוגמה מיושמת:** `apps/portal/src/app/features/organizations/org-dialog/`

---

## סטטוס הפרויקט (2026)

| מודול | סטטוס |
|-------|--------|
| Login + Auth (JWT) | ✅ מוכן |
| Shell (sidebar + topbar) | ✅ מוכן |
| ארגונים — רשימה | ✅ Kendo Grid + Hebrew + Multi-theme |
| ארגונים — עריכה/הוספה | ✅ Dialog |
| משתמשים | 🔧 בפיתוח |
| דשבורד | 🔧 skeleton |
| הגדרות | 🔧 skeleton |
| Billing System | 📋 roadmap |
| מנויים + מוצרים per-org | 📋 roadmap |

---

## Kendo Angular — ידע חיוני

- License: `apps/portal/kendo-ui-license.txt` (בתוקף עד 06/06/2027) — **לא מועלה ל-Git**
- הפעלה: `npx kendo-ui-license activate`
- התקנה: `npm install @progress/kendo-angular-xxx --ignore-scripts --legacy-peer-deps`
- Polyfill נדרש: `"polyfills": ["@angular/localize/init"]` ב-`angular.json`
- Theme CSS: `node_modules/@progress/kendo-theme-default/dist/all.css` ב-`angular.json` styles
