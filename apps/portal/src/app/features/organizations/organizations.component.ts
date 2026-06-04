import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
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
    MatInputModule, MatFormFieldModule, MatChipsModule,
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

  columns = ['logo', 'CompanyName', 'TenantCode', 'Email', 'PlanType', 'stats', 'IsActive', 'actions'];

  constructor(private svc: OrganizationService) {}

  ngOnInit() {
    this.svc.getAll().subscribe({
      next: r => { this.allOrgs.set(r.tenants); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת ארגונים'); this.loading.set(false); },
    });
  }

  planLabel(plan: string): string {
    return { basic: 'בסיסי', pro: 'מקצועי', enterprise: 'ארגוני' }[plan] ?? plan;
  }

  planClass(plan: string): string {
    return { basic: 'chip-basic', pro: 'chip-pro', enterprise: 'chip-ent' }[plan] ?? '';
  }
}
