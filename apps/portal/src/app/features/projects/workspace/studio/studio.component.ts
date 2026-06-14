import { Component, OnInit, signal, computed, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NeuralNetComponent } from '../../../../shared/components/neural-net/neural-net.component';

// ── Control palette definitions ──────────────────────────────────

export interface ControlDef {
  type:        string;
  label:       string;
  icon:        string;
  category:    'layout' | 'form' | 'data' | 'action' | 'display';
  isContainer: boolean;
  color:       string;
  desc?:       string;
}

export const CONTROL_PALETTE: ControlDef[] = [
  // Layout
  { type: 'sf-card',      label: 'כרטיס',       icon: '▭',  category: 'layout',  isContainer: true,  color: '#8b5cf6', desc: 'קופסת תוכן עם כותרת' },
  { type: 'sf-tabs',      label: 'לשוניות',     icon: '⊞',  category: 'layout',  isContainer: true,  color: '#8b5cf6', desc: 'TabStrip עם תתי-מסכים' },
  { type: 'sf-section',   label: 'מקטע',        icon: '≡',  category: 'layout',  isContainer: true,  color: '#8b5cf6', desc: 'אזור מקובץ עם כותרת' },
  { type: 'sf-grid-row',  label: 'שורת עמודות', icon: '⁝⁝', category: 'layout',  isContainer: true,  color: '#8b5cf6', desc: 'פריסת CSS Grid' },
  { type: 'sf-modal',     label: 'דיאלוג',      icon: '⧠',  category: 'layout',  isContainer: true,  color: '#8b5cf6', desc: 'Kendo Dialog' },

  // Form controls
  { type: 'sf-input',     label: 'שדה טקסט',   icon: '☐',  category: 'form',    isContainer: false, color: '#0891b2', desc: 'Kendo TextBox' },
  { type: 'sf-select',    label: 'רשימה נגללת', icon: '▾',  category: 'form',    isContainer: false, color: '#0891b2', desc: 'Kendo DropDownList' },
  { type: 'sf-date',      label: 'תאריך',       icon: '📅', category: 'form',    isContainer: false, color: '#0891b2', desc: 'Kendo DatePicker' },
  { type: 'sf-number',    label: 'מספר',        icon: '#',   category: 'form',    isContainer: false, color: '#0891b2', desc: 'Kendo NumericTextBox' },
  { type: 'sf-textarea',  label: 'טקסט חופשי',  icon: '⁌',  category: 'form',    isContainer: false, color: '#0891b2', desc: 'Textarea' },
  { type: 'sf-checkbox',  label: 'תיבת סימון',  icon: '☑',  category: 'form',    isContainer: false, color: '#0891b2', desc: 'Angular Checkbox' },
  { type: 'sf-toggle',    label: 'מתג (seg)',   icon: '⊷',  category: 'form',    isContainer: false, color: '#0891b2', desc: 'Seg-Ctrl סטנדרט RTL' },
  { type: 'sf-file',      label: 'העלאת קובץ',  icon: '⇧',  category: 'form',    isContainer: false, color: '#0891b2', desc: 'Kendo Upload' },

  // Data display
  { type: 'sf-grid',      label: 'גריד נתונים', icon: '⊟',  category: 'data',    isContainer: false, color: '#059669', desc: 'Kendo Grid מלא עם פגינציה' },
  { type: 'sf-chart',     label: 'גרף',         icon: '📊', category: 'data',    isContainer: false, color: '#059669', desc: 'Kendo Chart' },
  { type: 'sf-list',      label: 'רשימה',       icon: '☰',  category: 'data',    isContainer: false, color: '#059669', desc: 'רשימת פריטים עם @for' },
  { type: 'sf-kpi',       label: 'KPI כרטיס',   icon: '▲',  category: 'data',    isContainer: false, color: '#059669', desc: 'מחוון מספרי עם טרנד' },
  { type: 'sf-tree',      label: 'עץ נתונים',   icon: '🌲', category: 'data',    isContainer: false, color: '#059669', desc: 'Kendo TreeView' },

  // Actions
  { type: 'sf-btn-save',  label: 'שמור',        icon: '✓',  category: 'action',  isContainer: false, color: '#f97316', desc: 'כפתור שמירה כתום (btn-save)' },
  { type: 'sf-btn-cancel',label: 'ביטול',       icon: '✕',  category: 'action',  isContainer: false, color: '#64748b', desc: 'כפתור ביטול (btn-cancel)' },
  { type: 'sf-btn-danger',label: 'מחיקה',       icon: '🗑', category: 'action',  isContainer: false, color: '#ef4444', desc: 'כפתור מחיקה (btn-danger)' },
  { type: 'sf-link',      label: 'קישור',       icon: '🔗', category: 'action',  isContainer: false, color: '#64748b' },

  // Display
  { type: 'sf-label',     label: 'תווית',       icon: 'T',   category: 'display', isContainer: false, color: '#94a3b8' },
  { type: 'sf-badge',     label: 'תג סטטוס',   icon: '◉',  category: 'display', isContainer: false, color: '#94a3b8', desc: 'Kendo Badge' },
  { type: 'sf-divider',   label: 'מפריד',       icon: '─',  category: 'display', isContainer: false, color: '#94a3b8' },
  { type: 'sf-icon',      label: 'אייקון',      icon: '★',  category: 'display', isContainer: false, color: '#94a3b8' },
  { type: 'sf-search',    label: 'חיפוש',       icon: '🔍', category: 'display', isContainer: false, color: '#94a3b8', desc: 'search-wrap סטנדרט' },
];

