import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganizationService } from '../../core/services/organization.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatTableModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule,
    MatTooltipModule, MatProgressSpinnerModule,
  ],
  templateUrl: './organizations.component.html',
  styleUrl:    './organizations.component.scss',
})
export class OrganizationsComponent implements OnInit {
  loading  = signal(true);
  error    = signal('');
  search   = signal('');
  allOrgs  = signal<Organization[]>([]);

  filtered = computed(() => {
    const q = this.search().toLowerCase();
    if (!q) return this.allOrgs();
    return this.allOrgs().filter(o =>
      o.CompanyName.toLowerCase().includes(q) ||
      o.TenantCode.toLowerCase().includes(q)  ||
      o.Email.toLowerCase().includes(q)
    );
  });

  columns = ['org', 'TenantCode', 'Email', 'plan', 'users', 'expiry', 'status', 'actions'];

  constructor(private svc: OrganizationService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next:  r => { this.allOrgs.set(r.tenants); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת ארגונים'); this.loading.set(false); },
    });
  }

  planLabel(p: string) {
    return ({ basic: 'בסיסי', pro: 'מקצועי', enterprise: 'ארגוני' } as any)[p] ?? p;
  }

  daysLeft(expiry: string): number {
    return Math.ceil((new Date(expiry).getTime() - Date.now()) / 86400000);
  }
}
