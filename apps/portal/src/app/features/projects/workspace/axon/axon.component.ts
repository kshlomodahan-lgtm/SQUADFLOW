import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';

export interface SchemaParam {
  name:        string;
  type:        string;
  required?:   boolean;
  description?: string;
  example?:    string;
}

export interface AxonRoute {
  RouteID?:     number;
  RouteToken?:  string;
  category?:    string;
  Category?:    string;
  method?:      string;
  Method?:      string;
  path?:        string;
  Path?:        string;
  title?:       string;
  Title?:       string;
  description?: string;
  Description?: string;
  authRequired?: boolean;
  AuthRequired?: boolean;
  SpName?:      string | null;
  ReqSchema?:   SchemaParam[] | null;
  ResSchema?:   any;
  Tags?:        string[];
  SortOrder?:   number;
  // platform-only
  isPlatform?:  boolean;
}

export interface AxonStats {
  total: number; gets: number; posts: number;
  puts: number; deletes: number; patches: number;
  secured: number; public: number; categories: number;
}

export interface SchemaNode {
  key: string;
  depth: number;
  typeName: string;
  typeColor: string;
  preview: string;
  isContainer: boolean;
}

const METHOD_COLORS: Record<string, { bg: string; color: string }> = {
  GET:    { bg: '#d1fae5', color: '#065f46' },
  POST:   { bg: '#dbeafe', color: '#1e40af' },
  PUT:    { bg: '#fef3c7', color: '#92400e' },
  DELETE: { bg: '#fee2e2', color: '#991b1b' },
  PATCH:  { bg: '#ede9fe', color: '#5b21b6' },
};

const PARAM_TYPES = ['string','number','boolean','object','array','date'];

type ViewMode = 'project' | 'platform';

@Component({
  selector: 'app-axon',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatIconModule, DialogsModule, InputsModule, ButtonsModule, IndicatorsModule,
  ],
  templateUrl: './axon.component.html',
  styleUrl:    './axon.component.scss',
})
export class AxonComponent implements OnInit {

  projectId = 0;
  loading   = signal(true);
  error     = signal('');

  // ── View mode ─────────────────────────────────────────────
  viewMode  = signal<ViewMode>('platform');

  // ── Project routes ────────────────────────────────────────
  routes    = signal<AxonRoute[]>([]);
  stats     = signal<AxonStats | null>(null);
  grouped   = signal<Record<string, AxonRoute[]>>({});

  // ── Platform routes ───────────────────────────────────────
  platformRoutes  = signal<AxonRoute[]>([]);
  platformGrouped = signal<Record<string, AxonRoute[]>>({});
  platformStats   = signal<AxonStats | null>(null);

  searchText     = signal('');
  activeCategory = signal<string | null>(null);
  expandedRoute  = signal<string | null>(null);  // key = "method:path"
  testingRoute   = signal<string | null>(null);

  // Import
  importing    = signal(false);
  importResult = signal<{ inserted: number; skipped: number } | null>(null);

  // Dialog
  dialogOpen  = signal(false);
  editRoute   = signal<AxonRoute | null>(null);
  saving      = signal(false);
  dialogError = signal('');
  form!: FormGroup;

  // Test panel
  testBaseUrl    = signal('http://localhost:3000');
  testPathParams = signal<Record<string,string>>({});
  testHeaders    = signal<{ key: string; value: string }[]>([]);
  testBody       = signal('');
  testRunning    = signal(false);
  testResult     = signal<{ status: number; duration: number; body: any; error?: string } | null>(null);

  readonly Object = Object;
  readonly methods    = ['GET','POST','PUT','DELETE','PATCH'];
  readonly paramTypes = PARAM_TYPES;
  readonly methodColors = METHOD_COLORS;

  // ── Display type: list vs graph ───────────────────────────
  displayType = signal<'list' | 'graph'>('list');

  // ── Graph state ───────────────────────────────────────────
  activeGraphCat    = signal<string | null>(null);
  hoveredGraphCat   = signal<string | null>(null);
  hoveredRoute      = signal<string | null>(null);
  selectedRouteGraph = signal<AxonRoute | null>(null);

