import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TreeViewModule, CheckableSettings } from '@progress/kendo-angular-treeview';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { DialogModule, DialogRef } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NotificationModule, NotificationService } from '@progress/kendo-angular-notification';
import { BadgeModule } from '@progress/kendo-angular-indicators';
import { SVGIconModule } from '@progress/kendo-angular-icons';
import {
  gearIcon, folderIcon, gridIcon, pencilIcon, trashIcon, plusIcon,
  checkIcon, xIcon, eyeIcon, eyeSlashIcon, chevronDownIcon, chevronUpIcon,
  dragAndDropIcon, menuIcon
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

  dialogOpen     = signal(false);
  editingItem    = signal<TreeMenuItem | null>(null);
  selectedNodeId = signal<number | null>(null);

  form!: FormGroup;

  // Kendo icons
  readonly icons = {
    gear: gearIcon, folder: folderIcon, grid: gridIcon, pencil: pencilIcon,
    trash: trashIcon, plus: plusIcon, check: checkIcon, x: xIcon,
    eye: eyeIcon, eyeSlash: eyeSlashIcon, chevronDown: chevronDownIcon,
    chevronUp: chevronUpIcon, drag: dragAndDropIcon, menu: menuIcon,
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
      actionCodeList: i.AvailableActions ? i.AvailableActions.split(',') : [],
    }));
    const roots: TreeMenuItem[] = [];
    map.forEach(item => {
      if (item.ParentID && map.has(item.ParentID)) {
        map.get(item.ParentID)!.children.push(item);
      } else {
        roots.push(item);
      }
    });
    roots.sort((a, b) => a.SortOrder - b.SortOrder);
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
    if (!confirm(`למחוק את "${item.MenuItemName}"?`)) return;
    this.svc.deleteMenuItem(item.MenuItemID).subscribe({
      next: () => { this.notify.show({ content: 'נמחק', type: { style: 'warning', icon: true }, position: { horizontal: 'center', vertical: 'top' } }); this.loadData(); },
    });
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

  trackById(_i: number, item: TreeMenuItem) { return item.MenuItemID; }

  // Kendo TreeView childrenField / textField helpers
  hasChildren = (item: TreeMenuItem) => item.children && item.children.length > 0;
  fetchChildren = (item: TreeMenuItem) => item.children;
}
