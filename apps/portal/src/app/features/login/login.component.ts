import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/services/auth.service';
import { TenantService, TenantPublicInfo } from '../../core/services/tenant.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading      = signal(false);
  loadingTenant = signal(true);
  error        = signal('');
  showPass     = signal(false);
  tenantCode   = signal('');
  noTenant     = signal(false);
  tenant       = signal<TenantPublicInfo | null>(null);

  constructor(
    private fb:      FormBuilder,
    private auth:    AuthService,
    private router:  Router,
    private route:   ActivatedRoute,
    private tenantSvc: TenantService,
  ) {}

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/app/dashboard']);
      return;
    }

    const urlTenant   = this.route.snapshot.queryParamMap.get('tenant') ?? '';
    const savedTenant = localStorage.getItem('lastTenantCode') ?? '';
    const code        = (urlTenant || savedTenant).toUpperCase();

    if (!code) {
      this.noTenant.set(true);
      this.loadingTenant.set(false);
      return;
    }

    this.tenantCode.set(code);
    localStorage.setItem('lastTenantCode', code);

    // טען פרטי ארגון
    this.tenantSvc.getPublicInfo(code).subscribe(info => {
      if (!info.success) {
        this.noTenant.set(true);
      } else {
        this.tenant.set(info);
        this.form = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
        });
      }
      this.loadingTenant.set(false);
    });
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.loading.set(true);
    this.error.set('');

    const { username, password } = this.form.value;

    this.auth.login({ tenantCode: this.tenantCode(), username, password }).subscribe({
      next: res => {
        if (res.success) {
          this.router.navigate(['/app/dashboard']);
        } else {
          this.error.set(res.message ?? 'שגיאת כניסה');
          this.loading.set(false);
        }
      },
      error: err => {
        this.error.set(err.error?.message ?? 'שגיאת שרת. נסה שנית.');
        this.loading.set(false);
      },
    });
  }
}
