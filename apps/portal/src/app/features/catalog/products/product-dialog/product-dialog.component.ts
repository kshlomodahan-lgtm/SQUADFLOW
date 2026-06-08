import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SVGIconComponent } from '@progress/kendo-angular-icons';
import {
  gearIcon, dollarIcon, lockIcon, eyeIcon, infoCircleIcon
} from '@progress/kendo-svg-icons';
import { CatalogService } from '../../../../core/services/catalog.service';
import { Product, ProductCategory } from '../../../../core/models/catalog.model';

interface NavGroup { id: string; label: string; icon: any; }

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    DialogModule, TextBoxModule, NumericTextBoxModule, DropDownListModule, ButtonsModule,
    SVGIconComponent,
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl:    './product-dialog.component.scss',
})
export class ProductDialogComponent implements OnInit {
  @Input() product: Product | null = null;
  @Output() saved  = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  form!: FormGroup;
  saving      = signal(false);
  errorMsg    = '';
  categories  = signal<ProductCategory[]>([]);
  activeGroup = signal('general');

  readonly groups: NavGroup[] = [
    { id: 'general',  label: 'כללי',        icon: gearIcon      },
    { id: 'pricing',  label: 'תמחור',       icon: dollarIcon    },
    { id: 'limits',   label: 'הגבלות',      icon: lockIcon      },
    { id: 'display',  label: 'תצוגה',       icon: eyeIcon       },
    { id: 'details',  label: 'מידע נוסף',   icon: infoCircleIcon },
  ];

  readonly pricingOptions = [
    { value: 'FLAT',     text: 'מחיר קבוע' },
    { value: 'PER_USER', text: 'לפי משתמש' },
    { value: 'USAGE',    text: 'לפי שימוש' },
    { value: 'FREE',     text: 'חינמי' },
  ];
  readonly deploymentOptions = [
    { value: 'CLOUD',      text: 'ענן' },
    { value: 'ON_PREMISE', text: 'שרת מקומי' },
    { value: 'HYBRID',     text: 'היברידי' },
  ];
  readonly statusOptions = [
    { value: 'DRAFT',      text: 'טיוטה' },
    { value: 'ACTIVE',     text: 'פעיל' },
    { value: 'DEPRECATED', text: 'מיושן' },
  ];

  private readonly groupFields: Record<string, string[]> = {
    general:  ['ProductCode', 'ProductName', 'CategoryID', 'ProductStatus', 'IsPublic', 'IsActive', 'ShortDescription'],
    pricing:  ['PricingModel', 'PriceMonthly', 'PriceAnnual', 'SetupFee', 'TrialDays'],
    limits:   ['MaxUsers', 'MaxStorage_GB', 'MaxRecords', 'ApiCallsPerMonth'],
    display:  ['ColorHex', 'IconName', 'LogoUrl', 'SortOrder'],
    details:  ['DeploymentType', 'SupportedLanguages', 'DocumentationUrl', 'ProductVersion', 'Description'],
  };

  get isEdit() { return !!this.product?.ProductID; }
  get title()  { return this.isEdit ? 'עריכת מוצר' : 'מוצר חדש'; }

  constructor(private fb: FormBuilder, private svc: CatalogService) {}

  ngOnInit() {
    this.loadCategories();
    const p = this.product;
    this.form = this.fb.group({
      // General
      ProductCode:        [p?.ProductCode        ?? '',        [Validators.required, Validators.maxLength(30)]],
      ProductName:        [p?.ProductName        ?? '',        [Validators.required, Validators.maxLength(200)]],
      CategoryID:         [p?.CategoryID         ?? null],
      ProductStatus:      [p?.ProductStatus      ?? 'DRAFT',   Validators.required],
      IsPublic:           [p?.IsPublic           ?? true],
      IsActive:           [p?.IsActive           ?? true],
      ShortDescription:   [p?.ShortDescription   ?? '',        Validators.maxLength(255)],
      // Pricing
      PricingModel:       [p?.PricingModel       ?? 'FLAT'],
      PriceMonthly:       [p?.PriceMonthly       ?? 0,         [Validators.required, Validators.min(0)]],
      PriceAnnual:        [p?.PriceAnnual        ?? 0,         Validators.min(0)],
      SetupFee:           [p?.SetupFee           ?? 0,         Validators.min(0)],
      TrialDays:          [p?.TrialDays          ?? 0,         Validators.min(0)],
      // Limits
      MaxUsers:           [p?.MaxUsers           ?? null],
      MaxStorage_GB:      [p?.MaxStorage_GB      ?? null],
      MaxRecords:         [p?.MaxRecords         ?? null],
      ApiCallsPerMonth:   [p?.ApiCallsPerMonth   ?? null],
      // Display
      ColorHex:           [p?.ColorHex           ?? '#0D47FF'],
      IconName:           [p?.IconName           ?? ''],
      LogoUrl:            [p?.LogoUrl            ?? ''],
      SortOrder:          [p?.SortOrder          ?? 0],
      // Details
      DeploymentType:     [p?.DeploymentType     ?? 'CLOUD'],
      SupportedLanguages: [p?.SupportedLanguages ?? '["he","en"]'],
      DocumentationUrl:   [p?.DocumentationUrl   ?? ''],
      ProductVersion:     [p?.ProductVersion     ?? '1.0'],
      LaunchDate:         [p?.LaunchDate         ?? null],
      EndOfLifeDate:      [p?.EndOfLifeDate      ?? null],
      Description:        [p?.Description        ?? ''],
    });
  }

  loadCategories() {
    this.svc.getCategories().subscribe({
      next: r => this.categories.set(r.data),
    });
  }

  private navigateToFirstError() {
    for (const [group, fields] of Object.entries(this.groupFields)) {
      if (fields.some(f => this.form.get(f)?.invalid)) {
        this.activeGroup.set(group);
        return;
      }
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.navigateToFirstError();
      this.errorMsg = 'יש שדות חובה שלא מולאו';
      return;
    }
    this.saving.set(true);
    this.errorMsg = '';
    const payload = { ...this.form.value, ProductID: this.product?.ProductID ?? 0 };
    this.svc.saveProduct(payload).subscribe({
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