  readonly CANVAS_W  = 1440;
  readonly CANVAS_H  = 820;
  readonly CENTER_X  = 900;   // AXON positioned right-of-center to leave room for panel+ring on left
  readonly CENTER_Y  = 400;
  readonly CAT_R     = 260;

  // When a category is expanded: AXON shifts further right, ring opens on the left
  readonly AXON_SHIFT_X      = 200;           // px AXON moves right when expanded
  readonly EXP_CAT_X         = 500;           // expanded category circle center x
  readonly EXP_CAT_Y         = 400;
  readonly expandedCatCenter = { x: 500, y: 400 };

  // Dynamic AXON position — shifts right when category is active
  axonCenter = computed(() => ({
    x: this.activeGraphCat() ? this.CENTER_X + this.AXON_SHIFT_X : this.CENTER_X,
    y: this.CENTER_Y,
  }));

  readonly CAT_COLORS: Record<string, string> = {
    'Auth':         '#ef4444',
    'Users':        '#3b82f6',
    'Tenants':      '#8b5cf6',
    'Customers':    '#06b6d4',
    'Catalog':      '#f59e0b',
    'RBAC':         '#a855f7',
    'Organization': '#0891b2',
    'Projects':     '#059669',
    'Connectors':   '#1d4ed8',
    'Settings':     '#64748b',
    'System':       '#94a3b8',
    'AI':           '#6366f1',
    'FLOWSPACE':    '#10b981',
  };

  // Background neural dots (deterministic pseudorandom)
  readonly bgDots = Array.from({ length: 55 }, (_, i) => ({
    x: (i * 347 + 113) % 1440,
    y: (i * 251 + 71)  % 820,
    r: 1 + (i % 3) * 0.6,
    op: 0.08 + (i % 5) * 0.025,
  }));

