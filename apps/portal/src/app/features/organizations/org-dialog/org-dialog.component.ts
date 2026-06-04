import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
export class OrgDialogComponent implements OnChanges {
  @Input()  visible  = false;
  @Input()  org: Organization | null = null;   // null = הוספה, אחרת = עדכון
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() saved         = new EventEmitter<void>();

  form!: FormGroup;
  saving  = false;
  errorMsg = '';

  plans = [
    { label: 'בסיסי',    value: 'basic' },
    { label: 'מקצועי',   value: 'pro' },
    { label: 'ארגוני',   value: 'enterprise' },
  ];

  get isEdit() { return !!this.org; }
  get title()  { return this.isEdit ? `עריכת ארגון — ${this.org!.CompanyName}` : 'ארגון חדש'; }

  constructor(private fb: FormBuilder, private svc: OrganizationService) {}

  ngOnChanges(ch: SimpleChanges) {
    if (ch['visible']?.currentValue === true) {
      this.errorMsg = '';
      this.saving   = false;
      this.buildForm();
    }
  }

  private buildForm() {
    if (this.isEdit) {
      const o = this.org!;
      this.form = this.fb.group({
        companyName: [o.CompanyName, [Validators.required, Validators.maxLength(150)]],
        email:       [o.Email,       [Validators.required, Validators.email]],
        phone:       [o.Phone],
        planType:    [o.PlanType,    Validators.required],
        maxUsers:    [o.MaxUsers,    [Validators.required, Validators.min(1)]],
        maxTickets:  [o.MaxTickets,  [Validators.required, Validators.min(1)]],
        isActive:    [o.IsActive],
        notes:       [o.Notes],
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

  close() {
    this.visibleChange.emit(false);
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving   = true;
    this.errorMsg = '';

    const obs = this.isEdit
      ? this.svc.update(this.org!.TenantID, this.form.value)
      : this.svc.create(this.form.value);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.saved.emit();
        this.close();
      },
      error: err => {
        this.saving   = false;
        this.errorMsg = err.error?.message ?? 'שגיאה בשמירה, נסה שנית';
      },
    });
  }
}