// ── Canvas control (instance on canvas) ──────────────────────────

export interface CanvasCtrl {
  id:       string;
  type:     string;
  label:    string;
  propLabel?: string;
  children: CanvasCtrl[];
  expanded: boolean;
  selected: boolean;
  props:    Record<string, any>;
}

// ── Screen definition ─────────────────────────────────────────────

export interface ScreenDef {
  id:       string;
  name:     string;
  nameHe:   string;
  route:    string;
  icon:     string;
  parentId: string | null;
  children: ScreenDef[];
  expanded: boolean;
  isNew?:   boolean;
}

// Built-in menu structure (will be populated from backend in real impl)
const DEFAULT_SCREENS: ScreenDef[] = [
  { id: 'dashboard',     name: 'Dashboard',     nameHe: 'לוח בקרה',       route: '/app/dashboard', icon: '📊', parentId: null, children: [], expanded: true },
  { id: 'orgs',          name: 'Organizations', nameHe: 'ארגונים',        route: '/app/organizations', icon: '🏢', parentId: null, children: [], expanded: false },
  { id: 'users',         name: 'Users',         nameHe: 'משתמשים',        route: '/app/users', icon: '👥', parentId: null, children: [], expanded: false },
  { id: 'catalog',       name: 'Catalog',       nameHe: 'קטלוג',          route: '/app/catalog', icon: '📦', parentId: null,
    expanded: false,
    children: [
      { id: 'cat-products', name: 'Products', nameHe: 'מוצרים', route: '/app/products', icon: '🏷️', parentId: 'catalog', children: [], expanded: false },
      { id: 'cat-packages', name: 'Packages', nameHe: 'חבילות', route: '/app/packages', icon: '📦', parentId: 'catalog', children: [], expanded: false },
    ],
  },
  { id: 'projects',      name: 'Projects',      nameHe: 'פרויקטים',       route: '/app/projects', icon: '📁', parentId: null, children: [], expanded: false },
  { id: 'audit',         name: 'Audit Log',     nameHe: 'יומן פעילות',    route: '/app/audit', icon: '📋', parentId: null, children: [], expanded: false },
  { id: 'settings',      name: 'Settings',      nameHe: 'הגדרות',         route: '/app/settings', icon: '⚙️', parentId: null, children: [], expanded: false },
];

