# סטנדרט Frontend — Angular Dev
**SQUADFLOW Platform | עדכון אחרון: 2026-06-08**

---

## סביבת עבודה

- **Framework:** Angular 17+ Standalone Components עם Signals
- **UI Library:** Kendo Angular DevCraft (גרידים, dialogs, inputs, charts)
- **Icons:** Angular Material (mat-icon) — אייקונים ספינרים טולטיפים בלבד + PrimeIcons (כפתורי פעולות בגרידים)
- **Forms:** ReactiveFormsModule בלבד
- **תיקיית עבודה:** `apps/portal/`

---

## חוקים מוחלטים

| חוק | פירוט |
|-----|-------|
| ❌ אין NgModule | Standalone: true בכל component |
| ❌ אין BehaviorSubject | Signals בלבד |
| ❌ אין colors hardcoded | רק `var(--sf-*)` |
| ❌ אין p-table / PrimeNG | Kendo Grid בלבד |
| ❌ אין alert() / confirm() | Kendo Dialog / Material Snackbar |
| ❌ אין console.log | בקוד production |
| ❌ אין kendo-switch ב-RTL | תחליף: seg-ctrl |
| ❌ SortDescriptor לא מ-kendo-angular-grid | מ-`@progress/kendo-data-query` |

---

## שורה ראשונה חובה ב-main.ts

```typescript
import '@progress/kendo-angular-intl/locales/he/all';
```
בלעדיה — Kendo Charts / NumericTextBox / Paginator קורסים בשקט.

---

## מבנה Component

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

---

## Signals — תמיד

```typescript
loading = signal(true);
error   = signal('');
items   = signal<Item[]>([]);
```

---

## HTTP Pattern

```typescript
this.svc.getAll().subscribe({
  next:  r  => { this.items.set(r.data); this.loading.set(false); },
  error: () => { this.error.set('שגיאה בטעינה'); this.loading.set(false); },
});
```

---

## Kendo Grid — סטנדרט אחיד

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

  <kendo-grid-checkbox-column [width]="44" [showSelectAll]="true" />

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

### SCSS Grid Header — חובה

```scss
.xxx-grid .k-grid-header th.k-header {
  background: var(--sf-grid-hd-bg) !important;
  color: var(--sf-grid-hd-color) !important;
  font-weight: 700 !important; font-size: .78rem !important;
  border-bottom: 2px solid var(--sf-grid-hd-border) !important;
}
.xxx-grid .k-grid-header { background: var(--sf-grid-hd-bg) !important; }
.xxx-grid .k-column-menu-button { color: var(--sf-grid-hd-color); opacity: .7; }
```

---

## כפתורי פעולות בגרידים — סטנדרט PrimeIcons

```html
<div class="row-actions">
  <button class="act-btn act-expand" [class.expanded]="isExpanded(item)"
          [title]="isExpanded(item) ? 'כווץ' : 'פרטים'" (click)="toggleExpand(item)">
    <i class="pi" [class.pi-chevron-down]="!isExpanded(item)" [class.pi-chevron-up]="isExpanded(item)"></i>
  </button>
  <button class="act-btn" [class.act-lock]="item.IsActive" [class.act-unlock]="!item.IsActive"
          [title]="item.IsActive ? 'השבת' : 'הפעל'" (click)="toggleActive(item)">
    <i class="pi" [class.pi-lock]="item.IsActive" [class.pi-lock-open]="!item.IsActive"></i>
  </button>
  <button class="act-btn act-edit" title="ערוך" (click)="openEdit(item)">
    <i class="pi pi-pencil"></i>
  </button>
</div>
```

### SCSS כפתורי פעולות

```scss
.row-actions { display: flex; align-items: center; gap: 4px; }
.act-btn {
  background: none; border: none; cursor: pointer;
  width: 30px; height: 30px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  transition: background .15s;
  i { font-size: .9rem; }
  &:disabled { opacity: .35; cursor: not-allowed; }
}
.act-expand { color: var(--sf-text-secondary); &:hover { background: var(--sf-bg-hover); color: var(--sf-primary); } }
.act-lock   { color: #ef4444; &:hover { background: #fef2f2; } }
.act-unlock { color: #16a34a; &:hover { background: #f0fdf4; } }
.act-edit   { color: #3b82f6; &:hover { background: #eff6ff; } }
```

---

## פקד Seg-Ctrl — לשדות boolean בדיאלוגים

**שימוש:** שדה סטטוס (פעיל/מושהה) בדיאלוגים בלבד. בגרידים — badge.

```html
<div class="seg-ctrl">
  <button type="button" class="seg-btn"
          [class.seg-on]="!!form.get('isActive')?.value"
          (click)="form.get('isActive')?.setValue(true)">✓ פעיל</button>
  <button type="button" class="seg-btn"
          [class.seg-off]="!form.get('isActive')?.value"
          (click)="form.get('isActive')?.setValue(false)">✗ מושהה</button>
</div>
```

---

## Sidebar Nav Dialog — לדיאלוגים מורכבים (5+ שדות)

```typescript
interface NavGroup { id: string; text: string; icon: SVGIcon; }
activeGroup = signal('general');
readonly groups: NavGroup[] = [ ... ];

private navigateToFirstError() {
  for (const [group, fields] of Object.entries(this.groupFields)) {
    if (fields.some(f => this.form.get(f)?.invalid)) {
      this.activeGroup.set(group); return;
    }
  }
}
```

---

## RTL

- `direction: rtl` על `body` ב-styles.scss
- `direction: rtl !important` על `.k-dialog-actions` (Kendo מגדיר LTR פנימית)
- Kendo Grid: `direction: rtl` על ה-grid container
- `kendo-dialog-actions`: כפתור שמירה ימין, ביטול שמאל

---

## ידע Kendo חיוני

- `[valuePrimitive]="true"` על `kendo-dropdownlist` עם primitive values
- `themeColor` על `kendo-loader`: `"primary"` / `"secondary"` / `"tertiary"` בלבד (לא `"light"`)
- Detail template expand: `[isDetailExpanded]="isDetailExpandedFn"` עם arrow function הקוראת מ-signal
- `--ignore-scripts --legacy-peer-deps` בהתקנת kendo packages
