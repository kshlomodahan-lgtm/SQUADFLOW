import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule, GridComponent, ExcelModule, PDFModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { SVGIcon, plusIcon, fileExcelIcon, filePdfIcon } from '@progress/kendo-svg-icons';
import { MatIconModule } from '@angular/material/icon';

import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    GridModule, ExcelModule, PDFModule, ButtonsModule, IndicatorsModule,
    MatIconModule,
    UserDialogComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl:    './users.component.scss',
})
export class UsersComponent implements OnInit {
  @ViewChild(GridComponent) grid!: GridComponent;

  addIcon:   SVGIcon = plusIcon;
  excelIcon: SVGIcon = fileExcelIcon;
  pdfIcon:   SVGIcon = filePdfIcon;

  loading    = signal(true);
  error      = signal('');
  users      = signal<User[]>([]);
  isPlatform = signal(false);

  gridData:  User[] = [];
  searchTerm = '';
  skip       = 0;
  pageSize   = 10;
  sort: SortDescriptor[] = [{ field: 'OrgName', dir: 'asc' }];

  dialogOpen = signal(false);
  dialogUser = signal<User | null>(null);

  expandedIds = new Set<number>();

  constructor(private svc: UserService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next: r => {
        this.users.set(r.users);
        this.isPlatform.set(r.isPlatform);
        if (!r.isPlatform) this.sort = [{ field: 'FullName', dir: 'asc' }];
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת משתמשים'); this.loading.set(false); },
    });
  }

  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q
      ? this.users().filter(u =>
          u.FullName.toLowerCase().includes(q) ||
          u.Username.toLowerCase().includes(q)  ||
          u.Email.toLowerCase().includes(q)      ||
          (u.OrgName || '').toLowerCase().includes(q))
      : [...this.users()];
    this.gridData = orderBy(filtered, this.sort) as User[];
    this.skip = 0;
  }

  onSearch(v: string)               { this.searchTerm = v; this.applyFilter(); }
  onPageChange(e: PageChangeEvent)  { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.applyFilter(); }

  openAdd()         { this.dialogUser.set(null); this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  openEdit(u: User) { this.dialogUser.set(u);    this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  onSaved()         { this.load(); }

  toggleDetail(u: User, rowIndex: number) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(u.UserID)) {
      this.grid.collapseRow(abs);
      this.expandedIds.delete(u.UserID);
    } else {
      this.grid.expandRow(abs);
      this.expandedIds.add(u.UserID);
    }
  }

  isExpanded(id: number) { return this.expandedIds.has(id); }

  toggleActive(user: User) {
    this.svc.toggleActive(user.UserID).subscribe({
      next: r => {
        this.users.update(list =>
          list.map(u => u.UserID === user.UserID ? { ...u, IsActive: r.isActive } : u)
        );
        this.applyFilter();
      },
    });
  }

  exportExcel() { this.grid.saveAsExcel(); }
  exportPDF()   { this.grid.saveAsPDF(); }
  allData = () => ({ data: this.gridData });

  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }

  formatLastLogin(dt: string | null): string {
    if (!dt) return 'מעולם לא';
    const d = new Date(dt);
    if (d.getFullYear() < 2000) return 'מעולם לא';
    return d.toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  hasLogin(dt: string | null): boolean {
    if (!dt) return false;
    return new Date(dt).getFullYear() >= 2000;
  }

  roleClass(role: string): string {
    const map: Record<string, string> = {
      'מנהל מערכת': 'badge-platform',
      'מנהל לקוח':  'badge-blue',
      'משתמש לקוח': 'badge-gray',
    };
    return map[role] ?? 'badge-gray';
  }
}
