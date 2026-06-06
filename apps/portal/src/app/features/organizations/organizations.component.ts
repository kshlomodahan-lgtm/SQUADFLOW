import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Kendo
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { plusIcon } from '@progress/kendo-svg-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

// Material
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
    GridModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
    OrgDialogComponent,
  ],
  templateUrl: './organizations.component.html',
  styleUrl:    './organizations.component.scss',
})
export class OrganizationsComponent implements OnInit {
  addIcon = plusIcon;
  loading = signal(true);
  error   = signal('');
  orgs    = signal<Organization[]>([]);

  gridData: Organization[] = [];
  searchTerm = '';
  skip       = 0;
  pageSize   = 10;
  sort: SortDescriptor[] = [{ field: 'CompanyName', dir: 'asc' }];

  dialogOpen = signal(false);
  dialogOrg  = signal<Organization | null>(null);

  constructor(private svc: OrganizationService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next: r => {
        this.orgs.set(r.tenants);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת ארגונים'); this.loading.set(false); },
    });
  }

  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q
      ? this.orgs().filter(o =>
          o.CompanyName.toLowerCase().includes(q) ||
          o.TenantCode.toLowerCase().includes(q)  ||
          o.Email.toLowerCase().includes(q))
      : [...this.orgs()];

    // מיון עם kendo orderBy
    this.gridData = orderBy(filtered, this.sort) as Organization[];
    this.skip = 0;
  }

  onSearch(value: string) {
    this.searchTerm = value;
    this.applyFilter();
  }

  onPageChange(e: PageChangeEvent) {
    this.skip     = e.skip;
    this.pageSize = e.take;
  }

  onSortChange(sort: SortDescriptor[]) {
    this.sort = sort;
    this.applyFilter();   // מחיל מיון על הנתונים
  }

  openAdd()                 { this.dialogOrg.set(null); this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  openEdit(o: Organization) { this.dialogOrg.set(o);    this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  onSaved()                 { this.load(); }

  planLabel(p: string) {
    return ({ basic: 'בסיסי', pro: 'מקצועי', enterprise: 'ארגוני' } as any)[p] ?? p;
  }

  daysLeft(expiry: string) {
    return Math.ceil((new Date(expiry).getTime() - Date.now()) / 86400000);
  }

  get pagedData() {
    return this.gridData.slice(this.skip, this.skip + this.pageSize);
  }
}
