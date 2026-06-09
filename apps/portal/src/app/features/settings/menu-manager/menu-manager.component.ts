import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NotificationModule, NotificationService } from '@progress/kendo-angular-notification';
import { BadgeModule } from '@progress/kendo-angular-indicators';
import { SVGIconModule } from '@progress/kendo-angular-icons';
import {
  gearIcon, folderIcon, gridIcon, pencilIcon, trashIcon, plusIcon,
  checkIcon, xIcon, eyeIcon, eyeSlashIcon, chevronDownIcon, chevronRightIcon,
  menuIcon, lockIcon
} from '@progress/kendo-svg-icons';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RbacService, MenuItem } from '../../../core/services/rbac.service';

interface TreeMenuItem extends MenuItem {
  children: TreeMenuItem[];
  expanded: boolean;
  actionCodeList: string[];
}

const ACTION_CODE_OPTIONS = [
  { code: 'READ',          name: 'צפייה',           group: 'VIEW' },
  { code: 'CREATE',        name: 'הוספה',           group: 'CRUD' },
  { code: 'UPDATE',        name: 'עדכון',           group: 'CRUD' },
  { code: 'DELETE',        name: 'מחיקה',           group: 'CRUD' },
  { code: 'EXPORT',        name: 'ייצוא',           group: 'VIEW' },
  { code: 'IMPORT',        name: 'ייבוא',           group: 'MANAGE' },
  { code: 'PRINT',         name: 'הדפסה',           group: 'VIEW' },
  { code: 'APPROVE',       name: 'אישור',           group: 'WORKFLOW' },
  { code: 'REJECT',        name: 'דחייה',           group: 'WORKFLOW' },
  { code: 'VIEW_SENSITIVE',name: 'צפייה ברגישים',  group: 'VIEW' },
  { code: 'VIEW_AMOUNTS',  name: 'צפייה בסכומים',  group: 'VIEW' },
];

const ITEM_TYPE_OPTIONS = [
  { value: 'SCREEN',  label: 'מסך' },
  { value: 'FOLDER',  label: 'תיקייה' },
  { value: 'DIVIDER', label: 'מפריד' },
];

const ICON_OPTIONS = [
  { value: 'grid',       label: 'גריד' },
  { value: 'person',     label: 'משתמש' },
  { value: 'buildings',  label: 'בניין' },
  { value: 'gear',       label: 'הגדרות' },
  { value: 'clipboard',  label: 'קליפבורד' },
  { value: 'layers',     label: 'שכבות' },
  { value: 'box',        label: 'קופסה' },
  { value: 'tag',        label: 'תגית' },
  { value: 'wallet',     label: 'ארנק' },
  { value: 'lock',       label: 'מנעול' },
  { value: 'menu',       label: 'תפריט' },
];

@Component({
  selector: 'app-menu-manager',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TreeViewModule, SortableModule, DialogModule, ButtonsModule,
    InputsModule, DropDownListModule, TooltipModule, NotificationModule,
    BadgeModule, SVGIconModule, MatIconModule, MatProgressSpinnerModule,
  ],
  providers: [NotificationService],
  templateUrl: './menu-manager.component.html',
  styleUrl: './menu-manager.component.scss',
})
export class MenuManagerComponent implements OnInit {
  loading = signal(true);
  saving  = signal(false);
  error   = signal('');

  allItems  = signal<MenuItem[]>([]);
  treeData  = signal<TreeMenuItem[]>([]);
  flatItems = computed(() => this.allItems());

  dialogOpen       = signal(false);
  editingItem      = signal<TreeMenuItem | null>(null);
  selectedNodeId   = signal<number | null>(null);
  deleteConfirmOpen = signal(false);
  itemToDelete     = signal<TreeMenuItem | null>(null);

  form!: FormGroup;

