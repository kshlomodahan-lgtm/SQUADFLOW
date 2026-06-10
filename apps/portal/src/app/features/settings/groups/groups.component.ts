import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';

interface Group {
  GroupID:    number;
  GroupName:  string;
  GroupCode:  string;
  Description: string;
  ColorHex:   string;
  IsActive:   boolean;
  UserCount:  number;
  RoleNames:  string;
}

interface Role { RoleID: number; RoleName: string; RoleCode: string; }

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GridModule, DialogModule,
            ButtonModule, TextBoxModule, IndicatorsModule, IconsModule,
            MatProgressSpinnerModule, MatIconModule, NotificationModule],
  providers: [NotificationService],
  templateUrl: './groups.component.html',
  styleUrl:    './groups.component.scss',
})
export class GroupsComponent implements OnInit {
  loading   = signal(true);
  error     = signal('');
  groups    = signal<Group[]>([]);
  roles     = signal<Role[]>([]);
  dialogOpen = signal(false);
  saving     = signal(false);
  editingGroup: Group | null = null;

  form!: FormGroup;
  selectedRoleIds: number[] = [];

  skip     = 0;
  pageSize = 10;
  sort: SortDescriptor[] = [];

  get gridData() { return orderBy(this.groups(), this.sort); }
  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }

  constructor(private http: HttpClient, private fb: FormBuilder, private notif: NotificationService) {}

  ngOnInit() {
    this.load();
    this.loadRoles();
  }

  load() {
    this.loading.set(true);
    this.http.get<any>('/api/groups').subscribe({
      next: r => { this.groups.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת קבוצות'); this.loading.set(false); },
    });
  }

  loadRoles() {
    this.http.get<any>('/api/users/roles').subscribe({
      next: r => this.roles.set(r.roles ?? []),
    });
  }

  openNew() {
    this.editingGroup = null;
    this.selectedRoleIds = [];
    this.form = this.fb.group({
      groupName:   ['', Validators.required],
      groupCode:   ['', [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      description: [''],
      colorHex:    ['#64748b'],
      sortOrder:   [0],
    });
    this.dialogOpen.set(true);
  }

  openEdit(g: Group) {
    this.editingGroup = g;
    this.form = this.fb.group({
      groupName:   [g.GroupName,   Validators.required],
      groupCode:   [g.GroupCode,   [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      description: [g.Description],
      colorHex:    [g.ColorHex],
      sortOrder:   [0],
    });
    this.selectedRoleIds = [];
    this.dialogOpen.set(true);
  }

  closeDialog() { this.dialogOpen.set(false); this.editingGroup = null; }

  isRoleSelected(roleId: number): boolean { return this.selectedRoleIds.includes(roleId); }

  toggleRole(roleId: number) {
    if (this.isRoleSelected(roleId))
      this.selectedRoleIds = this.selectedRoleIds.filter(id => id !== roleId);
    else
      this.selectedRoleIds = [...this.selectedRoleIds, roleId];
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    const payload = { ...this.form.value, roleIds: this.selectedRoleIds };

    const req = this.editingGroup
      ? this.http.put<any>(`/api/groups/${this.editingGroup.GroupID}`, payload)
      : this.http.post<any>('/api/groups', payload);

    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.closeDialog();
        this.load();
        this.notify(this.editingGroup ? 'עודכן בהצלחה' : 'קבוצה נוצרה בהצלחה', 'success');
      },
      error: err => {
        this.saving.set(false);
        this.notify(err?.error?.message ?? 'שגיאה בשמירה', 'error');
      },
    });
  }

  delete(g: Group) {
    if (!confirm(`למחוק את הקבוצה "${g.GroupName}"?`)) return;
    this.http.delete<any>(`/api/groups/${g.GroupID}`).subscribe({
      next: () => { this.load(); this.notify('הקבוצה הוסרה', 'success'); },
      error: () => this.notify('שגיאה במחיקה', 'error'),
    });
  }

  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; }

  private notify(msg: string, style: 'success' | 'error') {
    this.notif.show({
      content: msg, closable: true,
      type: { style, icon: true },
      animation: { type: 'slide', duration: 300 },
      position: { horizontal: 'center', vertical: 'top' },
    });
  }
}
