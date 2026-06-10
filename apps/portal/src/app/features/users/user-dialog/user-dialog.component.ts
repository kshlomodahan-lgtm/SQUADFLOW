import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Kendo
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { SVGIcon, userIcon, lockIcon, gearIcon } from '@progress/kendo-svg-icons';

import { UserService, UserRole } from '../../../core/services/user.service';
import { OrganizationService } from '../../../core/services/organization.service';
import { User } from '../../../core/models/user.model';

interface NavGroup { id: string; text: string; icon: SVGIcon; }

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    DialogsModule, InputsModule, DropDownsModule,
    ButtonsModule, IndicatorsModule, IconsModule,
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl:    './user-dialog.component.scss',
})
export class UserDialogComponent implements OnInit {
  @Input()  user: User | null = null;
  @Input()  isPlatform = false;
  @Output() closed = new EventEmitter<void>();
  @Output() saved  = new EventEmitter<void>();

  saving   = false;
  loading  = signal(true);
  errorMsg = '';
  form!: FormGroup;

  roles: UserRole[] = [];
  orgs:  { TenantID: number; CompanyName: string }[] = [];

  activeGroup = signal('details');

  readonly groups: NavGroup[] = [
    { id: 'details',  text: 'פרטים אישיים', icon: userIcon  },
    { id: 'role',     text: 'תפקיד ואבטחה', icon: lockIcon  },
    { id: 'settings', text: 'הגדרות',        icon: gearIcon  },
  ];

  private readonly groupFields: Record<string, string[]> = {
    details:  ['firstName', 'lastName', 'username', 'email', 'password', 'tenantId'],
    role:     ['roleId', 'newPassword'],
    settings: [],
  };

  get isEdit() { return !!this.user; }
  get title()  { return this.isEdit ? `עריכת משתמש — ${this.user!.FullName}` : 'משתמש חדש'; }

  constructor(
    private fb:      FormBuilder,
    private userSvc: UserService,
    private orgSvc:  OrganizationService,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.loadRoles();
    if (this.isPlatform && !this.isEdit) this.loadOrgs();
  }

  private buildForm() {
    if (this.isEdit) {
      const u = this.user!;
      this.form = this.fb.group({
        firstName:   [u.FirstName ?? '', [Validators.required, Validators.maxLength(100)]],
        lastName:    [u.LastName  ?? '', [Validators.required, Validators.maxLength(100)]],
        email:       [u.Email,           [Validators.required, Validators.email]],
        roleId:      [u.RoleID,          Validators.required],
        isActive:    [u.IsActive],
        newPassword: ['', [Validators.minLength(6)]],
      });
    } else {
      this.form = this.fb.group({
        tenantId:  [null, this.isPlatform ? Validators.required : []],
        firstName: ['', [Validators.required, Validators.maxLength(100)]],
        lastName:  ['', [Validators.required, Validators.maxLength(100)]],
        username:  ['', [Validators.required, Validators.maxLength(80), Validators.pattern(/^[a-zA-Z0-9._-]+$/)]],
        email:     ['', [Validators.required, Validators.email]],
        password:  ['', [Validators.required, Validators.minLength(6)]],
        roleId:    [2,  Validators.required],
      });
    }
  }

  private loadRoles() {
    this.userSvc.getRoles().subscribe({
      next: r => { this.roles = r.roles; this.checkLoading(); },
      error: () => { this.loading.set(false); },
    });
  }

  private loadOrgs() {
    this.orgSvc.getAll().subscribe({
      next: r => {
        this.orgs = r.tenants
          .filter((t: any) => t.TenantID > 1)
          .map((t: any) => ({ TenantID: t.TenantID, CompanyName: t.CompanyName }));
        this.checkLoading();
      },
      error: () => { this.loading.set(false); },
    });
  }

  private checkLoading() {
    const needOrgs = this.isPlatform && !this.isEdit;
    const rolesReady = this.roles.length > 0;
    const orgsReady  = !needOrgs || this.orgs.length > 0;
    if (rolesReady && orgsReady) this.loading.set(false);
  }

  private navigateToFirstError() {
    for (const [group, fields] of Object.entries(this.groupFields)) {
      if (fields.some(f => this.form.get(f)?.invalid)) {
        this.activeGroup.set(group); return;
      }
    }
  }

  close() { this.closed.emit(); }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.navigateToFirstError();
      this.errorMsg = 'יש שדות חובה שלא מולאו';
      return;
    }
    this.saving   = true;
    this.errorMsg = '';

    const v = this.form.value;

    if (this.isEdit) {
      const uid = this.user!.UserID;
      const updateObs = this.userSvc.update(uid, {
        firstName: v.firstName, lastName: v.lastName,
        email: v.email, roleId: v.roleId, isActive: v.isActive,
      } as any);
      const pwObs = v.newPassword ? this.userSvc.changePassword(uid, v.newPassword) : of(null);

      forkJoin([updateObs, pwObs]).subscribe({
        next:  () => { this.saving = false; this.saved.emit(); this.close(); },
        error: err => { this.saving = false; this.errorMsg = err.error?.message ?? 'שגיאה בשמירה'; },
      });
    } else {
      this.userSvc.create({
        tenantId: v.tenantId, firstName: v.firstName, lastName: v.lastName,
        username: v.username, email: v.email, password: v.password, roleId: v.roleId,
      } as any).subscribe({
        next:  () => { this.saving = false; this.saved.emit(); this.close(); },
        error: err => { this.saving = false; this.errorMsg = err.error?.message ?? 'שגיאה בשמירה'; },
      });
    }
  }

  get firstNameErr() { const f = this.form.get('firstName'); return f?.invalid && f?.touched; }
  get lastNameErr()  { const f = this.form.get('lastName');  return f?.invalid && f?.touched; }
  get emailErr()     { const f = this.form.get('email');     return f?.invalid && f?.touched; }
  get usernameErr()  { const f = this.form.get('username');  return f?.invalid && f?.touched; }
  get passwordErr()    { const f = this.form.get('password');    return f?.invalid && f?.touched; }
  get newPasswordErr() { const f = this.form.get('newPassword'); return f?.invalid && f?.touched; }
  get roleErr()      { const f = this.form.get('roleId');    return f?.invalid && f?.touched; }
  get orgErr()       { const f = this.form.get('tenantId');  return f?.invalid && f?.touched; }
}
