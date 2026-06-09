import { Component, Input, Output, EventEmitter, OnInit, NgZone, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { TextBoxModule, NumericTextBoxModule, SwitchModule, TextAreaModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { SVGIcon, buildingsIcon, userIcon, homeIcon, checkCircleIcon, walletIcon, pencilIcon, globeIcon } from '@progress/kendo-svg-icons';

import { Organization } from '../../../core/models/organization.model';
import { OrganizationService } from '../../../core/services/organization.service';
import { UploadService } from '../../../core/services/upload.service';
import { ReferenceService, Country, Language, Currency } from '../../../core/services/reference.service';

interface NavGroup { id: string; text: string; icon: SVGIcon; }

@Component({
  selector: 'app-org-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    DialogsModule, TextBoxModule, NumericTextBoxModule, SwitchModule, TextAreaModule,
    DropDownListModule, ButtonsModule, IndicatorsModule, IconsModule,
  ],
  templateUrl: './org-dialog.component.html',
  styleUrl:    './org-dialog.component.scss',
})
export class OrgDialogComponent implements OnInit {

  @Input()  org: Organization | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved  = new EventEmitter<void>();

  saving     = false;
  uploading  = false;
  errorMsg   = '';
  form!: FormGroup;
  logoPreview: string | null = null;
  activeGroup = signal('general');

  countries  = signal<Country[]>([]);
  languages  = signal<Language[]>([]);
  currencies = signal<Currency[]>([]);

  plans = [
    { label: 'בסיסי',   value: 'basic'      },
    { label: 'מקצועי',  value: 'pro'        },
    { label: 'ארגוני',  value: 'enterprise' },
  ];

  readonly groups: NavGroup[] = [
    { id: 'general', text: 'פרטי ארגון',    icon: buildingsIcon   },
    { id: 'contact', text: 'פרטי קשר',      icon: userIcon        },
    { id: 'address', text: 'כתובת',         icon: homeIcon        },
    { id: 'locale',  text: 'שפה ומטבע',     icon: globeIcon       },
    { id: 'plan',    text: 'מנוי ומגבלות', icon: checkCircleIcon },
    { id: 'bank',    text: 'פרטי חיוב',     icon: walletIcon      },
    { id: 'notes',   text: 'הערות',         icon: pencilIcon      },
  ];

  get isEdit() { return !!this.org; }
  get title()  { return this.isEdit ? `עריכת ארגון — ${this.org!.CompanyName}` : 'ארגון חדש'; }

  constructor(
    private fb:     FormBuilder,
    private svc:    OrganizationService,
    private upload: UploadService,
    private zone:   NgZone,
    private cdr:    ChangeDetectorRef,
    private refSvc: ReferenceService,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.loadReferenceData();
  }

  private loadReferenceData() {
    this.refSvc.getCountries('he').subscribe(c  => this.countries.set(c));
    this.refSvc.getLanguages().subscribe(l       => this.languages.set(l));
    this.refSvc.getCurrencies().subscribe(c      => this.currencies.set(c));
  }

  private buildForm() {
    const o = this.org;
    if (o) {
      this.logoPreview = o.LogoUrl || null;
      this.form = this.fb.group({
        companyName:    [o.CompanyName,         [Validators.required, Validators.maxLength(150)]],
        businessNumber: [o.BusinessNumber  ?? ''],
        email:          [o.Email,               [Validators.required, Validators.email]],
        phone:          [o.Phone          ?? ''],
        phone2:         [o.Phone2         ?? ''],
        fax:            [o.Fax            ?? ''],
        website:        [o.Website        ?? ''],
        contactName:    [o.ContactName    ?? ''],
        address:        [o.Address        ?? ''],
        city:           [o.City           ?? ''],
        country:        [o.Country        ?? 'ישראל'],
        planType:       [o.PlanType,            Validators.required],
        maxUsers:       [o.MaxUsers,            [Validators.required, Validators.min(1)]],
        maxTickets:     [o.MaxTickets,          [Validators.required, Validators.min(1)]],
        isActive:       [o.IsActive],
        logoUrl:        [o.LogoUrl        ?? ''],
        bankName:            [o.BankName            ?? ''],
        bankBranch:          [o.BankBranch          ?? ''],
        bankAccount:         [o.BankAccount         ?? ''],
        accountingRef:       [o.AccountingRef       ?? ''],
        notes:               [o.Notes               ?? ''],
        countryCode:         [o.CountryCode         ?? 'IL'],
        defaultLanguageCode: [o.DefaultLanguageCode ?? 'he'],
        defaultCurrencyCode: [o.DefaultCurrencyCode ?? 'ILS'],
      });
    } else {
      this.form = this.fb.group({
        tenantCode:     ['', [Validators.required, Validators.pattern(/^[A-Z]{3}_[0-9]+$/)]],
        companyName:    ['', [Validators.required, Validators.maxLength(150)]],
        businessNumber: [''],
        email:          ['', [Validators.required, Validators.email]],
        phone:          [''],
        phone2:         [''],
        fax:            [''],
        website:        [''],
        contactName:    [''],
        address:        [''],
        city:           [''],
        country:        ['ישראל'],
        planType:       ['basic', Validators.required],
        maxUsers:       [10,  [Validators.required, Validators.min(1)]],
        maxTickets:     [200, [Validators.required, Validators.min(1)]],
        logoUrl:        [''],
        bankName:            [''],
        bankBranch:          [''],
        bankAccount:         [''],
        accountingRef:       [''],
        notes:               [''],
        countryCode:         ['IL'],
        defaultLanguageCode: ['he'],
        defaultCurrencyCode: ['ILS'],
      });
    }
  }

  onLogoSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.uploading = true;
    this.errorMsg  = '';
    const img    = new Image();
    const reader = new FileReader();
    reader.onload = ev => {
      img.onload = () => {
        const MAX = 300;
        let w = img.width, h = img.height;
        if (w > MAX || h > MAX) {
          if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
          else       { w = Math.round(w * MAX / h); h = MAX; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d')!.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/png', 0.85);
        canvas.toBlob(blob => {
          if (!blob) { this.zone.run(() => { this.uploading = false; }); return; }
          const compressed = new File([blob], file.name, { type: 'image/png' });
          this.zone.run(() => {
            this.logoPreview = dataUrl;
            this.cdr.detectChanges();
            this.upload.uploadLogo(compressed).subscribe({
              next: r => {
                this.uploading = false;
                if (r.success) this.form.get('logoUrl')?.setValue(r.logoUrl);
                this.cdr.detectChanges();
              },
              error: () => {
                this.uploading = false;
                this.errorMsg  = 'שגיאה בהעלאת הלוגו';
                this.cdr.detectChanges();
              },
            });
          });
        }, 'image/png', 0.85);
      };
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  removeLogo() {
    this.logoPreview = null;
    this.form.get('logoUrl')?.setValue('');
  }

  onTenantCodeInput(event: Event) {
    const el  = event.target as HTMLInputElement;
    const val = el.value.toUpperCase();
    el.value  = val;
    this.form.get('tenantCode')?.setValue(val, { emitEvent: false });
  }

  close() { this.closed.emit(); }

  private readonly groupFields: Record<string, string[]> = {
    general: ['tenantCode', 'companyName', 'businessNumber'],
    contact: ['contactName', 'email', 'phone', 'phone2', 'fax', 'website'],
    address: ['countryCode', 'city', 'address'],
    locale:  ['defaultLanguageCode', 'defaultCurrencyCode'],
    plan:    ['planType', 'maxUsers', 'maxTickets', 'isActive'],
    bank:    ['bankName', 'bankBranch', 'bankAccount', 'accountingRef'],
    notes:   ['notes'],
  };

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
    this.saving   = true;
    this.errorMsg = '';
    const payload = { ...this.form.value };
    if (payload.tenantCode) payload.tenantCode = payload.tenantCode.toUpperCase();
    const obs = this.isEdit
      ? this.svc.update(this.org!.TenantID, payload)
      : this.svc.create(payload);
    obs.subscribe({
      next:  () => { this.saving = false; this.saved.emit(); this.close(); },
      error: err => { this.saving = false; this.errorMsg = err.error?.message ?? 'שגיאה בשמירה'; },
    });
  }
}
