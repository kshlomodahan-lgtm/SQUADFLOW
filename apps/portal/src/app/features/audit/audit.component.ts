import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { GridModule, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuditService, AuditLogItem, AuditFilter } from '../../core/services/audit.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink,
    GridModule, DatePickerModule, DropDownListModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
  ],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss',
})
export class AuditComponent implements OnInit {
  @ViewChild(GridComponent) grid!: GridComponent;

  loading = signal(true);
  error   = signal('');
  items   = signal<AuditLogItem[]>([]);
  total   = signal(0);

  skip     = 0;
  pageSize = 25;

  dateFrom: Date | null = null;
  dateTo:   Date | null = null;
  selectedActionType = '';
  selectedEntityType = '';
  selectedSeverity   = '';
  searchText         = '';

  actionTypeOptions = signal<{ code: string; name: string }[]>([]);
  entityTypeOptions = signal<{ code: string; name: string }[]>([]);

  readonly severityOptions = [
    { text: 'All',      value: ''         },
    { text: 'INFO',     value: 'INFO'     },
    { text: 'WARN',     value: 'WARN'     },
    { text: 'LOW',      value: 'LOW'      },
    { text: 'MEDIUM',   value: 'MEDIUM'   },
    { text: 'HIGH',     value: 'HIGH'     },
    { text: 'CRITICAL', value: 'CRITICAL' },
  ];

  isSuperAdmin = signal(false);

  constructor(private svc: AuditService, private auth: AuthService) {
    this.isSuperAdmin.set(this.auth.user()?.roleId === 1);
  }

  ngOnInit() {
    this.loadDropdowns();
    this.loadData();
  }

  loadDropdowns() {
    this.svc.getActionTypes().subscribe({
      next: r => this.actionTypeOptions.set([
        { code: '', name: 'כל הפעולות' },
        ...r.data.map(a => ({ code: a.ActionTypeCode, name: a.ActionTypeName })),
      ]),
    });
    this.svc.getEntityTypes().subscribe({
      next: r => this.entityTypeOptions.set([
        { code: '', name: 'כל היישויות' },
        ...r.data.map(e => ({ code: e.EntityTypeCode, name: e.EntityTypeName })),
      ]),
    });
  }

  loadData() {
    this.loading.set(true);
    this.error.set('');

    const filter: AuditFilter = {
      dateFrom:   this.dateFrom ? this.dateFrom.toISOString() : null,
      dateTo:     this.dateTo   ? this.dateTo.toISOString()   : null,
      actionType: this.selectedActionType || null,
      entityType: this.selectedEntityType || null,
      severity:   this.selectedSeverity   || null,
      search:     this.searchText         || null,
      page:       Math.floor(this.skip / this.pageSize) + 1,
      pageSize:   this.pageSize,
    };

    this.svc.getList(filter).subscribe({
      next: r => {
        this.items.set(r.data ?? []);
        this.total.set(r.total ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('שגיאה בטעינת יומן פעילות');
        this.loading.set(false);
      },
    });
  }

  onPageChange(e: PageChangeEvent) {
    this.skip     = e.skip;
    this.pageSize = e.take;
    this.loadData();
  }

  onFilterChange() {
    this.skip = 0;
    this.loadData();
  }

  onSearch(value: string) {
    this.searchText = value;
    this.skip = 0;
    this.loadData();
  }

  clearFilters() {
    this.dateFrom          = null;
    this.dateTo            = null;
    this.selectedActionType = '';
    this.selectedEntityType = '';
    this.selectedSeverity   = '';
    this.searchText         = '';
    this.skip               = 0;
    this.loadData();
  }

  severityClass(s: string): string {
    return ({ INFO: 'sev-info', WARN: 'sev-warn', LOW: 'sev-low', MEDIUM: 'sev-medium', HIGH: 'sev-high', CRITICAL: 'sev-critical' } as any)[s] ?? 'sev-info';
  }

  severityLabel(s: string): string { return s || 'INFO'; }

  formatJson(val: string | null): string {
    if (!val) return '';
    try { return JSON.stringify(JSON.parse(val), null, 2); }
    catch { return val; }
  }

  expandedIds = new Set<number>();

  toggleDetail(item: AuditLogItem, rowIndex: number) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(item.AuditID)) {
      this.grid.collapseRow(abs);
      this.expandedIds.delete(item.AuditID);
    } else {
      this.grid.expandRow(abs);
      this.expandedIds.add(item.AuditID);
    }
  }

  isExpanded(id: number) { return this.expandedIds.has(id); }

  hasValues(item: AuditLogItem): boolean {
    return !!(item.OldValue || item.NewValue);
  }
}
