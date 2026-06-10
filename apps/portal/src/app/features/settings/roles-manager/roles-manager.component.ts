import { Component, OnInit, signal } from '@angular/core';
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
  clipboardTextIcon, copyIcon, lockIcon
} from '@progress/kendo-svg-icons';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RbacService, RoleItem, PermissionCell, RoleFieldPermission } from '../../../core/services/rbac.service';

interface ScreenRow {
  MenuItemID: number;
  MenuItemCode: string;
  MenuItemName: string;
  MenuItemType: string;
  ParentID: number | null;
  SortOrder: number;
  actions: { [actionCode: string]: { allowed: boolean; actionName: string } };
}

interface MatrixGroup {
  label: string;
  rows: ScreenRow[];
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

  roles        = signal<RoleItem[]>([]);
  selectedRole = signal<RoleItem | null>(null);
  matrixData   = signal<ScreenRow[]>([]);
  matrixGroups = signal<MatrixGroup[]>([]);
  allActions   = signal<string[]>([]);
  matrixDirty  = signal(false);

  // Field permissions — inline accordion
  expandedScreenIds       = signal<Set<number>>(new Set());
  screenFieldPerms        = signal<Map<string, RoleFieldPermission[]>>(new Map());
  screenFieldPermsLoading = signal<Set<string>>(new Set());

  // Predefined group order — mirrors the sidebar nav structure
  private readonly groupDef: { label: string; codes: string[] }[] = [
    { label: 'כללי',          codes: ['DASHBOARD', 'ORGANIZATIONS', 'USERS'] },
    { label: 'קטלוג מוצרים', codes: ['CATALOG_CATEGORIES', 'CATALOG_PRODUCTS', 'CATALOG_PACKAGES'] },
    { label: 'DevTools',      codes: ['AUDIT'] },
    { label: 'הגדרות',        codes: ['SETTINGS_GENERAL', 'SETTINGS_ROLES', 'SETTINGS_ORGCHART', 'SETTINGS_MENU', 'SETTINGS_SECURITY'] },
  ];