let _ctrlIdCounter = 0;
function mkId() { return `ctrl_${++_ctrlIdCounter}_${Date.now()}`; }

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatIconModule, NeuralNetComponent,
    DialogsModule, InputsModule, ButtonsModule, IndicatorsModule,
  ],
  templateUrl: './studio.component.html',
  styleUrl:    './studio.component.scss',
})
export class StudioComponent implements OnInit {

  projectId = 0;

  // ── Mode ─────────────────────────────────────────────────────
  mode = signal<'ai' | 'visual'>('ai');

  // ── Screen Tree ──────────────────────────────────────────────
  screens      = signal<ScreenDef[]>([...DEFAULT_SCREENS.map(s => ({ ...s, children: [...s.children] }))]);
  activeScreen = signal<ScreenDef | null>(null);

  // Add Screen dialog
  addScreenOpen  = signal(false);
  newScreenName  = signal('');
  newScreenRoute = signal('');
  newScreenIcon  = signal('📄');
  newScreenParent = signal<string | null>(null);
  addScreenError = signal('');

  // ── AI Generate ──────────────────────────────────────────────
  aiPrompt    = signal('');
  aiConnector = signal('');
  aiLoading   = signal(false);
  aiResult    = signal<{ ts: string; html: string; scss: string } | null>(null);
  aiError     = signal('');
  aiTab       = signal<'ts' | 'html' | 'scss'>('html');
  aiConnectors: string[] = ['Anthropic (Claude)', 'OpenAI (GPT-4o)', 'Azure OpenAI'];

  // ── Visual Builder ───────────────────────────────────────────
  palette   = CONTROL_PALETTE;
  paletteCat = signal<string>('all');
  canvas    = signal<CanvasCtrl[]>([]);
  selected  = signal<CanvasCtrl | null>(null);
  dragType  = signal<string | null>(null);
  dropTarget = signal<string | null>(null);

  paletteCats = ['all', 'layout', 'form', 'data', 'action', 'display'];
  paletteCatLabels: Record<string, string> = {
    all: 'הכל', layout: 'מבנה', form: 'שדות', data: 'נתונים', action: 'פעולות', display: 'תצוגה',
  };

  filteredPalette = computed(() => {
    const cat = this.paletteCat();
    return cat === 'all' ? this.palette : this.palette.filter(c => c.category === cat);
  });

