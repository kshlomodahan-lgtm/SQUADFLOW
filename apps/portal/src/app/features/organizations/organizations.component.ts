import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Kendo
import { GridModule, GridComponent, PageChangeEvent, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { plusIcon, fileExcelIcon, filePdfIcon } from '@progress/kendo-svg-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { OrganizationService } from '../../core/services/organization.service';
import { Organization } from '../../core/models/organization.model';
import { OrgDialogComponent } from './org-dialog/org-dialog.component';
import { HasPermDirective } from '../../core/directives/has-perm.directive';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    GridModule, ExcelModule, PDFModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
    OrgDialogComponent,
    HasPermDirective,
  ],
  templateUrl: './organizations.component.html',
  styleUrl:    './organizations.component.scss',
})
export class OrganizationsComponent implements OnInit {
  @ViewChild(GridComponent) grid!: GridComponent;

  addIcon    = plusIcon;
  excelIcon  = fileExcelIcon;
  pdfIcon    = filePdfIcon;
  loading = signal(true);
  error   = signal('');
  orgs    = signal<Organization[]>([]);

  gridData: Organization[] = [];
  searchTerm = '';
  skip       = 0;
  pageSize   = 50;
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

  toggleActive(o: Organization) {
    this.svc.toggleActive(o.TenantID).subscribe({
      next: r => {
        this.orgs.update(list =>
          list.map(t => t.TenantID === o.TenantID ? { ...t, IsActive: r.isActive } : t)
        );
        this.applyFilter();
      },
    });
  }

  expandedIds = new Set<number>();

  toggleDetail(o: Organization, rowIndex: number) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(o.TenantID)) {
      this.grid.collapseRow(abs);
      this.expandedIds.delete(o.TenantID);
    } else {
      this.grid.expandRow(abs);
      this.expandedIds.add(o.TenantID);
    }
  }

  isExpanded(tenantId: number) { return this.expandedIds.has(tenantId); }

  exportExcel() { this.grid.saveAsExcel(); }
  exportPDF()   { this.grid.saveAsPDF(); }

  allData = () => ({ data: this.gridData });

  planLabel(p: string) {
    return ({ basic: 'בסיסי', pro: 'מקצועי', enterprise: 'ארגוני' } as any)[p] ?? p;
  }

  orgTypeLabel(t: string) {
    return ({ PLATFORM: 'פלטפורמה', SOFTWARE_HOUSE: 'בית תוכנה', IMPLEMENTER: 'מיישם', CLIENT: 'לקוח' } as any)[t] ?? t;
  }

  orgTypeClass(t: string) {
    return 'chip chip-ot-' + (t || 'CLIENT');
  }

  daysLeft(expiry: string) {
    return Math.ceil((new Date(expiry).getTime() - Date.now()) / 86400000);
  }

  get pagedData() {
    return this.gridData.slice(this.skip, this.skip + this.pageSize);
  }
}
