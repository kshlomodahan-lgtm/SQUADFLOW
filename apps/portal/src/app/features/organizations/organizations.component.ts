import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganizationService } from '../../core/services/organization.service';
import { Organization } from '../../core/models/organization.model';
import { OrgDialogComponent } from './org-dialog/org-dialog.component';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    TableModule, InputTextModule, ButtonModule, TagModule,
    IconFieldModule, InputIconModule,
    MatIconModule, MatProgressSpinnerModule,
    OrgDialogComponent,
  ],
  templateUrl: './organizations.component.html',
  styleUrl:    './organizations.component.scss',
})
export class OrganizationsComponent implements OnInit {
  loading      = signal(true);
  error        = signal('');
  orgs         = signal<Organization[]>([]);
  dialogVisible = signal(false);
  editOrg       = signal<Organization | null>(null);

  constructor(private svc: OrganizationService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next:  r => { this.orgs.set(r.tenants); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת ארגונים'); this.loading.set(false); },
    });
  }

  openAdd()           { this.editOrg.set(null);  this.dialogVisible.set(true); }
  openEdit(o: Organization) { this.editOrg.set(o); this.dialogVisible.set(true); }
  onSaved()           { this.load(); }

  planLabel(p: string) {
    return ({ basic: 'בסיסי', pro: 'מקצועי', enterprise: 'ארגוני' } as any)[p] ?? p;
  }

  planSeverity(p: string): 'secondary' | 'info' | 'warn' {
    return ({ basic: 'secondary', pro: 'info', enterprise: 'warn' } as any)[p] ?? 'secondary';
  }

  daysLeft(expiry: string) {
    return Math.ceil((new Date(expiry).getTime() - Date.now()) / 86400000);
  }
}
