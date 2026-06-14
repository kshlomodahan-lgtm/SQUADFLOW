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

import {
  CONNECTOR_CATALOG,
  ConnectorCategoryDef,
  ConnectorTypeDef,
  getCategoryById,
  getTypeByCode,
} from './connector-catalog';

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
  activeCategory = signal(CONNECTOR_CATALOG[0].id);

  deleteOpen       = signal(false);
  deleteConnector  = signal<Connector | null>(null);
  deleteInProgress = signal(false);

  editOpen      = signal(false);
  editConnector = signal<Connector | null>(null);
  editConfig    = signal<Record<string, any>>({});
  editEnabled   = signal(false);
  editAccessMode = signal<'PUBLIC'|'PRIVATE'|'APPROVAL_REQUIRED'>('APPROVAL_REQUIRED');
  editSaving    = signal(false);
  editError     = signal('');
  editShowPass: Record<string, boolean> = {};

  testRunning  = signal<string | null>(null);
  testResult   = signal<{ key: string; status: string; message: string } | null>(null);
  copiedToken  = signal<string | null>(null);
  editToken    = computed(() => this.editConnector()?.ConnectorToken ?? null);

  // ── 3-step Add Connector ──────────────────────────────────────
  addOpen       = signal(false);
  addStep       = signal<1 | 2 | 3>(1);
  addSelCat     = signal<ConnectorCategoryDef | null>(null);
  addSelType    = signal<ConnectorTypeDef | null>(null);
  addForm       = signal<Record<string, any>>({});
  addName       = signal('');
  addDesc       = signal('');
  addSaving     = signal(false);
  addError      = signal('');
  addShowPass: Record<string, boolean> = {};

  // catalog
  readonly catalog = CONNECTOR_CATALOG;

  // flat category list for tabs
  readonly categories = CONNECTOR_CATALOG.map(c => ({
    id: c.id, label: c.label, icon: c.icon, color: c.color,
  }));

  categorized = computed(() =>
    this.connectors().filter(c => c.Category === this.activeCategory())
  );

  activeCatDef = computed(() => getCategoryById(this.activeCategory()));

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

  // ── Edit existing connector ───────────────────────────────────

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
        this.editAccessMode.set((c as any).AccessMode || 'APPROVAL_REQUIRED');
        this.editOpen.set(true);
      },
      error: () => {
        this.editConnector.set(c);
        this.editConfig.set({});
        this.editEnabled.set(!!c.IsEnabled);
        this.editAccessMode.set((c as any).AccessMode || 'APPROVAL_REQUIRED');
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
    this.http.put(`/api/connector-access/connectors/${(c as any).ConnectorID}/access-mode`,
      { accessMode: this.editAccessMode() }
    ).subscribe();

    this.http.put<{ success: boolean; message: string }>(
      `/api/connectors/${c.ConnectorKey}?scope=PROJECT&projectId=${this.projectId}`,
      { config: this.editConfig(), isEnabled: this.editEnabled(), projectId: this.projectId }
    ).subscribe({
      next: () => { this.editSaving.set(false); this.closeEdit(); this.load(); },
      error: err => { this.editSaving.set(false); this.editError.set(err.error?.message ?? 'שגיאה בשמירה'); },
    });
  }

  // ── Test connection ───────────────────────────────────────────

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

  // ── Add Connector — 3-step dialog ────────────────────────────

  openAdd() {
    this.addStep.set(1);
    this.addSelCat.set(null);
    this.addSelType.set(null);
    this.addForm.set({});
    this.addName.set('');
    this.addDesc.set('');
    this.addError.set('');
    this.addShowPass = {};
    this.addOpen.set(true);
  }

  selectCat(cat: ConnectorCategoryDef) {
    this.addSelCat.set(cat);
    this.addSelType.set(null);
    this.addStep.set(2);
  }

  selectType(type: ConnectorTypeDef) {
    this.addSelType.set(type);
    const defaults: Record<string, any> = {};
    for (const f of type.fields) {
      if (f.default !== undefined) defaults[f.key] = f.type === 'boolean' ? (f.default === 'true') : f.default;
    }
    this.addForm.set(defaults);
    this.addName.set(type.typeName);
    this.addDesc.set(type.description ?? '');
    this.addStep.set(3);
  }

  getAddField(key: string): any { return this.addForm()[key] ?? ''; }

  setAddField(key: string, value: any) {
    this.addForm.update(f => ({ ...f, [key]: value }));
  }

  toggleAddShow(key: string) { this.addShowPass[key] = !this.addShowPass[key]; }

  backToStep(step: 1 | 2) { this.addStep.set(step); }

  saveAdd() {
    const type = this.addSelType();
    const cat  = this.addSelCat();
    if (!type || !cat) return;
    if (!this.addName().trim()) { this.addError.set('שם חיבור הוא שדה חובה'); return; }

    const requiredMissing = type.fields.filter(f => f.required && !this.getAddField(f.key));
    if (requiredMissing.length) {
      this.addError.set(`שדות חובה חסרים: ${requiredMissing.map(f => f.label).join(', ')}`);
      return;
    }

    this.addSaving.set(true);
    this.addError.set('');
    this.http.post<{ success: boolean; message: string }>(
      '/api/connectors',
      {
        connectorName: this.addName(),
        category:      cat.id,
        typeCode:      type.typeCode,
        iconEmoji:     type.icon,
        description:   this.addDesc(),
        config:        this.addForm(),
        projectId:     this.projectId,
      }
    ).subscribe({
      next: () => {
        this.addSaving.set(false);
        this.addOpen.set(false);
        this.activeCategory.set(cat.id);
        this.load();
      },
      error: err => {
        this.addSaving.set(false);
        this.addError.set(err.error?.message ?? 'שגיאה ביצירת חיבור');
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────

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
  catColor(id: string): string {
    return this.catalog.find(c => c.id === id)?.color ?? '#64748b';
  }

  copyToken(token: string) {
    navigator.clipboard.writeText(token).then(() => {
      this.copiedToken.set(token);
      setTimeout(() => this.copiedToken.set(null), 2000);
    });
  }

  confirmDelete(c: Connector) { this.deleteConnector.set(c); this.deleteOpen.set(true); }
  cancelDelete()  { this.deleteOpen.set(false); this.deleteConnector.set(null); }
  doDelete() {
    const c = this.deleteConnector();
    if (!c) return;
    this.deleteInProgress.set(true);
    this.http.delete<{ success: boolean; message: string }>(
      `/api/connectors/${c.ConnectorKey}?scope=PROJECT&projectId=${this.projectId}`
    ).subscribe({
      next: () => { this.deleteInProgress.set(false); this.cancelDelete(); this.load(); },
      error: err => { this.deleteInProgress.set(false); alert(err.error?.message ?? 'שגיאה במחיקה'); },
    });
  }

  back() { this.router.navigate(['/app/projects', this.projectId]); }
}
