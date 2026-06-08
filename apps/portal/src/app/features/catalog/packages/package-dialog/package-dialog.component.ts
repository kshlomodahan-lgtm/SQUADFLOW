import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SVGIconComponent } from '@progress/kendo-angular-icons';
import { gearIcon, listUnorderedSquareIcon, eyeIcon } from '@progress/kendo-svg-icons';
import { CatalogService } from '../../../../core/services/catalog.service';
import { Package, Product } from '../../../../core/models/catalog.model';

interface NavGroup { id: string; label: string; icon: any; }

@Component({
  selector: 'app-package-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    DialogModule, TextBoxModule, NumericTextBoxModule, ButtonsModule,
    SVGIconComponent,
  ],
  templateUrl: './package-dialog.component.html',
  styleUrl:    './package-dialog.component.scss',
})
export class PackageDialogComponent implements OnInit {
  @Input() pkg: Package | null = null;
  @Output() saved  = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  form!: FormGroup;
  saving          = signal(false);
  errorMsg        = '';
  allProducts     = signal<Product[]>([]);
  selectedIds     = new Set<number>();
  activeGroup     = signal('details');

  readonly groups: NavGroup[] = [
    { id: 'details',    label: 'פרטי חבילה', icon: gearIcon                },
    { id: 'products',   label: 'מוצרים',      icon: listUnorderedSquareIcon },
    { id: 'visibility', label: 'נראות וסטטוס', icon: eyeIcon               },
  ];

  get isEdit() { return !!this.pkg?.PackageID; }
  get title()  { return this.isEdit ? 'עריכת חבילה' : 'חבילה חדשה'; }

  constructor(private fb: FormBuilder, private svc: CatalogService) {}

  ngOnInit() {
    const p = this.pkg;
    this.form = this.fb.group({
      PackageCode:  [p?.PackageCode  ?? '', [Validators.required, Validators.maxLength(30)]],
      PackageName:  [p?.PackageName  ?? '', [Validators.required, Validators.maxLength(200)]],
      Description:  [p?.Description  ?? ''],
      PriceMonthly: [p?.PriceMonthly ?? 0,  [Validators.required, Validators.min(0)]],
      PriceAnnual:  [p?.PriceAnnual  ?? 0,  Validators.min(0)],
      SetupFee:     [p?.SetupFee     ?? 0,  Validators.min(0)],
      TrialDays:    [p?.TrialDays    ?? 0,  Validators.min(0)],
      MaxUsers:     [p?.MaxUsers     ?? null],
      IsPublic:     [p?.IsPublic     ?? true],
      IsActive:     [p?.IsActive     ?? true],
      SortOrder:    [p?.SortOrder    ?? 0],
    });

    this.loadProducts();
  }

  loadProducts() {
    this.svc.getProducts().subscribe({
      next: r => {
        this.allProducts.set(r.data);
        if (this.isEdit && this.pkg?.PackageID) {
          this.svc.getPackage(this.pkg.PackageID).subscribe({
            next: pr => {
              (pr.data.Products ?? []).forEach(pp => {
                if (pp.IsIncluded) this.selectedIds.add(pp.ProductID);
              });
            },
          });
        }
      },
    });
  }

  toggleProduct(id: number) {
    if (this.selectedIds.has(id)) this.selectedIds.delete(id);
    else                          this.selectedIds.add(id);
  }

  isSelected(id: number) { return this.selectedIds.has(id); }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.activeGroup.set('details');
      this.errorMsg = 'יש שדות חובה שלא מולאו';
      return;
    }
    this.saving.set(true);
    this.errorMsg = '';
    const payload = {
      ...this.form.value,
      PackageID:  this.pkg?.PackageID ?? 0,
      ProductIDs: Array.from(this.selectedIds),
    };
    this.svc.savePackage(payload).subscribe({
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
