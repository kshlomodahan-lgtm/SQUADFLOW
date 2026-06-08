import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule, DialogActionsComponent } from '@progress/kendo-angular-dialog';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CatalogService } from '../../../../core/services/catalog.service';
import { ProductCategory } from '../../../../core/models/catalog.model';

const COLORS = ['#0D47FF','#0891b2','#7c3aed','#059669','#e11d48','#d97706','#64748b'];

@Component({
  selector: 'app-category-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule, TextBoxModule, ButtonsModule],
  templateUrl: './category-dialog.component.html',
  styleUrl:    './category-dialog.component.scss',
})
export class CategoryDialogComponent implements OnInit {
  @Input() cat: ProductCategory | null = null;
  @Output() saved  = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  form!: FormGroup;
  saving   = signal(false);
  errorMsg = '';
  colors   = COLORS;

  get isEdit() { return !!this.cat?.CategoryID; }
  get title()  { return this.isEdit ? 'עריכת קטגוריה' : 'קטגוריה חדשה'; }

  constructor(private fb: FormBuilder, private svc: CatalogService) {}

  ngOnInit() {
    const c = this.cat;
    this.form = this.fb.group({
      CategoryCode: [c?.CategoryCode ?? '',  [Validators.required, Validators.maxLength(30)]],
      CategoryName: [c?.CategoryName ?? '',  [Validators.required, Validators.maxLength(100)]],
      ColorHex:     [c?.ColorHex    ?? '#0D47FF'],
      IconName:     [c?.IconName    ?? ''],
      SortOrder:    [c?.SortOrder   ?? 0],
      IsActive:     [c?.IsActive    ?? true],
    });
  }

  setColor(hex: string) { this.form.get('ColorHex')!.setValue(hex); }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.errorMsg = '';
    const payload = { ...this.form.value, CategoryID: this.cat?.CategoryID ?? 0 };
    this.svc.saveCategory(payload).subscribe({
      next: r => {
        this.saving.set(false);
        if (r.success) { this.saved.emit(); this.closed.emit(); }
        else this.errorMsg = r.message;
      },
      error: () => { this.saving.set(false); this.errorMsg = 'שגיאה בשמירה'; },
    });
  }

  close() { this.closed.emit(); }
}
