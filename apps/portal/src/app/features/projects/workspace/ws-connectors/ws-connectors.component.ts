import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NeuralNetComponent } from '../../../../shared/components/neural-net/neural-net.component';

import {
  ConnectorField,
  Connector,
} from '../../../settings/connectors/connectors.component';

const CATEGORY_META: Record<string, { label: string; icon: string }> = {
  AI:       { label: 'AI ואוטומציה',          icon: '🤖' },
  DATABASE: { label: 'בסיסי נתונים',           icon: '🗄️' },
  EMAIL:    { label: 'דוא"ל',                icon: '📧' },
  STORAGE:  { label: 'אחסון קבצים',           icon: '☁️' },
  WEBHOOK:  { label: 'Webhooks ואינטגרציות',   icon: '🔗' },
  AUTH:     { label: 'זיהוי וכניסה',           icon: '🔐' },
};

@Component({
  selector: 'app-ws-connectors',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatIconModule, NeuralNetComponent,
    DialogsModule, InputsModule, ButtonsModule, IndicatorsModule,
  ],
  templateUrl: './ws-connectors.component.html',
  styleUrl:    './ws-connectors.component.scss',
})
export class WsConnectorsComponent implements OnInit {

  projectId = 0;
  loading   = signal(true);
  error     = signal('');

  connectors     = signal<Connector[]>([]);
  activeCategory = signal('DATABASE');

  editOpen      = signal(false);
  editConnector = signal<Connector | null>(null);
  editConfig    = signal<Record<string, any>>({});
  editEnabled   = signal(false);
  editSaving    = signal(false);
  editError     = signal('');
  editShowPass: Record<string, boolean> = {};

  testRunning = signal<string | null>(null);
  testResult  = signal<{ key: string; status: string; message: string } | null>(null);

  readonly categories    = Object.entries(CATEGORY_META).map(([id, m]) => ({ id, ...m }));
  readonly categoryMeta  = CATEGORY_META;

  categorized = computed(() =>
    this.connectors().filter(c => c.Category === this.activeCategory())
  );

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient,
  ) {}

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.http.get<{ success: boolean; data: Connector[] }>(
      `/api/connectors?scope=PROJECT&projectId=${this.projectId}`
    ).subscribe({
      next: r  => { this.connectors.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת חיבורים'); this.loading.set(false); },
    });
  }

  openEdit(c: Connector) {
    this.editError.set('');
    this.editShowPass = {};
    this.http.get<{ success: boolean; data: any }>(
      `/api/connectors/${c.ConnectorKey}?scope=PROJECT&projectId=${this.projectId}`
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

  toggleShow(key: string) { this.editShowPass[key] = !this.editShowPass[key]; }

  saveEdit() {
    const c = this.editConnector();
    if (!c) return;
    this.editSaving.set(true);
    this.editError.set('');
    this.http.put<{ success: boolean; message: string }>(
      `/api/connectors/${c.ConnectorKey}?scope=PROJECT&projectId=${this.projectId}`,
      { config: this.editConfig(), isEnabled: this.editEnabled(), projectId: this.projectId }
    ).subscribe({
      next: () => { this.editSaving.set(false); this.closeEdit(); this.load(); },
      error: err => { this.editSaving.set(false); this.editError.set(err.error?.message ?? 'שגיאה בשמירה'); },
    });
  }

  testConnection(c: Connector, fromDialog = false) {
    this.testRunning.set(c.ConnectorKey);
    this.testResult.set(null);
    this.http.post<{ success: boolean; data: { status: string; message: string } }>(
      `/api/connectors/${c.ConnectorKey}/test?scope=PROJECT&projectId=${this.projectId}`,
      { projectId: this.projectId }
    ).subscribe({
      next: r => {
        this.testRunning.set(null);
        this.testResult.set({ key: c.ConnectorKey, ...r.data });
        this.load();
      },
      error: err => {
        this.testRunning.set(null);
        this.testResult.set({ key: c.ConnectorKey, status: 'FAIL', message: err.error?.message ?? 'שגיאה' });
      },
    });
  }

  statusClass(s: string | null): string {
    return { OK: 'status-ok', FAIL: 'status-fail', PENDING: 'status-pending' }[s ?? ''] ?? 'status-none';
  }

  statusLabel(s: string | null): string {
    return { OK: '✓ תקין', FAIL: '✗ כשל', PENDING: '⏳ ממתין' }[s ?? ''] ?? 'לא נבדק';
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('he-IL', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit',
    });
  }

  catCount(id: string)        { return this.connectors().filter(c => c.Category === id).length; }
  catEnabledCount(id: string) { return this.connectors().filter(c => c.Category === id && c.IsEnabled).length; }

  back() { this.router.navigate(['/app/projects', this.projectId]); }
}