  readonly bgLines: { x1:number; y1:number; x2:number; y2:number }[] = (() => {
    const dots = Array.from({ length: 55 }, (_, i) => ({
      x: (i * 347 + 113) % 1440, y: (i * 251 + 71) % 820,
    }));
    const lines: { x1:number; y1:number; x2:number; y2:number }[] = [];
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
        if (Math.sqrt(dx*dx + dy*dy) < 160) {
          lines.push({ x1: dots[i].x, y1: dots[i].y, x2: dots[j].x, y2: dots[j].y });
        }
      }
    }
    return lines.slice(0, 60);
  })();

  categoryNodes = computed(() => {
    const cats   = Object.keys(this.activeGrouped());
    const center = this.axonCenter();
    const active = this.activeGraphCat();
    return cats.map((cat, i) => {
      const angle = (i / cats.length) * 2 * Math.PI - Math.PI / 2;
      return {
        id:      cat,
        x:       center.x + Math.cos(angle) * this.CAT_R,
        y:       center.y + Math.sin(angle) * this.CAT_R,
        angle,
        count:   (this.activeGrouped()[cat] ?? []).length,
        color:   this.CAT_COLORS[cat] ?? '#64748b',
        active:  active === cat,
        hovered: this.hoveredGraphCat() === cat,
        hidden:  active !== null,   // hide all ring nodes while any cat is expanded
      };
    });
  });

  routeNodes = computed(() => {
    const cat = this.activeGraphCat();
    if (!cat) return [];
    const allRoutes = this.activeGrouped()[cat] ?? [];
    const MAX_DISPLAY = 24;
    const routes = allRoutes.slice(0, MAX_DISPLAY);
    const total   = routes.length;
    if (total === 0) return [];

    // Full circle around the expanded-category center, dynamic radius
    const center = this.expandedCatCenter;
    const nodeD  = 38; // min arc spacing (circle diameter + gap)
    const dynR   = Math.max(140, Math.ceil(nodeD * total / (2 * Math.PI)));

    const selKey = this.selectedRouteGraph() ? this.routeKey(this.selectedRouteGraph()!) : null;
    return routes.map((r, i) => {
      const angle = (i / total) * 2 * Math.PI - Math.PI / 2; // start from top
      const m     = this.getMethod(r);
      const style = this.methodStyle(m);
      const key   = this.routeKey(r);
      return {
        id:         key,
        route:      r,
        x:          center.x + Math.cos(angle) * dynR,
        y:          center.y + Math.sin(angle) * dynR,
        catX:       center.x,
        catY:       center.y,
        method:     m,
        path:       this.getPath(r),
        title:      this.getTitle(r),
        bg:         style.bg,
        fg:         style.color,
        hovered:    this.hoveredRoute() === key,
        selected:   selKey === key,
        isLast:     i === total - 1 && allRoutes.length > MAX_DISPLAY,
        extraCount: allRoutes.length - MAX_DISPLAY,
      };
    });
  });

  toggleGraphCat(cat: string) {
    this.activeGraphCat.set(this.activeGraphCat() === cat ? null : cat);
    this.selectedRouteGraph.set(null);
  }

  selectRouteInGraph(r: AxonRoute) {
    this.selectedRouteGraph.set(this.selectedRouteGraph() === r ? null : r);
  }

  openInspectorTest(r: AxonRoute) {
    this.setDisplayType('list');
    const cat = this.getCategory(r);
    this.activeCategory.set(cat);
    const key = this.routeKey(r);
    this.expandedRoute.set(key);
    this.testingRoute.set(key);
    this.initTestParams(r);
  }

  // ── Schema tree ───────────────────────────────────────
  schemaNodes = computed(() => {
    const route = this.selectedRouteGraph();
    if (!route?.ResSchema) return [];
    const schema = route.ResSchema;
    if (typeof schema !== 'object' || !schema) return [];
    const nodes: SchemaNode[] = [];
    for (const [key, val] of Object.entries(schema)) {
      nodes.push(...this.flattenToNodes(val, 0, key));
    }
    return nodes;
  });

  private flattenToNodes(val: any, depth: number, key: string): SchemaNode[] {
    const nodes: SchemaNode[] = [];
    if (val === null || val === undefined) {
      nodes.push({ key, depth, typeName: 'null', typeColor: '#94a3b8', preview: 'null', isContainer: false });
    } else if (Array.isArray(val)) {
      nodes.push({ key, depth, typeName: `array[${val.length}]`, typeColor: '#f59e0b', preview: '', isContainer: true });
      if (val.length > 0 && val[0] !== null && typeof val[0] === 'object') {
        for (const [k, v] of Object.entries(val[0] as object)) {
          nodes.push(...this.flattenToNodes(v, depth + 1, k));
        }
      }
    } else if (typeof val === 'object') {
      const count = Object.keys(val).length;
      nodes.push({ key, depth, typeName: 'object', typeColor: '#8b5cf6', preview: `{${count}}`, isContainer: true });
      for (const [k, v] of Object.entries(val)) {
        nodes.push(...this.flattenToNodes(v, depth + 1, k));
      }
    } else if (typeof val === 'string') {
      const p = val.length > 22 ? `"${val.slice(0, 22)}…"` : `"${val}"`;
      nodes.push({ key, depth, typeName: 'string', typeColor: '#10b981', preview: p, isContainer: false });
    } else if (typeof val === 'number') {
      nodes.push({ key, depth, typeName: 'number', typeColor: '#3b82f6', preview: String(val), isContainer: false });
    } else if (typeof val === 'boolean') {
      nodes.push({ key, depth, typeName: 'boolean', typeColor: '#a855f7', preview: String(val), isContainer: false });
    } else {
      nodes.push({ key, depth, typeName: typeof val, typeColor: '#64748b', preview: String(val), isContainer: false });
    }
    return nodes;
  }

  getSchemaTypeColor(typeName: string): string {
    const colors: Record<string, string> = {
      string: '#10b981', number: '#3b82f6', boolean: '#a855f7',
      object: '#8b5cf6', array: '#f59e0b', null: '#94a3b8', date: '#f97316',
    };
    return colors[typeName] ?? '#64748b';
  }

  setDisplayType(t: 'list' | 'graph') {
    this.displayType.set(t);
    if (t === 'graph') { this.activeGraphCat.set(null); }
  }

  // ── computed: active data based on mode ───────────────────
  activeGrouped = computed(() =>
    this.viewMode() === 'platform' ? this.platformGrouped() : this.grouped()
  );

  activeStats = computed(() =>
    this.viewMode() === 'platform' ? this.platformStats() : this.stats()
  );

  filteredGrouped = computed(() => {
    const q   = this.searchText().toLowerCase();
    const cat = this.activeCategory();
    const all = this.activeGrouped();
    const result: Record<string, AxonRoute[]> = {};
    for (const [c, rows] of Object.entries(all)) {
      if (cat && cat !== c) continue;
      const filtered = q
        ? rows.filter(r => {
            const path  = (r.Path || r.path || '').toLowerCase();
            const title = (r.Title || r.title || '').toLowerCase();
            const meth  = (r.Method || r.method || '').toLowerCase();
            return path.includes(q) || title.includes(q) || meth.includes(q);
          })
        : rows;
      if (filtered.length) result[c] = filtered;
    }
    return result;
  });

  categories = computed(() => Object.keys(this.activeGrouped()));

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient,
    private fb:     FormBuilder,
  ) {}

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.buildForm();
    this.loadPlatform();
    this.load();
  }

  // ── Load platform routes (always) ─────────────────────────
  loadPlatform() {
    this.http.get<any>('/api/axon/platform-routes').subscribe({
      next: r => {
        this.platformRoutes.set(r.data.routes ?? []);
        this.platformGrouped.set(r.data.grouped ?? {});
        this.platformStats.set(r.data.stats ?? null);
        if (this.viewMode() === 'platform') this.loading.set(false);
      },
      error: () => { if (this.viewMode() === 'platform') { this.error.set('שגיאה בטעינת routes'); this.loading.set(false); } },
    });
  }

  load() {
    if (this.viewMode() === 'platform') { this.loading.set(false); return; }
    this.loading.set(true);
    this.error.set('');

    this.http.get<any>(`/api/axon/routes?projectId=${this.projectId}`).subscribe({
      next: r => {
        this.routes.set(r.data.routes ?? []);
        this.grouped.set(r.data.grouped ?? {});
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת routes'); this.loading.set(false); },
    });

    this.http.get<any>(`/api/axon/stats?projectId=${this.projectId}`).subscribe({
      next: r => this.stats.set(r.data),
    });
  }

  setMode(m: ViewMode) {
    this.viewMode.set(m);
    this.activeCategory.set(null);
    this.searchText.set('');
    this.expandedRoute.set(null);
    this.testingRoute.set(null);
    this.error.set('');
    if (m === 'project') {
      this.loading.set(true);
      this.load();
    }
  }

  // ── Import platform → project ─────────────────────────────
  importPlatform() {
    this.importing.set(true);
    this.importResult.set(null);
    this.http.post<any>('/api/axon/import-platform', { projectId: this.projectId }).subscribe({
      next: r => {
        this.importing.set(false);
        this.importResult.set(r.data);
        this.load();
        setTimeout(() => this.importResult.set(null), 5000);
      },
      error: () => { this.importing.set(false); },
    });
  }

  // ── Route key (unique identifier for platform routes) ─────
  routeKey(r: AxonRoute): string {
    return `${r.Method ?? r.method}:${r.Path ?? r.path}`;
  }

  // ── Expand / collapse ─────────────────────────────────────
  toggleExpand(r: AxonRoute) {
    const k = this.routeKey(r);
    this.expandedRoute.set(this.expandedRoute() === k ? null : k);
    if (this.expandedRoute() !== k) this.testingRoute.set(null);
  }

  toggleTest(r: AxonRoute) {
    const k = this.routeKey(r);
    if (this.testingRoute() === k) {
      this.testingRoute.set(null);
    } else {
      this.testingRoute.set(k);
      this.testResult.set(null);
      this.initTestParams(r);
    }
  }

  isExpanded(r: AxonRoute)  { return this.expandedRoute()  === this.routeKey(r); }
  isTesting(r: AxonRoute)   { return this.testingRoute()   === this.routeKey(r); }

  initTestParams(r: AxonRoute) {
    const path = r.Path ?? r.path ?? '';
    const pathParams: Record<string,string> = {};
    const matches = path.matchAll(/:(\w+)/g);
    for (const m of matches) pathParams[m[1]] = '';
    this.testPathParams.set(pathParams);
    const method = (r.Method ?? r.method ?? 'GET').toUpperCase();
    this.testBody.set(method !== 'GET' && method !== 'DELETE' ? '{}' : '');
    this.testHeaders.set([{ key: 'Authorization', value: 'Bearer ' }]);
  }

  setPathParam(key: string, val: string) {
    this.testPathParams.update(p => ({ ...p, [key]: val }));
  }

  setHeaderVal(i: number, field: 'key' | 'value', val: string) {
    this.testHeaders.update(h => {
      const n = [...h]; n[i] = { ...n[i], [field]: val }; return n;
    });
  }

  addHeader()              { this.testHeaders.update(h => [...h, { key: '', value: '' }]); }
  removeHeader(i: number)  { this.testHeaders.update(h => h.filter((_,j) => j !== i)); }

  runTest(r: AxonRoute) {
    const params  = this.testPathParams();
    const headers: Record<string,string> = {};
    for (const h of this.testHeaders()) if (h.key) headers[h.key] = h.value;
    let body: any = null;
    if (this.testBody()) try { body = JSON.parse(this.testBody()); } catch {}

    this.testRunning.set(true);
    this.testResult.set(null);

    if (r.RouteID) {
      // DB route — use existing test endpoint
      this.http.post<any>(`/api/axon/routes/${r.RouteID}/test`, {
        baseUrl: this.testBaseUrl(), params, headers, body,
      }).subscribe({
        next: resp => { this.testRunning.set(false); this.testResult.set(resp.data); },
        error: err  => { this.testRunning.set(false); this.testResult.set({ status: 0, duration: 0, body: null, error: err.error?.message ?? 'שגיאה' }); },
      });
    } else {
      // Platform route — call test endpoint with path directly
      const path   = r.Path ?? r.path ?? '';
      const method = (r.Method ?? r.method ?? 'GET').toUpperCase();
      let resolvedPath = path;
      for (const [k, v] of Object.entries(params)) {
        resolvedPath = resolvedPath.replace(`:${k}`, encodeURIComponent(v));
      }
      const start = Date.now();
      const baseUrl = this.testBaseUrl().replace(/\/$/, '');
      const reqObs = method === 'GET' || method === 'DELETE'
        ? this.http.request<any>(method, baseUrl + resolvedPath, { headers })
        : this.http.request<any>(method, baseUrl + resolvedPath, { headers, body });

      reqObs.subscribe({
        next: resp => {
          this.testRunning.set(false);
          this.testResult.set({ status: 200, duration: Date.now() - start, body: resp });
        },
        error: err => {
          this.testRunning.set(false);
          this.testResult.set({
            status: err.status ?? 0,
            duration: Date.now() - start,
            body: err.error,
            error: err.message,
          });
        },
      });
    }
  }

  // ── Dialog ────────────────────────────────────────────────
  buildForm(r?: AxonRoute) {
    const cat  = r?.Category ?? r?.category ?? 'כללי';
    const meth = r?.Method   ?? r?.method   ?? 'GET';
    const path = r?.Path     ?? r?.path     ?? '/';
    this.form = this.fb.group({
      category:     [cat,  Validators.required],
      method:       [meth, Validators.required],
      path:         [path, Validators.required],
      title:        [r?.Title ?? r?.title ?? ''],
      description:  [r?.Description ?? r?.description ?? ''],
      spName:       [r?.SpName ?? ''],
      authRequired: [r?.AuthRequired ?? r?.authRequired ?? true],
      tags:         [Array.isArray(r?.Tags) ? r!.Tags!.join(', ') : ''],
      resSchema:    [r?.ResSchema ? JSON.stringify(r.ResSchema, null, 2) : ''],
      reqParams:    this.fb.array(
        (r?.ReqSchema ?? []).map((p: SchemaParam) => this.fb.group({
          name:        [p.name,        Validators.required],
          type:        [p.type        ?? 'string'],
          required:    [p.required    ?? false],
          description: [p.description ?? ''],
          example:     [p.example     ?? ''],
        }))
      ),
    });
  }

  get reqParams(): FormArray { return this.form.get('reqParams') as FormArray; }

  addParam() {
    this.reqParams.push(this.fb.group({
      name: ['', Validators.required], type: ['string'],
      required: [false], description: [''], example: [''],
    }));
  }

  removeParam(i: number) { this.reqParams.removeAt(i); }

  openNew() {
    this.editRoute.set(null);
    this.buildForm();
    this.dialogError.set('');
    this.dialogOpen.set(true);
  }

  openEdit(r: AxonRoute, e: Event) {
    e.stopPropagation();
    this.editRoute.set(r);
    this.buildForm(r);
    this.dialogError.set('');
    this.dialogOpen.set(true);
  }

  closeDialog() { this.dialogOpen.set(false); }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;

    const payload: any = {
      projectId:   this.projectId,
      category:    v.category,
      method:      v.method,
      path:        v.path,
      title:       v.title,
      description: v.description,
      spName:      v.spName || null,
      authRequired: v.authRequired,
      tags:        v.tags ? v.tags.split(',').map((t: string) => t.trim()).filter(Boolean) : [],
      reqSchema:   v.reqParams.length ? v.reqParams : null,
      resSchema:   v.resSchema ? (() => { try { return JSON.parse(v.resSchema); } catch { return v.resSchema; } })() : null,
    };

    this.saving.set(true);
    this.dialogError.set('');

    const edit = this.editRoute();
    const req = edit?.RouteID
      ? this.http.put<any>(`/api/axon/routes/${edit.RouteID}`, payload)
      : this.http.post<any>('/api/axon/routes', payload);

    req.subscribe({
      next: () => { this.saving.set(false); this.closeDialog(); this.load(); },
      error: err => { this.saving.set(false); this.dialogError.set(err.error?.message ?? 'שגיאה בשמירה'); },
    });
  }

  deleteRoute(r: AxonRoute, e: Event) {
    e.stopPropagation();
    if (!r.RouteID) return;
    if (!confirm(`למחוק את ה-route ${r.Method ?? r.method} ${r.Path ?? r.path}?`)) return;
    this.http.delete<any>(`/api/axon/routes/${r.RouteID}`).subscribe({
      next: () => this.load(),
    });
  }

  // ── Helpers ───────────────────────────────────────────────
  methodStyle(m: string) { return this.methodColors[m.toUpperCase()] ?? { bg: '#f1f5f9', color: '#64748b' }; }

  statusClass(s: number) {
    if (s >= 200 && s < 300) return 'status-ok';
    if (s >= 400 && s < 500) return 'status-warn';
    if (s >= 500)            return 'status-err';
    return 'status-none';
  }

  pathParams(path: string): string[] {
    return [...path.matchAll(/:(\w+)/g)].map(m => m[1]);
  }

  formatBody(body: any): string {
    if (!body) return '—';
    try { return JSON.stringify(body, null, 2); } catch { return String(body); }
  }

  getCategory(r: AxonRoute)    { return r.Category ?? r.category ?? ''; }
  getMethod(r: AxonRoute)      { return (r.Method ?? r.method ?? 'GET').toUpperCase(); }
  getPath(r: AxonRoute)        { return r.Path ?? r.path ?? ''; }
  getTitle(r: AxonRoute)       { return r.Title ?? r.title ?? ''; }
  getDesc(r: AxonRoute)        { return r.Description ?? r.description ?? ''; }
  isAuth(r: AxonRoute): boolean { return !!(r.AuthRequired ?? r.authRequired); }

  back() {
    this.router.navigate(['/app/projects', this.projectId]);
  }
}