  // Kendo icons
  readonly icons = {
    gear: gearIcon, folder: folderIcon, grid: gridIcon, pencil: pencilIcon,
    trash: trashIcon, plus: plusIcon, check: checkIcon, x: xIcon,
    eye: eyeIcon, eyeSlash: eyeSlashIcon,
    chevronDown: chevronDownIcon, chevronRight: chevronRightIcon,
    menu: menuIcon, lock: lockIcon,
  };

  readonly itemTypeOptions  = ITEM_TYPE_OPTIONS;
  readonly iconOptions      = ICON_OPTIONS;
  readonly actionCodeOptions = ACTION_CODE_OPTIONS;

  checkedActionCodes: string[] = [];

  constructor(
    private svc: RbacService,
    private fb: FormBuilder,
    private notify: NotificationService,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.loadData();
  }

  private buildForm() {
    this.form = this.fb.group({
      menuItemCode: ['', Validators.required],
      menuItemName: ['', Validators.required],
      menuItemType: ['SCREEN'],
      route:        [''],
      icon:         ['grid'],
      sortOrder:    [0],
      isVisible:    [true],
      isActive:     [true],
      parentId:     [null],
    });
  }

  loadData() {
    this.loading.set(true);
    this.svc.getMenuItems().subscribe({
      next: r => {
        this.allItems.set(r.data);
        this.treeData.set(this.buildTree(r.data));
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת עץ התפריטים'); this.loading.set(false); },
    });
  }

  private buildTree(items: MenuItem[]): TreeMenuItem[] {
    const map = new Map<number, TreeMenuItem>();
    items.forEach(i => map.set(i.MenuItemID, {
      ...i,
      children: [],
      expanded: true,
      actionCodeList: i.AvailableActions ? i.AvailableActions.split(',').sort() : [],
    }));
    const roots: TreeMenuItem[] = [];
    map.forEach(item => {
      if (item.ParentID && map.has(item.ParentID)) {
        map.get(item.ParentID)!.children.push(item);
      } else {
        roots.push(item);
      }
    });
    const sortFn = (a: TreeMenuItem, b: TreeMenuItem) => a.SortOrder - b.SortOrder;
    roots.sort(sortFn);
    roots.forEach(r => r.children.sort(sortFn));
    return roots;
  }

  openAddDialog(parent: TreeMenuItem | null = null) {
    this.editingItem.set(null);
    this.checkedActionCodes = ['READ'];
    this.form.reset({
      menuItemCode: '',
      menuItemName: '',
      menuItemType: 'SCREEN',
      route:        '',
      icon:         'grid',
      sortOrder:    parent ? parent.children.length : this.treeData().length,
      isVisible:    true,
      isActive:     true,
      parentId:     parent?.MenuItemID || null,
    });
    this.dialogOpen.set(true);
  }

  openEditDialog(item: TreeMenuItem) {
    this.editingItem.set(item);
    this.checkedActionCodes = [...item.actionCodeList];
    this.form.patchValue({
      menuItemCode: item.MenuItemCode,
      menuItemName: item.MenuItemName,
      menuItemType: item.MenuItemType,
      route:        item.Route || '',
      icon:         item.Icon || 'grid',
      sortOrder:    item.SortOrder,
      isVisible:    item.IsVisible,
      isActive:     item.IsActive,
      parentId:     item.ParentID,
    });
    this.dialogOpen.set(true);
  }

  closeDialog() {
    this.dialogOpen.set(false);
    this.editingItem.set(null);
  }

  toggleActionCode(code: string) {
    const idx = this.checkedActionCodes.indexOf(code);
    if (idx >= 0) this.checkedActionCodes.splice(idx, 1);
    else this.checkedActionCodes.push(code);
  }

  hasAction(code: string) { return this.checkedActionCodes.includes(code); }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);

    const v = this.form.value;
    const editing = this.editingItem();
    const payload = {
      MenuItemID:   editing?.MenuItemID || 0,
      ParentID:     v.parentId || null,
      MenuItemCode: v.menuItemCode,
      MenuItemName: v.menuItemName,
      MenuItemType: v.menuItemType,
      Route:        v.route,
      Icon:         v.icon,
      SortOrder:    v.sortOrder,
      IsVisible:    v.isVisible,
      IsActive:     v.isActive,
      actionCodes:  this.checkedActionCodes.join(','),
    };

