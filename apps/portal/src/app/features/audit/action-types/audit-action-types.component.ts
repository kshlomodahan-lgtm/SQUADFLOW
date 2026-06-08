import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DialogModule, DialogRef } from '@progress/kendo-angular-dialog';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { TextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuditService, AuditActionType } from '../../../core/services/audit.service';

@Component({
  selector: 'app-audit-action-types',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterLink,
    GridModule, DialogModule, DropDownListModule, TextBoxModule, NumericTextBoxModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
  ],
  templateUrl: './audit-action-types.component.html',
  styleUrl: './audit-action-types.component.scss',
})
export class AuditActionTypesComponent implements OnInit {
  loading = signal(true);
  error   = signal('');
  saving  = signal(false);
  saveError = signal('');

  items    = signal<AuditActionType[]>([]);
  gridData: AuditActionType[] = [];

  skip     = 0;
  pageSize = 25;
  sort: SortDescriptor[] = [{ field: 'SortOrder', dir: 'asc' }];
  searchTerm = '';

  dialogOpen   = signal(false);
  editingItem  = signal<AuditActionType | null>(null);
  form!: FormGroup;

  readonly severities = [
    { text: 'INFO',     value: 'INFO'     },
    { text: 'LOW',      value: 'LOW'      },
    { text: 'MEDIUM',   value: 'MEDIUM'   },
    { text: 'HIGH',     value: 'HIGH'     },
    { text: 'CRITICAL', value: 'CRITICAL' },
  ];

  constructor(private svc: AuditService, private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.load();
  }

  buildForm() {
    this.form = this.fb.group({
      actionTypeCode:  ['', [Validators.required, Validators.maxLength(50)]],
      actionTypeName:  ['', [Validators.required, Validators.maxLength(100)]],
      defaultSeverity: ['INFO', Validators.required],
      badgeColor:      ['#64748b'],
      sortOrder:       [0],
      isActive:        [true],
    });
  }

  load() {
    this.loading.set(true);
    this.svc.getActionTypes().subscribe({
      next: r => {
        this.items.set(r.data);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת סוגי פעולות'); this.loading.set(false); },
    });
  }

  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q
      ? this.items().filter(i => i.ActionTypeCode.toLowerCase().includes(q) || i.ActionTypeName.toLowerCase().includes(q))
      : [...this.items()];
    this.gridData = orderBy(filtered, this.sort) as AuditActionType[];
    this.skip = 0;
  }

  onSearch(val: string) { this.searchTerm = val; this.applyFilter(); }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.applyFilter(); }
  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }

  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }

  openAdd() {
    this.editingItem.set(null);
    this.form.reset({ actionTypeCode: '', actionTypeName: '', defaultSeverity: 'INFO', badgeColor: '#64748b', sortOrder: 0, isActive: true });
    this.saveError.set('');
    this.dialogOpen.set(true);
  }

  openEdit(item: AuditActionType) {
    if (item.IsPlatform) return;
    this.editingItem.set(item);
    this.form.patchValue({
      actionTypeCode:  item.ActionTypeCode,
      actionTypeName:  item.ActionTypeName,
      defaultSeverity: item.DefaultSeverity,
      badgeColor:      item.BadgeColor,
      sortOrder:       item.SortOrder,
      isActive:        item.IsActive,
    });
    this.saveError.set('');
    this.dialogOpen.set(true);
  }

  closeDialog() { this.dialogOpen.set(false); }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.saveError.set('');

    const data = this.form.value;
    const editing = this.editingItem();
    const obs = editing
      ? this.svc.updateActionType(editing.ActionTypeID, data)
      : this.svc.createActionType(data);

    obs.subscribe({
      next: r => {
        if (r.success) { this.closeDialog(); this.load(); }
        else this.saveError.set(r.message || 'שגיאה בשמירה');
        this.saving.set(false);
      },
      error: () => { this.saveError.set('שגיאת שרת'); this.saving.set(false); },
    });
  }

  severityClass(s: string): string {
    return ({ INFO: 'sev-info', LOW: 'sev-low', MEDIUM: 'sev-medium', HIGH: 'sev-high', CRITICAL: 'sev-critical' } as any)[s] ?? 'sev-info';
  }
}
