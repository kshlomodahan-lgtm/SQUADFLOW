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
  loading  = signal(false);
  error    = signal('');
  showPass = signal(false);
  tenantCode = signal('');

  constructor(
    private fb:    FormBuilder,
    private auth:  AuthService,
    private router: Router,
    private route:  ActivatedRoute,
  ) {}

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/app/dashboard']);
      return;
    }

    const urlTenant  = this.route.snapshot.queryParamMap.get('tenant') ?? '';
    const savedTenant = localStorage.getItem('lastTenantCode') ?? '';
    const tenant = (urlTenant || savedTenant).toUpperCase();
    this.tenantCode.set(tenant);

    this.form = this.fb.group({
      tenantCode: [tenant, [Validators.required, Validators.pattern(/^[A-Z]{3}_\d+$/)]],
      username:   ['', Validators.required],
      password:   ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.loading.set(true);
    this.error.set('');

    const { tenantCode, username, password } = this.form.value;
    localStorage.setItem('lastTenantCode', tenantCode);

    this.auth.login({ tenantCode, username, password }).subscribe({
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