  roleDialogOpen       = signal(false);
  cloneDialogOpen      = signal(false);
  deleteRoleConfirmOpen = signal(false);
  editingRole          = signal<RoleItem | null>(null);
  roleToDelete         = signal<RoleItem | null>(null);

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
    copy: copyIcon, shield: lockIcon,
  };

  readonly roleTypeOptions = [
    { value: 'CUSTOM',   label: 'מותאם אישית' },
    { value: 'TEMPLATE', label: 'תבנית' },
  ];

  readonly colorOptions = [
    '#0D47FF', '#7c3aed', '#0891b2', '#059669', '#d97706', '#e11d48', '#64748b'
  ];

  private readonly screenLabels: Record<string, string> = {
    'DASHBOARD':          'דשבורד',
    'ORGANIZATIONS':      'ארגונים',
    'USERS':              'משתמשים',
    'CATALOG_PRODUCTS':   'מוצרים',
    'CATALOG_PACKAGES':   'חבילות',
    'CATALOG_CATEGORIES': 'קטגוריות',
    'SETTINGS_GENERAL':   'הגדרות כלליות',
    'SETTINGS_ROLES':     'תפקידים והרשאות',
    'SETTINGS_ORGCHART':  'מבנה ארגוני',
    'SETTINGS_MENU':      'תפריט מערכת',
    'SETTINGS_SECURITY':  'אבטחה',
    'AUDIT':              'יומן פעילות',
    'GENERAL':            'כללי',
    'CATALOG':            'קטלוג',
    'SETTINGS':           'הגדרות',
    'DEVTOOLS':           'DevTools',
  };

  private readonly actionLabels: Record<string, string> = {
    'READ':           'קריאה',
    'CREATE':         'יצירה',
    'UPDATE':         'עדכון',
    'DELETE':         'מחיקה',
    'EXPORT':         'ייצוא',
    'SENSITIVE':      'מידע רגיש',
    'VIEW_SENSITIVE': 'מידע רגיש',
    'VIEW_READ':      'קריאה',
    'VIEW_CREATE':    'יצירה',
    'VIEW_UPDATE':    'עדכון',
    'VIEW_DELETE':    'מחיקה',
    'VIEW_EXPORT':    'ייצוא',
  };

  getScreenLabel(code: string): string {
    return this.screenLabels[code] ?? code.replace(/_/g, ' ');
  }

  getActionLabel(action: string): string {
    return this.actionLabels[action] ?? action.replace('VIEW_', '').replace(/_/g, ' ');
  }

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
    this.expandedScreenIds.set(new Set());
    this.screenFieldPerms.set(new Map());
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

        // If Super Admin — force all allowed
        if (this.isSuperAdmin()) {
          screenMap.forEach(row => {
            Object.keys(row.actions).forEach(code => { row.actions[code].allowed = true; });
          });
        }

        // Build groups matching sidebar nav order
        const groups: MatrixGroup[] = this.groupDef
          .map(gd => ({
            label: gd.label,
            rows: gd.codes
              .map(code => Array.from(screenMap.values()).find(r => r.MenuItemCode === code))
              .filter((r): r is ScreenRow => !!r),
          }))
          .filter(g => g.rows.length > 0);

        // Catch any ungrouped screens
        const groupedCodes = this.groupDef.flatMap(g => g.codes);
        const ungrouped = Array.from(screenMap.values()).filter(r => !groupedCodes.includes(r.MenuItemCode));
        if (ungrouped.length) groups.push({ label: 'אחר', rows: ungrouped });

        this.matrixGroups.set(groups);
        this.matrixData.set(groups.flatMap(g => g.rows));
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
      next: () => { this.saveAllFieldPerms(role.RoleID); },
      error: (e) => {
        this.saving.set(false);
        this.notify.show({ content: e.error?.message || 'שגיאה בשמירה', type: { style: 'error', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
    });
  }

  private saveAllFieldPerms(roleId: number) {
    const entries = Array.from(this.screenFieldPerms().entries());
    if (entries.length === 0) { this.onSaveComplete(); return; }
    let remaining = entries.length;
    for (const [code, perms] of entries) {
      this.svc.saveRoleFieldPermissions(roleId, code,
        perms.map(f => ({ fieldCode: f.FieldCode, isAllowed: f.IsAllowed }))
      ).subscribe({ next: () => { if (--remaining === 0) this.onSaveComplete(); },
                    error: () => { if (--remaining === 0) this.onSaveComplete(); } });
    }
  }

  private onSaveComplete() {
    this.matrixDirty.set(false);
    this.saving.set(false);
    this.notify.show({ content: 'הרשאות נשמרו בהצלחה', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' }, animation: { type: 'fade', duration: 300 }, closable: true });
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
    if (role.IsSystem || role.RoleType === 'PLATFORM') return;
    this.roleToDelete.set(role);
    this.deleteRoleConfirmOpen.set(true);
  }

  confirmDeleteRole() {
    const role = this.roleToDelete();
    if (!role) return;
    this.svc.deleteRole(role.RoleID).subscribe({
      next: () => {
        if (this.selectedRole()?.RoleID === role.RoleID) { this.selectedRole.set(null); this.matrixData.set([]); }
        this.loadRoles();
        this.notify.show({ content: 'תפקיד נמחק', type: { style: 'warning', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
    });
    this.deleteRoleConfirmOpen.set(false);
    this.roleToDelete.set(null);
  }

  cancelDeleteRole() {
    this.deleteRoleConfirmOpen.set(false);
    this.roleToDelete.set(null);
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

  isLockedRole(role: RoleItem): boolean {
    return !!role.IsSystem || role.RoleType === 'PLATFORM';
  }

  isTemplateRole(role: RoleItem): boolean {
    return role.RoleType === 'TEMPLATE';
  }

  canEditRole(role: RoleItem): boolean {
    return !this.isLockedRole(role);
  }

  canDeleteRole(role: RoleItem): boolean {
    return !this.isLockedRole(role) && !this.isTemplateRole(role) && role.UserCount === 0;
  }

  isSuperAdmin(): boolean {
    const role = this.selectedRole();
    return !!role && (role.RoleCode === 'SUPER_ADMIN' || role.RoleType === 'PLATFORM');
  }

  getActionShortLabel(action: string): string {
    const shorts: Record<string, string> = {
      'READ': 'R', 'VIEW_READ': 'R',
      'CREATE': 'C', 'VIEW_CREATE': 'C',
      'UPDATE': 'U', 'VIEW_UPDATE': 'U',
      'DELETE': 'D', 'VIEW_DELETE': 'D',
      'EXPORT': 'EX', 'VIEW_EXPORT': 'EX',
      'SENSITIVE': 'S', 'VIEW_SENSITIVE': 'S',
    };
    return shorts[action] ?? action.replace('VIEW_', '').slice(0, 2);
  }

  trackById(_i: number, r: any) { return r.MenuItemID || r.RoleID; }

  // ─── Field Permissions — Inline Accordion ──────────────────

  toggleScreenExpand(row: ScreenRow) {
    const ids = new Set(this.expandedScreenIds());
    if (ids.has(row.MenuItemID)) {
      ids.delete(row.MenuItemID);
      this.expandedScreenIds.set(ids);
      // clear cache so next open reloads fresh
      const map = new Map(this.screenFieldPerms());
      map.delete(row.MenuItemCode);
      this.screenFieldPerms.set(map);
    } else {
      ids.add(row.MenuItemID);
      this.expandedScreenIds.set(ids);
      this.loadFieldPermsForScreen(row);
    }
  }

  private loadFieldPermsForScreen(row: ScreenRow) {
    const role = this.selectedRole();
    if (!role) return;
    const loading = new Set(this.screenFieldPermsLoading());
    loading.add(row.MenuItemCode);
    this.screenFieldPermsLoading.set(loading);
    this.svc.getRoleFieldPermissions(role.RoleID, row.MenuItemCode).subscribe({
      next: r => {
        const map = new Map(this.screenFieldPerms());
        map.set(row.MenuItemCode, r.data || []);
        this.screenFieldPerms.set(map);
        const l = new Set(this.screenFieldPermsLoading());
        l.delete(row.MenuItemCode);
        this.screenFieldPermsLoading.set(l);
      },
      error: () => {
        const l = new Set(this.screenFieldPermsLoading());
        l.delete(row.MenuItemCode);
        this.screenFieldPermsLoading.set(l);
      },
    });
  }

  isScreenExpanded(id: number): boolean {
    return this.expandedScreenIds().has(id);
  }

  isScreenFieldPermsLoading(code: string): boolean {
    return this.screenFieldPermsLoading().has(code);
  }

  getInlineFieldPerms(code: string): RoleFieldPermission[] {
    return this.screenFieldPerms().get(code) || [];
  }

  toggleInlineFieldPerm(menuItemCode: string, fieldCode: string) {
    const map = new Map(this.screenFieldPerms());
    const fields = (map.get(menuItemCode) || []).map(f =>
      f.FieldCode === fieldCode ? { ...f, IsAllowed: !f.IsAllowed } : f
    );
    map.set(menuItemCode, fields);
    this.screenFieldPerms.set(map);
    this.matrixDirty.set(true);
  }

  getRequiredActionLabel(action: string): string {
    return { 'UPDATE': 'עריכה', 'VIEW': 'צפייה' }[action] ?? action;
  }

  getRequiredActionClass(action: string): string {
    return { 'UPDATE': 'req-update', 'VIEW': 'req-view' }[action] ?? 'req-update';
  }
}
