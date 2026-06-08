import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NotificationModule, NotificationService } from '@progress/kendo-angular-notification';
import { BadgeModule } from '@progress/kendo-angular-indicators';
import { SVGIconModule } from '@progress/kendo-angular-icons';
import {
  plusIcon, pencilIcon, trashIcon, checkIcon, xIcon,
  clipboardTextIcon, copyIcon, shieldIcon
} from '@progress/kendo-svg-icons';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RbacService, RoleItem, PermissionCell } from '../../../core/services/rbac.service';

interface ScreenRow {
  MenuItemID: number;
  MenuItemCode: string;
  MenuItemName: string;
  MenuItemType: string;
  ParentID: number | null;
  SortOrder: number;
  actions: { [actionCode: string]: { allowed: boolean; actionName: string } };
}

@Component({
  selector: 'app-roles-manager',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    GridModule, DialogModule, ButtonsModule,
    InputsModule, DropDownListModule, TooltipModule,
    NotificationModule, BadgeModule, SVGIconModule,
    MatIconModule, MatProgressSpinnerModule,
  ],
  providers: [NotificationService],
  templateUrl: './roles-manager.component.html',
  styleUrl: './roles-manager.component.scss',
})
export class RolesManagerComponent implements OnInit {
  loading      = signal(true);
  saving       = signal(false);
  matrixLoading = signal(false);
  error        = signal('');

  roles       = signal<RoleItem[]>([]);
  selectedRole = signal<RoleItem | null>(null);
  matrixData  = signal<ScreenRow[]>([]);
  allActions  = signal<string[]>([]);
  matrixDirty = signal(false);

  roleDialogOpen  = signal(false);
  cloneDialogOpen = signal(false);
  editingRole     = signal<RoleItem | null>(null);

  roleForm!: FormGroup;
  cloneForm!: FormGroup;

  cloneName = '';
  cloneCode = '';

  // Pagination
  skip     = 0;
  pageSize = 10;

  readonly icons = {
    plus: plusIcon, pencil: pencilIcon, trash: trashIcon,
    check: checkIcon, x: xIcon, clipboard: clipboardTextIcon,
    copy: copyIcon, shield: shieldIcon,
  };

  readonly roleTypeOptions = [
    { value: 'CUSTOM',   label: 'מותאם אישית' },
    { value: 'TEMPLATE', label: 'תבנית' },
  ];

  readonly colorOptions = [
    '#0D47FF', '#7c3aed', '#0891b2', '#059669', '#d97706', '#e11d48', '#64748b'
  ];

  constructor(
    private svc: RbacService,
    private fb: FormBuilder,
    private notify: NotificationService,
  ) {}

  ngOnInit() {
    this.buildForms();
    this.loadRoles();
  }

  private buildForms() {
    this.roleForm = this.fb.group({
      roleName:   ['', Validators.required],
      roleCode:   ['', Validators.required],
      roleType:   ['CUSTOM'],
      colorHex:   ['#0D47FF'],
      sortOrder:  [0],
      isActive:   [true],
    });
    this.cloneForm = this.fb.group({
      newRoleName: ['', Validators.required],
      newRoleCode: ['', Validators.required],
    });
  }

