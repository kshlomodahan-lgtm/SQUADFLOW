import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuditService, AuditEntityType } from '../../../core/services/audit.service';

@Component({
  selector: 'app-audit-entity-types',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterLink,
    GridModule, DialogModule, TextBoxModule, NumericTextBoxModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
  ],
  templateUrl: './audit-entity-types.component.html',
  styleUrl: './audit-entity-types.component.scss',
})
export class AuditEntityTypesComponent implements OnInit {
  loading = signal(true);
  error   = signal('');
  saving  = signal(false);
  saveError = signal('');

  items    = signal<AuditEntityType[]>([]);
  gridData: AuditEntityType[] = [];

  skip     = 0;
  pageSize = 50;
  sort: SortDescriptor[] = [{ field: 'SortOrder', dir: 'asc' }];
  searchTerm = '';

  dialogOpen  = signal(false);
  editingItem = signal<AuditEntityType | null>(null);
  form!: FormGroup;

  constructor(private svc: AuditService, private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.load();
  }

  buildForm() {
    this.form = this.fb.group({
      entityTypeCode: ['', [Validators.required, Validators.maxLength(50)]],
      entityTypeName: ['', [Validators.required, Validators.maxLength(100)]],
      moduleName:     ['', Validators.maxLength(100)],
      sortOrder:      [0],
      isActive:       [true],
    });
  }

  load() {
    this.loading.set(true);
    this.svc.getEntityTypes().subscribe({
      next: r => {
        this.items.set(r.data);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת סוגי יישויות'); this.loading.set(false); },
    });
  }

  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q
      ? this.items().filter(i => i.EntityTypeCode.toLowerCase().includes(q) || i.EntityTypeName.toLowerCase().includes(q))
      : [...this.items()];
    this.gridData = orderBy(filtered, this.sort) as AuditEntityType[];
    this.skip = 0;
  }

  onSearch(val: string) { this.searchTerm = val; this.applyFilter(); }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.applyFilter(); }
  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }

  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }

  openAdd() {
    this.editingItem.set(null);
    this.form.reset({ entityTypeCode: '', entityTypeName: '', moduleName: '', sortOrder: 0, isActive: true });
    this.saveError.set('');
    this.dialogOpen.set(true);
  }

  openEdit(item: AuditEntityType) {
    if (item.IsPlatform) return;
    this.editingItem.set(item);
    this.form.patchValue({
      entityTypeCode: item.EntityTypeCode,
      entityTypeName: item.EntityTypeName,
      moduleName:     item.ModuleName || '',
      sortOrder:      item.SortOrder,
      isActive:       item.IsActive,
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
      ? this.svc.updateEntityType(editing.EntityTypeID, data)
      : this.svc.createEntityType(data);

    obs.subscribe({
      next: r => {
        if (r.success) { this.closeDialog(); this.load(); }
        else this.saveError.set(r.message || 'שגיאה בשמירה');
        this.saving.set(false);
      },
      error: () => { this.saveError.set('שגיאת שרת'); this.saving.set(false); },
    });
  }
}
