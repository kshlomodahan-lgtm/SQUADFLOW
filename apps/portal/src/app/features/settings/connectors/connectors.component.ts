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
  key:         string;
  label:       string;
  type:        'text' | 'password' | 'number' | 'boolean';
  required?:   boolean;
  default?:    any;
  placeholder?: string;
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
}

const CATEGORY_META: Record<string, { label: string; icon: string }> = {
  AI:       { label: 'AI ואוטומציה',         icon: '🤖' },
  DATABASE: { label: 'בסיסי נתונים',          icon: '🗄️' },
  EMAIL:    { label: 'דוא"ל',               icon: '📧' },
  STORAGE:  { label: 'אחסון קבצים',          icon: '☁️' },
  WEBHOOK:  { label: 'Webhooks ואינטגרציות',  icon: '🔗' },
  AUTH:     { label: 'זיהוי וכניסה',          icon: '🔐' },
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
  connectors   = signal<Connector[]>([]);
  activeCategory = signal('AI');

  editOpen     = signal(false);
  editConnector = signal<Connector | null>(null);
  editConfig   = signal<Record<string, any>>({});
  editEnabled  = signal(false);
  editSaving   = signal(false);
  editError    = signal('');
  editShowPass: Record<string, boolean> = {};

  testRunning  = signal<string | null>(null);
  testResult   = signal<{ key: string; status: string; message: string } | null>(null);

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

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.http.get<{ success: boolean; data: Connector[] }>(
      `/api/connectors?scope=${this.scope}`
    ).subscribe({
      next: r => { this.connectors.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת חיבורים'); this.loading.set(false); },
    });
  }

  openEdit(c: Connector) {
    this.editError.set('');
    this.editShowPass = {};
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
      `/api/connectors/${c.ConnectorKey}/test?scope=${this.scope}`, {}
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
}
