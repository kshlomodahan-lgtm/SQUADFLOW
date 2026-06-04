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
  loading    = signal(false);
  error      = signal('');
  showPass   = signal(false);
  tenantCode = signal('');
  noTenant   = signal(false);

  constructor(
    private fb:     FormBuilder,
    private auth:   AuthService,
    private router: Router,
    private route:  ActivatedRoute,
  ) {}

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/app/dashboard']);
      return;
    }

    // קוד ארגון — מה-URL בלבד
    const urlTenant   = this.route.snapshot.queryParamMap.get('tenant') ?? '';
    const savedTenant = localStorage.getItem('lastTenantCode') ?? '';
    const tenant      = (urlTenant || savedTenant).toUpperCase();

    if (!tenant) {
      this.noTenant.set(true);
      return;
    }

    this.tenantCode.set(tenant);
    localStorage.setItem('lastTenantCode', tenant);

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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
