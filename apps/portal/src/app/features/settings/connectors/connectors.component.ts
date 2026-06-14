import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthService } from '../../../core/services/auth.service';

export interface ConnectorField {
  key:          string;
  label:        string;
  type:         'text' | 'password' | 'number' | 'boolean' | 'countries' | 'select';
  required?:    boolean;
  default?:     any;
  placeholder?: string;
  isDynamic?:   boolean;
  options?:     string[];
}

export interface Connector {
  ConnectorID:    number;
  TenantID:       number;
  ProductID:      number;
  ScopeLevel:     string;
  ConnectorKey:   string;
  Category:       string;
  ConnectorName:  string;
  IconEmoji:      string;
  Description:    string;
  SchemaJSON:     ConnectorField[];
  hasConfig:      boolean;
  IsEnabled:      boolean;
  LastTestedAt:   string | null;
  LastTestStatus: string | null;
  LastTestMsg:    string | null;
  UpdatedAt:      string;
  ConnectorToken:       string | null;
  SourceConnectorToken: string | null;
  AccessMode?:          string;
}

const CATEGORY_META: Record<string, { label: string; icon: string }> = {
  AI:           { label: 'AI ואוטומציה',         icon: '🤖' },
  DATABASE:     { label: 'בסיסי נתונים',          icon: '🗄️' },
  EMAIL:        { label: 'דוא"ל',               icon: '📧' },
  STORAGE:      { label: 'אחסון קבצים',          icon: '☁️' },
  WEBHOOK:      { label: 'Webhooks ואינטגרציות',  icon: '🔗' },
  AUTH:         { label: 'זיהוי וכניסה',          icon: '🔐' },
  EXTERNAL_API: { label: 'API חיצוני',            icon: '🌐' },
};

@Component({
  selector: 'app-connectors',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    DialogsModule, InputsModule, ButtonsModule,
    IndicatorsModule, MatProgressSpinnerModule,
  ],
  templateUrl: './connectors.component.html',
  styleUrl:    './connectors.component.scss',
})
export class ConnectorsComponent implements OnInit {

  loading      = signal(true);
  error        = signal('');
  connectors         = signal<Connector[]>([]);
  platformConnectors = signal<Connector[]>([]);
  activeCategory = signal('AI');

  editOpen     = signal(false);
  editConnector = signal<Connector | null>(null);
  editConfig   = signal<Record<string, any>>({});
  editEnabled  = signal(false);
  editSaving   = signal(false);
  editError    = signal('');
  editShowPass: Record<string, boolean> = {};

  deleteOpen      = signal(false);
  deleteConnector = signal<Connector | null>(null);
  deleteInProgress = signal(false);

  testRunning  = signal<string | null>(null);
  testResult   = signal<{ key: string; status: string; message: string } | null>(null);
  copiedToken  = signal<string | null>(null);
  editToken       = computed(() => this.editConnector()?.ConnectorToken ?? null);
  editSourceToken = computed(() => this.editConnector()?.SourceConnectorToken ?? null);
  testValues   = signal<Record<string, any>>({});  // ערכי בדיקה לשדות דינאמיים

  readonly categories = Object.entries(CATEGORY_META).map(([id, m]) => ({ id, ...m }));
  readonly categoryMeta = CATEGORY_META;

  get scope(): string {
    const u = this.auth.user();
    if (u?.tenantId === 1 && u?.roleId === 1) return 'PLATFORM';
    return 'TENANT';
  }

  categorized = computed(() => {
    const cat = this.activeCategory();
    return this.connectors().filter(c => c.Category === cat);
  });

  platformCategorized = computed(() => {
    const cat = this.activeCategory();
    return this.platformConnectors().filter(c => c.Category === cat);
  });

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.http.get<{ success: boolean; data: Connector[]; platformData?: Connector[] }>(
      `/api/connectors?scope=${this.scope}`
    ).subscribe({
      next: r => {
        this.connectors.set(r.data ?? []);
        this.platformConnectors.set(r.platformData ?? []);
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת חיבורים'); this.loading.set(false); },
    });
  }

  openEdit(c: Connector) {
    this.editError.set('');
    this.editShowPass = {};
    this.testValues.set({});
    this.http.get<{ success: boolean; data: any }>(
      `/api/connectors/${c.ConnectorKey}?scope=${this.scope}`
    ).subscribe({
      next: r => {
        this.editConnector.set(c);
        this.editConfig.set({ ...r.data.config });
        this.editEnabled.set(!!c.IsEnabled);
        this.editOpen.set(true);
      },
      error: () => {
        this.editConnector.set(c);
        this.editConfig.set({});
        this.editEnabled.set(!!c.IsEnabled);
        this.editOpen.set(true);
      },
    });
  }

  closeEdit() { this.editOpen.set(false); this.editConnector.set(null); }

