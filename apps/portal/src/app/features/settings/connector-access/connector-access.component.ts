import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

interface AccessRequest {
  RequestID:       number;
  ConnectorID:     number;
  ConnectorName:   string;
  ConnectorKey:    string;
  Category:        string;
  IconEmoji:       string;
  ConnectorToken:  string | null;
  CallerInfo:      { userId?: number; tenantId?: number; fullName?: string };
  RequestedAt:     string;
  Status:          string;
  ApprovedByUserID?: number;
  ApprovedAt?:     string;
  ExpiresAt?:      string;
  Notes?:          string;
}

@Component({
  selector: 'app-connector-access',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    GridModule, ButtonsModule, DialogsModule,
    IndicatorsModule, MatProgressSpinnerModule,
  ],
  templateUrl: './connector-access.component.html',
  styleUrl:    './connector-access.component.scss',
})
export class ConnectorAccessComponent implements OnInit {

  loading  = signal(true);
  error    = signal('');
  requests = signal<AccessRequest[]>([]);
  filter   = signal<'PENDING'|'APPROVED'|'DENIED'|'ALL'>('PENDING');

  sort: SortDescriptor[] = [{ field: 'RequestedAt', dir: 'desc' }];
  skip     = 0;
  pageSize = 10;

  actionInProgress = signal<number | null>(null);

  confirmOpen   = signal(false);
  confirmItem   = signal<AccessRequest | null>(null);
  confirmAction = signal<'approve'|'deny'>('approve');
  confirmNotes  = signal('');

  readonly filters: { id: 'PENDING'|'APPROVED'|'DENIED'|'ALL'; label: string }[] = [
    { id: 'PENDING',  label: 'ממתין לאישור' },
    { id: 'APPROVED', label: 'מאושר' },
    { id: 'DENIED',   label: 'נדחה' },
    { id: 'ALL',      label: 'הכל' },
  ];

  sorted  = computed(() => orderBy(this.requests(), this.sort));
  paged   = computed(() => this.sorted().slice(this.skip, this.skip + this.pageSize));

  constructor(private http: HttpClient) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.http.get<{ success: boolean; data: AccessRequest[] }>(
      `/api/connector-access/requests?status=${this.filter()}`
    ).subscribe({
      next:  r  => { this.requests.set(r.data ?? []); this.loading.set(false); this.skip = 0; },
      error: () => { this.error.set('שגיאה בטעינה'); this.loading.set(false); },
    });
  }

  setFilter(f: 'PENDING'|'APPROVED'|'DENIED'|'ALL') {
    this.filter.set(f);
    this.load();
  }

  onSortChange(s: SortDescriptor[]) { this.sort = s; }
  onPageChange(e: PageChangeEvent)  { this.skip = e.skip; }

  openConfirm(item: AccessRequest, action: 'approve'|'deny') {
    this.confirmItem.set(item);
    this.confirmAction.set(action);
    this.confirmNotes.set('');
    this.confirmOpen.set(true);
  }

  closeConfirm() { this.confirmOpen.set(false); this.confirmItem.set(null); }

  doAction() {
    const item   = this.confirmItem();
    const action = this.confirmAction();
    if (!item) return;

    this.actionInProgress.set(item.RequestID);
    this.closeConfirm();

    this.http.post(`/api/connector-access/requests/${item.RequestID}/${action}`,
      { notes: this.confirmNotes() }
    ).subscribe({
      next:  () => { this.actionInProgress.set(null); this.load(); },
      error: () => { this.actionInProgress.set(null); },
    });
  }

  statusLabel(s: string): string {
    return { PENDING: 'ממתין', APPROVED: 'מאושר', DENIED: 'נדחה', REVOKED: 'בוטל' }[s] ?? s;
  }

  statusClass(s: string): string {
    return { PENDING: 'badge-pending', APPROVED: 'badge-approved', DENIED: 'badge-denied', REVOKED: 'badge-revoked' }[s] ?? '';
  }

  formatDate(d: string | null | undefined): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('he-IL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  callerDisplay(c: AccessRequest['CallerInfo']): string {
    if (!c) return '—';
    return c.fullName || `User #${c.userId}`;
  }
}