    this.svc.saveMenuItem(payload as any).subscribe({
      next: () => {
        this.notify.show({ content: editing ? 'עודכן בהצלחה' : 'נוסף בהצלחה', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' }, animation: { type: 'fade', duration: 300 }, closable: true });
        this.closeDialog();
        this.loadData();
        this.saving.set(false);
      },
      error: (e) => {
        this.notify.show({ content: e.error?.message || 'שגיאה בשמירה', type: { style: 'error', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
        this.saving.set(false);
      },
    });
  }

  deleteItem(item: TreeMenuItem) {
    this.itemToDelete.set(item);
    this.deleteConfirmOpen.set(true);
  }

  confirmDelete() {
    const item = this.itemToDelete();
    if (!item) return;
    this.svc.deleteMenuItem(item.MenuItemID).subscribe({
      next: () => {
        this.notify.show({ content: 'הפריט נמחק', type: { style: 'warning', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
        this.loadData();
      },
    });
    this.deleteConfirmOpen.set(false);
    this.itemToDelete.set(null);
  }

  cancelDelete() {
    this.deleteConfirmOpen.set(false);
    this.itemToDelete.set(null);
  }

  toggleNode(item: TreeMenuItem) {
    item.expanded = !item.expanded;
  }

  selectNode(id: number) {
    this.selectedNodeId.set(id === this.selectedNodeId() ? null : id);
  }

  typeLabel(type: string) {
    return ITEM_TYPE_OPTIONS.find(o => o.value === type)?.label ?? type;
  }

  typeBadgeClass(type: string) {
    return { 'SCREEN': 'badge-screen', 'FOLDER': 'badge-folder', 'DIVIDER': 'badge-divider' }[type] ?? '';
  }

  getMenuItemCodePlaceholder(type: string) {
    return type === 'FOLDER' ? 'CATALOG' : type === 'SCREEN' ? 'CATALOG_PACKAGES' : 'DIVIDER_1';
  }

  getRoutePlaceholder() {
    return '/app/catalog/packages';
  }

  isPlatformItem(item: TreeMenuItem): boolean {
    return item.TenantID === 0;
  }

  actionChipColor(code: string): string {
    const groups: Record<string, string> = {
      READ: 'VIEW', EXPORT: 'VIEW', PRINT: 'VIEW', VIEW_SENSITIVE: 'VIEW', VIEW_AMOUNTS: 'VIEW', VIEW_HISTORY: 'VIEW',
      CREATE: 'CRUD', UPDATE: 'CRUD', DELETE: 'CRUD',
      APPROVE: 'WORKFLOW', REJECT: 'WORKFLOW', CANCEL: 'WORKFLOW',
      IMPORT: 'MANAGE', CLONE: 'MANAGE', LOCK: 'MANAGE',
    };
    return groups[code] ?? 'VIEW';
  }

  actionChipLabel(code: string): string {
    const labels: Record<string, string> = {
      READ: 'R', CREATE: 'C', UPDATE: 'U', DELETE: 'D',
      EXPORT: 'EX', IMPORT: 'IM', PRINT: 'PR', CLONE: 'CL',
      APPROVE: 'AP', REJECT: 'RJ', CANCEL: 'CN',
      VIEW_SENSITIVE: 'VS', VIEW_AMOUNTS: 'VA', VIEW_HISTORY: 'VH', LOCK: 'LK',
    };
    return labels[code] ?? code.slice(0, 2);
  }

  trackById(_i: number, item: TreeMenuItem) { return item.MenuItemID; }

  hasChildren = (item: TreeMenuItem) => item.children && item.children.length > 0;
  fetchChildren = (item: TreeMenuItem) => item.children;
}