  getField(key: string): any { return this.editConfig()[key] ?? ''; }

  setField(key: string, value: any) {
    this.editConfig.update(cfg => ({ ...cfg, [key]: value }));
  }

  toggleShow(key: string) {
    this.editShowPass[key] = !this.editShowPass[key];
  }

  setTestValue(key: string, value: string, isNum: boolean) {
    const parsed = isNum ? +value : value;
    this.testValues.update(v => { const n = { ...v }; n[key] = parsed; return n; });
  }

  saveEdit() {
    const c = this.editConnector();
    if (!c) return;
    this.editSaving.set(true);
    this.editError.set('');
    this.http.put<{ success: boolean; message: string }>(
      `/api/connectors/${c.ConnectorKey}?scope=${this.scope}`,
      { config: this.editConfig(), isEnabled: this.editEnabled() }
    ).subscribe({
      next: () => {
        this.editSaving.set(false);
        this.closeEdit();
        this.load();
      },
      error: err => {
        this.editSaving.set(false);
        this.editError.set(err.error?.message ?? 'שגיאה בשמירה');
      },
    });
  }

  testConnection(c: Connector, fromDialog = false) {
    this.testRunning.set(c.ConnectorKey);
    this.testResult.set(null);
    this.http.post<{ success: boolean; data: { status: string; message: string } }>(
      `/api/connectors/${c.ConnectorKey}/test?scope=${this.scope}`,
      { testParams: this.testValues() }
    ).subscribe({
      next: r => {
        this.testRunning.set(null);
        this.testResult.set({ key: c.ConnectorKey, ...r.data });
        this.load();
        if (fromDialog) this.editError.set('');
      },
      error: err => {
        this.testRunning.set(null);
        this.testResult.set({ key: c.ConnectorKey, status: 'FAIL', message: err.error?.message ?? 'שגיאה' });
      },
    });
  }

  scopeLabel(s: string): string {
    return { PLATFORM: 'פלטפורמה', TENANT: 'ארגון', PRODUCT: 'מוצר' }[s] ?? s;
  }

  statusClass(s: string | null): string {
    return { OK: 'status-ok', FAIL: 'status-fail', PENDING: 'status-pending' }[s ?? ''] ?? 'status-none';
  }

  statusLabel(s: string | null): string {
    return { OK: '✓ תקין', FAIL: '✗ כשל', PENDING: '⏳ ממתין' }[s ?? ''] ?? 'לא נבדק';
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('he-IL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  catCount(catId: string): number {
    return this.connectors().filter(c => c.Category === catId).length;
  }

  catEnabledCount(catId: string): number {
    return this.connectors().filter(c => c.Category === catId && c.IsEnabled).length;
  }

  catPlatformCount(catId: string): number {
    return this.platformConnectors().filter(c => c.Category === catId).length;
  }

  adoptConnector(c: Connector) {
    this.openEdit(c);
  }

  accessModeLabel(mode: string): string {
    return { PUBLIC: '🌐 ציבורי', APPROVAL_REQUIRED: '🔔 טעון אישור' }[mode] ?? mode;
  }

  copyToken(token: string) {
    navigator.clipboard.writeText(token).then(() => {
      this.copiedToken.set(token);
      setTimeout(() => this.copiedToken.set(null), 2000);
    });
  }

  confirmDelete(c: Connector) {
    this.deleteConnector.set(c);
    this.deleteOpen.set(true);
  }

  cancelDelete() {
    this.deleteOpen.set(false);
    this.deleteConnector.set(null);
  }

  doDelete() {
    const c = this.deleteConnector();
    if (!c) return;
    this.deleteInProgress.set(true);
    this.http.delete<{ success: boolean; message: string }>(
      `/api/connectors/${c.ConnectorKey}?scope=${this.scope}`
    ).subscribe({
      next: () => {
        this.deleteInProgress.set(false);
        this.deleteOpen.set(false);
        this.deleteConnector.set(null);
        this.load();
      },
      error: err => {
        this.deleteInProgress.set(false);
        alert(err.error?.message ?? 'שגיאה במחיקה');
      },
    });
  }

  openLive(c: Connector, runtimeParams: Record<string, any> = {}) {
    this.http.post<{ success: boolean; data: { url: string; width: number; height: number } }>(
      `/api/connectors/${c.ConnectorKey}/live?scope=${this.scope}`,
      { params: runtimeParams }
    ).subscribe({
      next: r => {
        const { url, width: w, height: h } = r.data;
        const left = Math.round((screen.width  - w) / 2);
        const top  = Math.round((screen.height - h) / 2);
        window.open(url, `cam-${c.ConnectorKey}`,
          `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`);
      },
      error: err => alert(err.error?.message ?? 'שגיאה בפתיחת מצלמה'),
    });
  }
}
