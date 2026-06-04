import { Component, Output, EventEmitter } from '@angular/core';
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
export class OrgDialogComponent {

  @Output() saved = new EventEmitter<void>();

  visible  = false;
  saving   = false;
  errorMsg = '';
  form!: FormGroup;

  private _org: Organization | null = null;

  plans = [
    { label: 'בסיסי',    value: 'basic' },
    { label: 'מקצועי',   value: 'pro' },
    { label: 'ארגוני',   value: 'enterprise' },
  ];

  get isEdit() { return !!this._org; }
  get title()  { return this.isEdit ? `עריכת ארגון — ${this._org!.CompanyName}` : 'ארגון חדש'; }

  constructor(private fb: FormBuilder, private svc: OrganizationService) {}

  // ── API ציבורי שההורה קורא ──────────────────────────
  open(org: Organization | null = null) {
    this._org     = org;
    this.errorMsg = '';
    this.saving   = false;
    this.buildForm();
    this.visible  = true;
  }

  close() { this.visible = false; }

  // ── בניית טופס ────────────────────────────────────────
  private buildForm() {
    if (this._org) {
      const o = this._org;
      this.form = this.fb.group({
        companyName: [o.CompanyName,    [Validators.required, Validators.maxLength(150)]],
        email:       [o.Email,          [Validators.required, Validators.email]],
        phone:       [o.Phone ?? ''],
        planType:    [o.PlanType,       Validators.required],
        maxUsers:    [o.MaxUsers,       [Validators.required, Validators.min(1)]],
        maxTickets:  [o.MaxTickets,     [Validators.required, Validators.min(1)]],
        isActive:    [o.IsActive],
        notes:       [o.Notes ?? ''],
      });
    } else {
      this.form = this.fb.group({
        tenantCode:  ['', [Validators.required, Validators.pattern(/^[A-Z]{3}_[0-9]+$/)]],
        companyName: ['', [Validators.required, Validators.maxLength(150)]],
        email:       ['', [Validators.required, Validators.email]],
        phone:       [''],
        planType:    ['basic', Validators.required],
        maxUsers:    [10,  [Validators.required, Validators.min(1)]],
        maxTickets:  [200, [Validators.required, Validators.min(1)]],
        notes:       [''],
      });
    }
  }

  // uppercase בזמן הקלדת קוד ארגון
  onTenantCodeInput(event: Event) {
    const el  = event.target as HTMLInputElement;
    const val = el.value.toUpperCase();
    el.value  = val;
    this.form.get('tenantCode')?.setValue(val, { emitEvent: false });
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving   = true;
    this.errorMsg = '';

    const payload = { ...this.form.value };
    if (payload.tenantCode) payload.tenantCode = payload.tenantCode.toUpperCase();

    const obs = this.isEdit
      ? this.svc.update(this._org!.TenantID, payload)
      : this.svc.create(payload);

    obs.subscribe({
      next:  () => { this.saving = false; this.saved.emit(); this.close(); },
      error: err => { this.saving = false; this.errorMsg = err.error?.message ?? 'שגיאה בשמירה'; },
    });
  }
}
