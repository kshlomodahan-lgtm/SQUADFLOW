import { Component, Input, Output, EventEmitter, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

export interface PickedUser {
  UserID:   number;
  FullName: string;
  RoleName: string;
  OrgName:  string;
  TenantID: number;
  IsActive: boolean;
}

@Component({
  selector: 'app-user-picker-dialog',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    DialogsModule, GridModule, InputsModule,
    DropDownsModule, ButtonsModule, IndicatorsModule,
    MatIconModule,
  ],
  templateUrl: './user-picker-dialog.component.html',
  styleUrl:    './user-picker-dialog.component.scss',
})
export class UserPickerDialogComponent implements OnInit {
  @Input() tenantId: number | null = null;
  @Input() title = 'בחר משתמש';
  @Input() excludeUserIds: number[] = [];

  @Output() userSelected = new EventEmitter<PickedUser>();
  @Output() cancelled    = new EventEmitter<void>();

  loading   = signal(true);
  allUsers  = signal<PickedUser[]>([]);
  selected  = signal<PickedUser | null>(null);

  searchText = '';
  filterRole   = '';
  filterStatus = '';

  skip     = 0;
  pageSize = 10;
  sort: SortDescriptor[] = [{ field: 'FullName', dir: 'asc' }];

  roles   = signal<string[]>([]);
  statuses = ['פעיל', 'מושהה'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = this.tenantId ? `/api/users?tenantId=${this.tenantId}` : '/api/users';
    this.http.get<any>(url).subscribe({
      next: r => {
        let users: PickedUser[] = (r.users || [])
          .filter((u: any) => !this.excludeUserIds.includes(u.UserID))
          .map((u: any) => ({
            UserID:   u.UserID,
            FullName: u.FullName,
            RoleName: u.RoleName ?? '',
            OrgName:  u.OrgName ?? u.CompanyName ?? '',
            TenantID: u.TenantID,
            IsActive: !!u.IsActive,
          }));

        if (this.tenantId) users = users.filter(u => u.TenantID === this.tenantId);

        this.allUsers.set(users);
        const uniqueRoles = [...new Set(users.map(u => u.RoleName).filter(Boolean))].sort();
        this.roles.set(uniqueRoles);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  get filtered(): PickedUser[] {
    let list = this.allUsers();
    if (this.searchText.trim()) {
      const q = this.searchText.trim().toLowerCase();
      list = list.filter(u =>
        u.FullName.toLowerCase().includes(q) ||
        u.OrgName.toLowerCase().includes(q)
      );
    }
    if (this.filterRole)   list = list.filter(u => u.RoleName === this.filterRole);
    if (this.filterStatus) list = list.filter(u =>
      this.filterStatus === 'פעיל' ? u.IsActive : !u.IsActive
    );
    return orderBy(list, this.sort);
  }

  get pageData() {
    return this.filtered.slice(this.skip, this.skip + this.pageSize);
  }

  onSearch(val: string)  { this.searchText = val; this.skip = 0; }
  onPageChange(e: PageChangeEvent) { this.skip = e.skip; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.skip = 0; }

  selectRow(user: PickedUser) { this.selected.set(user); }

  confirm() {
    const u = this.selected();
    if (u) this.userSelected.emit(u);
  }

  cancel() { this.cancelled.emit(); }

  isSelected(user: PickedUser) { return this.selected()?.UserID === user.UserID; }
}
