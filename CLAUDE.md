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

### 🔧 Backend .NET Dev
**אחריות:** כל קוד בתיקיית `backend/`
- C# .NET 8 Web API
- שמות טבלאות: `tbl` + PascalCase (tblCustomers, tblLoginAudit)
- שמות עמודות: PascalCase (CompanyName, TenantCode, IsActive)
- Stored Procedures עבור לוגיקה עסקית מורכבת
- JWT Auth + Refresh Tokens
- Multi-tenant: כל query מסונן לפי TenantID

### 🗄️ DB Architect
**אחריות:** סכמת DB ב-SQL Server
- כל טבלה מתחילה ב-`tbl`
- PK תמיד `[EntityName]ID` (TenantID, UserID, ProductID)
- Created/Updated audit columns בכל טבלה ראשית
- אין hard deletes — תמיד `IsActive bit`

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
- כפתורי footer: `btn-save` (כתום) ימין, `btn-cancel` שמאל
- ולידציה: Angular ReactiveFormsModule + הצגת שגיאה בעברית

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

## מה לא לעשות — חוקים נוקשים

- ❌ אין `NgModule` — standalone בלבד
- ❌ אין `BehaviorSubject` — Signals בלבד
- ❌ אין colors hardcoded (`#fff`, `#000`) — רק `var(--sf-*)`
- ❌ אין `p-table` (PrimeNG) לטבלאות — Kendo Grid בלבד
- ❌ אין `alert()` / `confirm()` — Kendo Dialog / Material Snackbar
- ❌ אין `console.log` בקוד production
- ❌ `SortDescriptor` לא מ-`kendo-angular-grid` — מ-`kendo-data-query`
- ❌ `--ignore-scripts` נדרש בהתקנת kendo packages
- ❌ אין push ל-main ישירות — branch + PR

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
