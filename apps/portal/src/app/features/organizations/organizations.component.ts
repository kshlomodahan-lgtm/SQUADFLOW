import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganizationService } from '../../core/services/organization.service';
import { Organization } from '../../core/models/organization.model';

// עברות ל-Paginator
function hebrewPaginatorIntl(): MatPaginatorIntl {
  const intl = new MatPaginatorIntl();
  intl.itemsPerPageLabel   = 'שורות בעמוד:';
  intl.nextPageLabel       = 'עמוד הבא';
  intl.previousPageLabel   = 'עמוד קודם';
  intl.firstPageLabel      = 'עמוד ראשון';
  intl.lastPageLabel       = 'עמוד אחרון';
  intl.getRangeLabel = (page, size, length) =>
    length === 0 ? 'אין רשומות'
                 : `${page * size + 1}–${Math.min((page + 1) * size, length)} מתוך ${length}`;
  return intl;
}

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatButtonModule, MatIconModule,
    MatTooltipModule, MatProgressSpinnerModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useFactory: hebrewPaginatorIntl }],
  templateUrl: './organizations.component.html',
  styleUrl:    './organizations.component.scss',
})
export class OrganizationsComponent implements OnInit {
  @ViewChild(MatSort)      sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loading = signal(true);
  error   = signal('');
  ds      = new MatTableDataSource<Organization>([]);

  columns = ['org', 'TenantCode', 'Email', 'plan', 'users', 'expiry', 'status', 'actions'];

  constructor(private svc: OrganizationService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next: r => {
        this.ds.data = r.tenants;
        // sort + paginator מחוברים אחרי שה-View קיים — setTimeout מבטיח זאת
        setTimeout(() => {
          this.ds.sort      = this.sort;
          this.ds.paginator = this.paginator;
          // custom sort accessor לשדות חישוביים
          this.ds.sortingDataAccessor = (row, col) => {
            switch (col) {
              case 'plan':   return row.PlanType;
              case 'users':  return row.UserCount;
              case 'expiry': return new Date(row.ExpiresAt).getTime();
              case 'status': return row.IsActive ? 0 : 1;
              default:       return (row as any)[col] ?? '';
            }
          };
        });
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת ארגונים'); this.loading.set(false); },
    });
  }

  applyFilter(value: string) {
    this.ds.filter = value.trim().toLowerCase();
    this.ds.paginator?.firstPage();
  }

  planLabel(p: string) {
    return ({ basic: 'בסיסי', pro: 'מקצועי', enterprise: 'ארגוני' } as any)[p] ?? p;
  }

  daysLeft(expiry: string) {
    return Math.ceil((new Date(expiry).getTime() - Date.now()) / 86400000);
  }
}
