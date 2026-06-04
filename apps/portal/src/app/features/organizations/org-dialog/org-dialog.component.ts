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

  visible  = true;   // נפתח מיד עם יצירת הקומפוננטה
  saving   = false;
  errorMsg = '';
  form!: FormGroup;

  plans = [
    { label: 'בסיסי',    value: 'basic' },
    { label: 'מקצועי',   value: 'pro' },
    { label: 'ארגוני',   value: 'enterprise' },
  ];

  get isEdit() { return !!this.org; }
  get title()  { return this.isEdit ? `עריכת ארגון — ${this.org!.CompanyName}` : 'ארגון חדש'; }

  constructor(private fb: FormBuilder, private svc: OrganizationService) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    if (this.isEdit) {
      const o = this.org!;
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
