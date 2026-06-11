import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SVGIcon, buildingsIcon, userIcon, homeIcon, globeIcon, pencilIcon } from '@progress/kendo-svg-icons';
import { TextBoxModule, TextAreaModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';
import { ReferenceService, Country, Language, Currency } from '../../../core/services/reference.service';

interface NavSection { id: string; text: string; icon: SVGIcon; }

@Component({
  selector: 'app-org-settings',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    TextBoxModule, TextAreaModule, DropDownListModule,
    ButtonsModule, IndicatorsModule, IconsModule, NotificationModule,
    MatProgressSpinnerModule,
  ],
  providers: [NotificationService],
  templateUrl: './org-settings.component.html',
  styleUrl:    './org-settings.component.scss',
})
export class OrgSettingsComponent implements OnInit {

  loading  = signal(true);
  saving   = signal(false);
  error    = signal('');
  activeSection = signal('general');

  countries  = signal<Country[]>([]);
  languages  = signal<Language[]>([]);
  currencies = signal<Currency[]>([]);

  form!: FormGroup;

  readonly sections: NavSection[] = [
    { id: 'general', text: 'פרטי ארגון', icon: buildingsIcon },
    { id: 'contact', text: 'פרטי קשר',   icon: userIcon      },
    { id: 'address', text: 'כתובת',       icon: homeIcon      },
    { id: 'locale',  text: 'שפה ומטבע',  icon: globeIcon     },
    { id: 'notes',   text: 'הערות',       icon: pencilIcon    },
  ];

  constructor(
    private http:    HttpClient,
    private auth:    AuthService,
    private fb:      FormBuilder,
    private refSvc:  ReferenceService,
    private notif:   NotificationService,
  ) {}

  ngOnInit() {
    this.refSvc.getCountries('he').subscribe(c => this.countries.set(c));
    this.refSvc.getLanguages().subscribe(l  => this.languages.set(l));
    this.refSvc.getCurrencies().subscribe(c => this.currencies.set(c));
    this.load();
  }

  load() {
    const id = this.auth.user()?.tenantId;
    this.http.get<any>(`/api/tenants/${id}`).subscribe({
      next: r => {
        const o = r.tenant ?? r.data ?? r;
        this.form = this.fb.group({
          companyName:         [o.CompanyName         ?? '', [Validators.required, Validators.maxLength(150)]],
          businessNumber:      [o.BusinessNumber       ?? ''],
          website:             [o.Website              ?? ''],
          contactName:         [o.ContactName          ?? ''],
          email:               [o.Email                ?? '', [Validators.required, Validators.email]],
          phone:               [o.Phone                ?? ''],
          phone2:              [o.Phone2               ?? ''],
          fax:                 [o.Fax                  ?? ''],
          address:             [o.Address              ?? ''],
          city:                [o.City                 ?? ''],
          countryCode:         [o.CountryCode          ?? 'IL'],
          defaultLanguageCode: [o.DefaultLanguageCode  ?? 'he'],
          defaultCurrencyCode: [o.DefaultCurrencyCode  ?? 'ILS'],
          notes:               [o.Notes                ?? ''],
        });
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת פרטי הארגון'); this.loading.set(false); },
    });
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    const id = this.auth.user()?.tenantId;
    this.http.put<any>(`/api/tenants/${id}`, this.form.value).subscribe({
      next: () => {
        this.saving.set(false);
        this.notify('פרטי הארגון נשמרו בהצלחה', 'success');
      },
      error: err => {
        this.saving.set(false);
        this.notify(err.error?.message ?? 'שגיאה בשמירה', 'error');
      },
    });
  }

  private notify(msg: string, style: 'success' | 'error') {
    this.notif.show({
      content: msg, closable: true,
      type: { style, icon: true },
      animation: { type: 'slide', duration: 300 },
      position: { horizontal: 'center', vertical: 'top' },
    });
  }
}
