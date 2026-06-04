import { Component, Input, Output, EventEmitter, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { Organization } from '../../../core/models/organization.model';
import { OrganizationService } from '../../../core/services/organization.service';
import { UploadService } from '../../../core/services/upload.service';

@Component({
  selector: 'app-org-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    DialogModule, InputTextModule, SelectModule,
    InputNumberModule, TextareaModule, ToggleSwitchModule,
    ButtonModule, MessageModule,
  ],
  templateUrl: './org-dialog.component.html',
  styleUrl:    './org-dialog.component.scss',
})
export class OrgDialogComponent implements OnInit {

  // הקומפוננטה נוצרת מחדש בכל פתיחה — ngOnInit בונה טופס נקי
  @Input()  org: Organization | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved  = new EventEmitter<void>();

  visible    = true;
  saving     = false;
  uploading  = false;
  errorMsg   = '';
  form!: FormGroup;
  logoPreview: string | null = null;

  plans = [
    { label: 'בסיסי',    value: 'basic' },
    { label: 'מקצועי',   value: 'pro' },
    { label: 'ארגוני',   value: 'enterprise' },
  ];

  get isEdit() { return !!this.org; }
  get title()  { return this.isEdit ? `עריכת ארגון — ${this.org!.CompanyName}` : 'ארגון חדש'; }

  constructor(
    private fb:     FormBuilder,
    private svc:    OrganizationService,
    private upload: UploadService,
    private zone:   NgZone,
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    if (this.isEdit) {
      const o = this.org!;
      this.logoPreview = o.LogoUrl || null;
      this.form = this.fb.group({
        companyName: [o.CompanyName,    [Validators.required, Validators.maxLength(150)]],
        email:       [o.Email,          [Validators.required, Validators.email]],
        phone:       [o.Phone ?? ''],
        planType:    [o.PlanType,       Validators.required],
        maxUsers:    [o.MaxUsers,       [Validators.required, Validators.min(1)]],
        maxTickets:  [o.MaxTickets,     [Validators.required, Validators.min(1)]],
        isActive:    [o.IsActive],
        logoUrl:     [o.LogoUrl ?? ''],
        notes:       [o.Notes ?? ''],
      });
    } else {
      this.logoPreview = null;
      this.form = this.fb.group({
        tenantCode:  ['', [Validators.required, Validators.pattern(/^[A-Z]{3}_[0-9]+$/)]],
        companyName: ['', [Validators.required, Validators.maxLength(150)]],
        email:       ['', [Validators.required, Validators.email]],
        phone:       [''],
        planType:    ['basic', Validators.required],
        maxUsers:    [10,  [Validators.required, Validators.min(1)]],
        maxTickets:  [200, [Validators.required, Validators.min(1)]],
        logoUrl:     [''],
        notes:       [''],
      });
    }
  }

  onLogoSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.uploading = true;
    this.errorMsg  = '';

    // כיווץ תמונה לפני העלאה — Canvas resize ל-max 300px
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

          // הכל בתוך zone — Angular מזהה שינויים מיד
          this.zone.run(() => {
            this.logoPreview = dataUrl;
            this.upload.uploadLogo(compressed).subscribe({
              next: r => {
                this.uploading = false;
                if (r.success) this.form.get('logoUrl')?.setValue(r.logoUrl);
              },
              error: () => { this.uploading = false; this.errorMsg = 'שגיאה בהעלאת הלוגו'; },
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

  close() {
    this.visible = false;
    this.closed.emit();
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
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