  ctrlDef(type: string): ControlDef | undefined {
    return this.palette.find(p => p.type === type);
  }

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient,
  ) {}

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.activeScreen.set(this.screens()[0]);
  }

  // ── Screen Tree ──────────────────────────────────────────────

  toggleScreen(s: ScreenDef) {
    s.expanded = !s.expanded;
    this.screens.update(v => [...v]);
  }

  selectScreen(s: ScreenDef) {
    this.activeScreen.set(s);
    this.canvas.set([]);
    this.selected.set(null);
    this.aiResult.set(null);
  }

  openAddScreen(parentId: string | null = null) {
    this.newScreenName.set('');
    this.newScreenRoute.set('');
    this.newScreenIcon.set('📄');
    this.newScreenParent.set(parentId);
    this.addScreenError.set('');
    this.addScreenOpen.set(true);
  }

  saveNewScreen() {
    if (!this.newScreenName().trim()) { this.addScreenError.set('שם מסך הוא שדה חובה'); return; }
    const route = this.newScreenRoute().trim() || `/${this.newScreenName().toLowerCase().replace(/\s+/g, '-')}`;
    const newS: ScreenDef = {
      id:       `screen_${Date.now()}`,
      name:     this.newScreenName(),
      nameHe:   this.newScreenName(),
      route,
      icon:     this.newScreenIcon(),
      parentId: this.newScreenParent(),
      children: [],
      expanded: false,
      isNew:    true,
    };

    this.screens.update(screens => {
      const parentId = this.newScreenParent();
      if (!parentId) {
        return [...screens, newS];
      }
      const addToParent = (nodes: ScreenDef[]): ScreenDef[] => nodes.map(n => {
        if (n.id === parentId) return { ...n, children: [...n.children, newS], expanded: true };
        if (n.children.length) return { ...n, children: addToParent(n.children) };
        return n;
      });
      return addToParent(screens);
    });

    this.addScreenOpen.set(false);
    this.activeScreen.set(newS);
  }

  // ── AI Generate ──────────────────────────────────────────────

  generateWithAI() {
    if (!this.aiPrompt().trim()) { this.aiError.set('הכנס תיאור של המסך'); return; }
    this.aiLoading.set(true);
    this.aiError.set('');
    this.aiResult.set(null);

    // Call backend AI generation endpoint (placeholder — backend not yet implemented)
    this.http.post<any>('/api/studio/generate', {
      prompt:      this.aiPrompt(),
      projectId:   this.projectId,
      connectorId: this.aiConnector(),
      screenName:  this.activeScreen()?.name,
      route:       this.activeScreen()?.route,
    }).subscribe({
      next: r => {
        this.aiLoading.set(false);
        this.aiResult.set(r.data);
      },
      error: () => {
        this.aiLoading.set(false);
        // Simulate a result for demo
        const name = this.activeScreen()?.name ?? 'Screen';
        this.aiResult.set(this.simulateGeneration(name, this.aiPrompt()));
      },
    });
  }

  private simulateGeneration(name: string, prompt: string): { ts: string; html: string; scss: string } {
    const className = name.replace(/\s+/g, '') + 'Component';
    const selector  = 'app-' + name.toLowerCase().replace(/\s+/g, '-');
    return {
      ts: `import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: '${selector}',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, GridModule, ButtonsModule, IndicatorsModule],
  templateUrl: './${selector}.component.html',
  styleUrl: './${selector}.component.scss',
})
export class ${className} {
  loading = signal(true);
  error   = signal('');
  items   = signal<any[]>([]);
  sort: SortDescriptor[] = [{ field: 'id', dir: 'asc' }];
  pageSize = 25; skip = 0;

  get pageData() { return orderBy(this.items(), this.sort).slice(this.skip, this.skip + this.pageSize); }

  constructor(private http: HttpClient) { this.load(); }

  load() {
    this.loading.set(true);
    // TODO: Replace with actual API endpoint
    this.http.get<any>('/api/TODO').subscribe({
      next: r  => { this.items.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינה'); this.loading.set(false); },
    });
  }

  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(sort: SortDescriptor[]) { this.sort = sort; }
}`,
      html: `<!-- ${name} | Generated from: "${prompt}" -->
<div class="page-root">

  <div class="page-header">
    <div>
      <h1 class="page-title">${name}</h1>
      <p class="page-sub">ניהול ${name}</p>
    </div>
    <button class="btn-save" type="button" (click)="openNew()">✓ חדש</button>
  </div>

  <div class="page-toolbar">
    <div class="search-wrap">
      <mat-icon class="search-icon">search</mat-icon>
      <input class="search-input" type="text" placeholder="חיפוש..."
             (input)="onSearch($any($event.target).value)" />
    </div>
  </div>

  @if (loading()) { <kendo-loader type="pulsing" size="large" themeColor="primary" /> }
  @if (error())   { <div class="error-box">{{ error() }}</div> }

  @if (!loading() && !error()) {
    <kendo-grid
      class="main-grid"
      [data]="{ data: pageData, total: items().length }"
      [skip]="skip" [pageSize]="pageSize"
      [pageable]="{ buttonCount: 5, info: true, type: 'numeric', pageSizes: [10,25,50] }"
      [sortable]="{ mode: 'single', allowUnsort: false }"
      [sort]="sort"
      [reorderable]="true" [resizable]="true"
      [selectable]="{ mode: 'multiple', checkboxOnly: true }"
      [columnMenu]="true"
      scrollable="none"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)">

      <kendo-grid-checkbox-column [width]="44" [showSelectAll]="true" />

      <kendo-grid-column field="id" title="מזהה" [width]="80" />
      <!-- TODO: Add data columns -->

      <kendo-grid-column title="" [width]="80" [sortable]="false"
        [resizable]="false" [columnMenu]="false">
        <ng-template kendoGridCellTemplate let-row>
          <button class="btn-edit" (click)="openEdit(row)">✎</button>
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-messages
        pagerItemsPerPage="שורות בעמוד" pagerOf="מתוך" pagerItems="רשומות"
        noRecords="לא נמצאו רשומות" loading="טוען..." />
    </kendo-grid>
  }
</div>`,
      scss: `.page-root { padding: 24px 32px; direction: rtl; }
.page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
.page-title  { font-size: 1.3rem; font-weight: 700; color: var(--sf-text); margin: 0 0 4px; }
.page-sub    { font-size: .8rem; color: var(--sf-text-secondary); margin: 0; }
.page-toolbar { margin-bottom: 14px; }
.main-grid .k-grid-header th.k-header {
  background: var(--sf-grid-hd-bg) !important;
  color: var(--sf-grid-hd-color) !important;
  font-weight: 700 !important; font-size: .78rem !important;
  border-bottom: 2px solid var(--sf-grid-hd-border) !important;
}`,
    };
  }

  copyCode(text: string) {
    navigator.clipboard.writeText(text);
  }

  // ── Visual Builder ───────────────────────────────────────────

  onDragStart(type: string) { this.dragType.set(type); }
  onDragEnd()               { this.dragType.set(null); this.dropTarget.set(null); }
  onDragOver(e: DragEvent, targetId: string) { e.preventDefault(); this.dropTarget.set(targetId); }
  onDragLeave()             { this.dropTarget.set(null); }

  onDropToCanvas(e: DragEvent) {
    e.preventDefault();
    const type = this.dragType();
    if (!type) return;
    this.addToCanvas(null, type);
    this.dragType.set(null);
    this.dropTarget.set(null);
  }

  onDropToCtrl(e: DragEvent, parentCtrl: CanvasCtrl) {
    e.preventDefault();
    e.stopPropagation();
    const type = this.dragType();
    if (!type) return;
    this.addToCanvas(parentCtrl, type);
    this.dragType.set(null);
    this.dropTarget.set(null);
  }

  private addToCanvas(parent: CanvasCtrl | null, type: string) {
    const def = this.ctrlDef(type);
    if (!def) return;
    const ctrl: CanvasCtrl = {
      id: mkId(), type, label: def.label,
      children: [], expanded: true, selected: false,
      props: { label: def.label, required: false, placeholder: '' },
    };
    if (parent && parent.children !== undefined) {
      this.canvas.update(cs => {
        const setInTree = (nodes: CanvasCtrl[]): CanvasCtrl[] => nodes.map(n => {
          if (n.id === parent.id) return { ...n, children: [...n.children, ctrl] };
          return { ...n, children: setInTree(n.children) };
        });
        return setInTree(cs);
      });
    } else {
      this.canvas.update(cs => [...cs, ctrl]);
    }
    this.selectCtrl(ctrl);
  }

  selectCtrl(ctrl: CanvasCtrl) {
    const deselect = (nodes: CanvasCtrl[]): CanvasCtrl[] => nodes.map(n => ({
      ...n, selected: n.id === ctrl.id,
      children: deselect(n.children),
    }));
    this.canvas.update(cs => deselect(cs));
    this.selected.set(ctrl);
  }

  removeCtrl(id: string) {
    const remove = (nodes: CanvasCtrl[]): CanvasCtrl[] =>
      nodes.filter(n => n.id !== id).map(n => ({ ...n, children: remove(n.children) }));
    this.canvas.update(cs => remove(cs));
    if (this.selected()?.id === id) this.selected.set(null);
  }

  toggleCtrlExpand(ctrl: CanvasCtrl) {
    ctrl.expanded = !ctrl.expanded;
    this.canvas.update(cs => [...cs]);
  }

  updateProp(key: string, value: any) {
    const sel = this.selected();
    if (!sel) return;
    sel.props[key] = value;
    if (key === 'label') sel.label = value;
    this.canvas.update(cs => [...cs]);
  }

  clearCanvas() { this.canvas.set([]); this.selected.set(null); }

  back() { this.router.navigate(['/app/projects', this.projectId]); }
}
