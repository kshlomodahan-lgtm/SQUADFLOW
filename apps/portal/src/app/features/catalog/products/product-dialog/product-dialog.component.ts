import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule, MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
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
    DialogModule, TextBoxModule, NumericTextBoxModule,
    DropDownListModule, MultiSelectModule, DatePickerModule,
    ButtonsModule, SVGIconComponent,
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
    { id: 'general',  label: 'כללי',       icon: gearIcon       },
    { id: 'pricing',  label: 'תמחור',      icon: dollarIcon     },
    { id: 'limits',   label: 'הגבלות',     icon: lockIcon       },
    { id: 'display',  label: 'תצוגה',      icon: eyeIcon        },
    { id: 'details',  label: 'מידע נוסף',  icon: infoCircleIcon },
  ];

  readonly pricingOptions = [
    { value: 'FLAT',     text: 'מחיר קבוע'  },
    { value: 'PER_USER', text: 'לפי משתמש'  },
    { value: 'USAGE',    text: 'לפי שימוש'  },
    { value: 'FREE',     text: 'חינמי'       },
  ];
  readonly deploymentOptions = [
    { value: 'CLOUD',      text: 'ענן'          },
    { value: 'ON_PREMISE', text: 'שרת מקומי'   },
    { value: 'HYBRID',     text: 'היברידי'      },
  ];
  readonly statusOptions = [
    { value: 'DRAFT',      text: 'טיוטה'  },
    { value: 'ACTIVE',     text: 'פעיל'   },
    { value: 'DEPRECATED', text: 'מיושן'  },
  ];

  readonly languageOptions = [
    { value: 'he', text: 'עברית'            },
    { value: 'en', text: 'English'           },
    { value: 'ar', text: 'العربية'           },
    { value: 'ru', text: 'Русский'           },
    { value: 'fr', text: 'Français'          },
    { value: 'de', text: 'Deutsch'           },
    { value: 'es', text: 'Español'           },
    { value: 'it', text: 'Italiano'          },
    { value: 'pt', text: 'Português'         },
    { value: 'zh', text: '中文'              },
    { value: 'ja', text: '日本語'            },
    { value: 'ko', text: '한국어'            },
    { value: 'tr', text: 'Türkçe'           },
    { value: 'pl', text: 'Polski'            },
    { value: 'nl', text: 'Nederlands'        },
    { value: 'sv', text: 'Svenska'           },
    { value: 'da', text: 'Dansk'             },
    { value: 'fi', text: 'Suomi'             },
    { value: 'no', text: 'Norsk'             },
    { value: 'cs', text: 'Čeština'          },
    { value: 'hu', text: 'Magyar'            },
    { value: 'ro', text: 'Română'           },
    { value: 'uk', text: 'Українська'        },
    { value: 'el', text: 'Ελληνικά'         },
    { value: 'th', text: 'ภาษาไทย'          },
    { value: 'vi', text: 'Tiếng Việt'       },
    { value: 'id', text: 'Bahasa Indonesia'  },
    { value: 'ms', text: 'Bahasa Melayu'    },
    { value: 'hi', text: 'हिन्दी'            },
    { value: 'fa', text: 'فارسی'            },
  ];

  readonly dateFormat = 'dd/MM/yyyy';

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
      ProductCode:        [p?.ProductCode        ?? '',        [Validators.required, Validators.maxLength(30)]],
      ProductName:        [p?.ProductName        ?? '',        [Validators.required, Validators.maxLength(200)]],
      CategoryID:         [p?.CategoryID         ?? null],
      ProductStatus:      [p?.ProductStatus      ?? 'DRAFT',   Validators.required],
      IsPublic:           [p?.IsPublic           ?? true],
      IsActive:           [p?.IsActive           ?? true],
      ShortDescription:   [p?.ShortDescription   ?? '',        Validators.maxLength(255)],
      PricingModel:       [p?.PricingModel       ?? 'FLAT'],
      PriceMonthly:       [p?.PriceMonthly       ?? 0,         [Validators.required, Validators.min(0)]],
      PriceAnnual:        [p?.PriceAnnual        ?? 0,         Validators.min(0)],
      SetupFee:           [p?.SetupFee           ?? 0,         Validators.min(0)],
      TrialDays:          [p?.TrialDays          ?? 0,         Validators.min(0)],
      MaxUsers:           [p?.MaxUsers           ?? null],
      MaxStorage_GB:      [p?.MaxStorage_GB      ?? null],
      MaxRecords:         [p?.MaxRecords         ?? null],
      ApiCallsPerMonth:   [p?.ApiCallsPerMonth   ?? null],
      ColorHex:           [p?.ColorHex           ?? '#0D47FF'],
      IconName:           [p?.IconName           ?? ''],
      LogoUrl:            [p?.LogoUrl            ?? ''],
      SortOrder:          [p?.SortOrder          ?? 0],
      DeploymentType:     [p?.DeploymentType     ?? 'CLOUD'],
      SupportedLanguages: [this.parseLangs(p?.SupportedLanguages)],
      DocumentationUrl:   [p?.DocumentationUrl   ?? ''],
      ProductVersion:     [p?.ProductVersion     ?? '1.0'],
      LaunchDate:         [p?.LaunchDate    ? new Date(p.LaunchDate)    : null],
      EndOfLifeDate:      [p?.EndOfLifeDate ? new Date(p.EndOfLifeDate) : null],
      Description:        [p?.Description        ?? ''],
    });
  }

  private parseLangs(raw: string | undefined): string[] {
    if (!raw) return ['he'];
    try { return JSON.parse(raw) as string[]; }
    catch { return ['he']; }
  }

  private dateToStr(d: Date | null): string | null {
    if (!d) return null;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  loadCategories() {
    this.svc.getCategories().subscribe({ next: r => this.categories.set(r.data) });
  }

  private navigateToFirstError() {
    for (const [group, fields] of Object.entries(this.groupFields)) {
      if (fields.some(f => this.form.get(f)?.invalid)) { this.activeGroup.set(group); return; }
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
    const v = this.form.value;
    const payload = {
      ...v,
      ProductID:          this.product?.ProductID ?? 0,
      SupportedLanguages: JSON.stringify(v.SupportedLanguages || []),
      LaunchDate:         this.dateToStr(v.LaunchDate),
      EndOfLifeDate:      this.dateToStr(v.EndOfLifeDate),
    };
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
