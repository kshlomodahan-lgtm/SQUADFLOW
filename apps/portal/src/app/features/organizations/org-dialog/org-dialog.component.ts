import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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

    // preview מיידי
    const reader = new FileReader();
    reader.onload = e => this.logoPreview = e.target?.result as string;
    reader.readAsDataURL(file);

    // העלאה לשרת
    this.uploading = true;
    this.upload.uploadLogo(file).subscribe({
      next: r => {
        this.uploading = false;
        if (r.success) {
          this.form.get('logoUrl')?.setValue(r.logoUrl);
        }
      },
      error: () => {
        this.uploading = false;
        this.errorMsg = 'שגיאה בהעלאת הלוגו';
      },
    });
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