  loadRoles() {
    this.loading.set(true);
    this.svc.getRoles().subscribe({
      next: r => { this.roles.set(r.data); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינה'); this.loading.set(false); },
    });
  }

  selectRole(role: RoleItem) {
    this.selectedRole.set(role);
    this.matrixDirty.set(false);
    this.loadMatrix(role.RoleID);
  }

  loadMatrix(roleId: number) {
    this.matrixLoading.set(true);
    this.svc.getRoleMatrix(roleId).subscribe({
      next: r => {
        const cells = r.data;

        // Collect unique action codes
        const actionCodes = [...new Set(cells.map(c => c.ActionCode))];
        this.allActions.set(actionCodes);

        // Build screen rows map
        const screenMap = new Map<number, ScreenRow>();
        cells.forEach(c => {
          if (!screenMap.has(c.MenuItemID)) {
            screenMap.set(c.MenuItemID, {
              MenuItemID:   c.MenuItemID,
              MenuItemCode: c.MenuItemCode,
              MenuItemName: c.MenuItemName,
              MenuItemType: c.MenuItemType,
              ParentID:     c.ParentID,
              SortOrder:    c.SortOrder,
              actions: {},
            });
          }
          const row = screenMap.get(c.MenuItemID)!;
          row.actions[c.ActionCode] = { allowed: c.IsAllowed, actionName: c.ActionName };
        });

        this.matrixData.set(Array.from(screenMap.values()).sort((a,b) => a.SortOrder - b.SortOrder));
        this.matrixLoading.set(false);
      },
      error: () => { this.matrixLoading.set(false); },
    });
  }

  toggleCell(row: ScreenRow, actionCode: string) {
    if (!row.actions[actionCode]) return;
    row.actions[actionCode].allowed = !row.actions[actionCode].allowed;
    this.matrixDirty.set(true);
  }

  toggleAllForAction(actionCode: string) {
    const rows = this.matrixData();
    const allOn = rows.every(r => !r.actions[actionCode] || r.actions[actionCode].allowed);
    rows.forEach(r => {
      if (r.actions[actionCode]) r.actions[actionCode].allowed = !allOn;
    });
    this.matrixDirty.set(true);
  }

  toggleAllForScreen(row: ScreenRow) {
    const allOn = this.allActions().every(a => !row.actions[a] || row.actions[a].allowed);
    this.allActions().forEach(a => {
      if (row.actions[a]) row.actions[a].allowed = !allOn;
    });
    this.matrixDirty.set(true);
  }

  saveMatrix() {
    const role = this.selectedRole();
    if (!role) return;
    this.saving.set(true);

    const permissions: { menuItemId: number; actionCode: string; isAllowed: boolean }[] = [];
    this.matrixData().forEach(row => {
      Object.entries(row.actions).forEach(([code, cell]) => {
        permissions.push({ menuItemId: row.MenuItemID, actionCode: code, isAllowed: cell.allowed });
      });
    });

    this.svc.saveRoleMatrix(role.RoleID, permissions).subscribe({
      next: () => {
        this.matrixDirty.set(false);
        this.saving.set(false);
        this.notify.show({ content: 'הרשאות נשמרו בהצלחה', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' }, animation: { type: 'fade', duration: 300 }, closable: true });
      },
      error: (e) => {
        this.saving.set(false);
        this.notify.show({ content: e.error?.message || 'שגיאה בשמירה', type: { style: 'error', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
    });
  }

  // ─── Role CRUD ─────────────────────────────────────────────

  openAddRole() {
    this.editingRole.set(null);
    this.roleForm.reset({ roleName: '', roleCode: '', roleType: 'CUSTOM', colorHex: '#0D47FF', sortOrder: this.roles().length, isActive: true });
    this.roleDialogOpen.set(true);
  }

  openEditRole(role: RoleItem) {
    this.editingRole.set(role);
    this.roleForm.patchValue({ roleName: role.RoleName, roleCode: role.RoleCode, roleType: role.RoleType, colorHex: role.ColorHex, sortOrder: role.SortOrder, isActive: role.IsActive });
    this.roleDialogOpen.set(true);
  }

  saveRole() {
    if (this.roleForm.invalid) { this.roleForm.markAllAsTouched(); return; }
    this.saving.set(true);
    const editing = this.editingRole();
    const v = this.roleForm.value;
    const payload = { ...v, RoleID: editing?.RoleID || 0 };

    this.svc.saveRole(payload).subscribe({
      next: () => {
        this.roleDialogOpen.set(false);
        this.saving.set(false);
        this.loadRoles();
        this.notify.show({ content: editing ? 'תפקיד עודכן' : 'תפקיד נוצר', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
      error: (e) => { this.saving.set(false); this.notify.show({ content: e.error?.message || 'שגיאה', type: { style: 'error', icon: true }, position: { horizontal: 'center', vertical: 'top' } }); },
    });
  }

  deleteRole(role: RoleItem) {
    if (role.IsSystem) { this.notify.show({ content: 'לא ניתן למחוק תפקיד מערכת', type: { style: 'warning', icon: true }, position: { horizontal: 'center', vertical: 'top' } }); return; }
    if (!confirm(`למחוק את "${role.RoleName}"?`)) return;
    this.svc.deleteRole(role.RoleID).subscribe({
      next: () => {
        if (this.selectedRole()?.RoleID === role.RoleID) { this.selectedRole.set(null); this.matrixData.set([]); }
        this.loadRoles();
        this.notify.show({ content: 'נמחק', type: { style: 'warning', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
    });
  }

  openCloneDialog(role: RoleItem) {
    this.editingRole.set(role);
    this.cloneForm.reset({ newRoleName: role.RoleName + ' (עותק)', newRoleCode: role.RoleCode + '_COPY' });
    this.cloneDialogOpen.set(true);
  }

  cloneRole() {
    if (this.cloneForm.invalid) { this.cloneForm.markAllAsTouched(); return; }
    const source = this.editingRole()!;
    const { newRoleName, newRoleCode } = this.cloneForm.value;
    this.saving.set(true);
    this.svc.cloneRole(source.RoleID, newRoleName, newRoleCode).subscribe({
      next: () => {
        this.cloneDialogOpen.set(false);
        this.saving.set(false);
        this.loadRoles();
        this.notify.show({ content: 'תפקיד שוכפל', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
      error: (e) => { this.saving.set(false); },
    });
  }

  // ─── Helpers ───────────────────────────────────────────────

  actionIsAllowedForAll(actionCode: string): boolean {
    return this.matrixData().every(r => !r.actions[actionCode] || r.actions[actionCode].allowed);
  }

  actionIsAllowedForNone(actionCode: string): boolean {
    return this.matrixData().every(r => !r.actions[actionCode] || !r.actions[actionCode].allowed);
  }

  screenAllAllowed(row: ScreenRow): boolean {
    return this.allActions().every(a => !row.actions[a] || row.actions[a].allowed);
  }

  get pagedRoles(): RoleItem[] {
    return this.roles().slice(this.skip, this.skip + this.pageSize);
  }

  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }

  roleTypeBadge(type: string): string {
    return { PLATFORM: 'badge-platform', TEMPLATE: 'badge-template', CUSTOM: 'badge-custom' }[type] ?? '';
  }

  roleTypeName(type: string): string {
    return { PLATFORM: 'פלטפורמה', TEMPLATE: 'תבנית', CUSTOM: 'מותאם' }[type] ?? type;
  }

  trackById(_i: number, r: any) { return r.MenuItemID || r.RoleID; }
}
