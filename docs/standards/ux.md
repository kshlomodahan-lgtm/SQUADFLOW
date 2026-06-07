# סטנדרט UX — Design System
**SQUADFLOW Platform | עדכון אחרון: 2026-06-08**

---

## עיקרון עיצוב

**Light SaaS** — לבן, נקי, מינימליסטי (כמו Linear / Notion).
- אין dark-by-default
- RTL עברית ברירת מחדל, תמיכה ב-LTR אנגלית
- Font: `'Noto Sans Hebrew', 'Segoe UI', Arial, sans-serif`
- Code/Badges: `'Share Tech Mono', monospace`

---

## CSS Variables (Design Tokens)

```scss
// Primary (משתנה לפי color scheme)
--sf-primary          // צבע ראשי
--sf-primary-hover    // hover
--sf-primary-light    // רקע hover כפתור ראשי

// Backgrounds
--sf-bg          // #f8fafc  רקע עמוד
--sf-bg-card     // #ffffff  כרטיס / sidebar / topbar
--sf-bg-hover    // #f1f5f9  hover שורה

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

---

## Color Schemes (6 Palettes)

מנוהל ע"י `ThemeService` — מגדיר `data-scheme` על `<html>`:

| Scheme | Primary | שם |
|--------|---------|-----|
| `blue` (ברירת מחדל) | #0D47FF | כחול |
| `teal` | #0891b2 | תכלת |
| `purple` | #7c3aed | סגול |
| `green` | #059669 | ירוק |
| `rose` | #e11d48 | אדום |
| `amber` | #d97706 | כתום |

---

## כפתורים — חוק ברזל

| כפתור | צבע | שימוש |
|--------|------|-------|
| שמירה | כתום #f97316 + ✓ | `btn-save` — תמיד הכפתור הראשי |
| ביטול | לבן + גבול אפור | `btn-cancel` |
| מחיקה | אדום #ef4444 | `btn-danger` |

```scss
.btn-save   { background: #f97316; color: #fff; border: none; border-radius: 8px; padding: 8px 20px; font-weight: 600; }
.btn-cancel { background: transparent; color: var(--sf-text-secondary); border: 1px solid var(--sf-border); border-radius: 8px; padding: 8px 20px; }
```

---

## Dark Mode

- `ThemeService.toggleMode()` → מגדיר `data-theme="dark"` על `<html>`
- **אסור** hardcoded `#fff` או `#0f172a` — תמיד `var(--sf-bg-card)` / `var(--sf-text)`

---

## Layout סטנדרטי

### מסך רשימה

```
page-header (כותרת + כפתור "חדש")
toolbar (search-wrap + filters)
@if loading → spinner
@if error   → error-box
@if data    → kendo-grid
```

### Search Box

```html
<div class="search-wrap">
  <mat-icon class="search-icon">search</mat-icon>
  <input class="search-input" type="text" placeholder="חיפוש..."
         (input)="onSearch($any($event.target).value)" />
</div>
```

### מסך דשבורד

- Grid של KPI cards: `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- כל card: איקון + מספר גדול + כותרת + טרנד
- Charts: Kendo Chart (לא Chart.js)

---

## Dialog — כפתורי Footer

```html
<kendo-dialog-actions>
  <div class="dialog-footer">
    <button class="btn-save">✓ שמור</button>
    <button class="btn-cancel">ביטול</button>
  </div>
</kendo-dialog-actions>
```

```scss
// חובה — Kendo מגדיר LTR פנימית
::ng-deep .k-dialog-actions { direction: rtl !important; }
.dialog-footer { display: flex; gap: 8px; direction: rtl; }
```

---

## כותרת כרטיס (Card Title) — סטנדרט

```scss
.setting-card-title, .ef-card-title {
  font-size: .7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--sf-text-muted);
  border-bottom: 1px solid var(--sf-border);
  padding-bottom: 8px;
  margin-bottom: 12px;
}
```

---

## RTL — Checklist

- [ ] `direction: rtl` על `body`
- [ ] `direction: rtl !important` על `.k-dialog-actions`
- [ ] כפתור שמירה תמיד ימין, ביטול שמאל (ב-RTL)
- [ ] Paginator RTL
- [ ] שמות מותג (SQUADFLOW): `direction: ltr` inline
- [ ] `kendo-switch`: **אסור** ב-RTL — תחליף: seg-ctrl

---

## Badges — סטטוס בגרידים

```html
<!-- ✅ פעיל -->
<span class="badge badge-active">פעיל</span>
<!-- ⛔ מושהה -->
<span class="badge badge-inactive">מושהה</span>
<!-- 🔒 נעול -->
<span class="badge badge-locked">נעול</span>
```

```scss
.badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: .75rem; font-weight: 600; }
.badge-active   { background: #dcfce7; color: #16a34a; }
.badge-inactive { background: #fef9c3; color: #92400e; }
.badge-locked   { background: #fee2e2; color: #dc2626; }
```

---

## UX Checklist לפני Merge

- [ ] כל כפתור שמירה כתום (#f97316) עם ✓
- [ ] כל כפתור ביטול לבן/אפור
- [ ] RTL מלא — כפתורים, פאגינטור, טקסטים
- [ ] אין hardcoded colors (`#fff`, `#000`)
- [ ] Dark mode לא שבור
- [ ] Grid header בצבע `--sf-grid-hd-bg`
- [ ] אין `kendo-switch` ב-RTL context
- [ ] Dialog actions: כפתור שמירה בצד ימין
