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

import { RbacService, MenuItem, ScreenFieldConfig } from '../../../core/services/rbac.service';

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
  loading     = signal(true);
  saving      = signal(false);
  syncing     = signal(false);
  error       = signal('');
  showPreview = signal(false);

  allItems  = signal<MenuItem[]>([]);
  treeData  = signal<TreeMenuItem[]>([]);
  flatItems = computed(() => this.allItems());

  dialogOpen       = signal(false);
  editingItem      = signal<TreeMenuItem | null>(null);
  selectedNodeId   = signal<number | null>(null);
  deleteConfirmOpen = signal(false);
  itemToDelete     = signal<TreeMenuItem | null>(null);

  // Edit modal (large 860px sidebar-nav dialog)
  editModalOpen  = signal(false);
  editModalGroup = signal('general');

  // Detail state (shared between modal and field ops)
  detailItem    = signal<TreeMenuItem | null>(null);
  detailSaving  = signal(false);
  detailForm!: FormGroup;
  detailActionCodes: string[] = [];

  // Screen field configs
  fieldConfigs     = signal<ScreenFieldConfig[]>([]);
  fieldScanning    = signal(false);
  fieldSaving      = signal(false);
  activeFieldGroup = signal('');
  fieldGroups      = computed<string[]>(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    this.fieldConfigs().forEach(f => { if (!seen.has(f.FieldGroup)) { seen.add(f.FieldGroup); result.push(f.FieldGroup); } });
    return result;
  });

  readonly fieldPermOptions = [
    { value: '',       label: 'גלוי לכולם' },
    { value: 'UPDATE', label: 'נדרש: עריכה' },
    { value: 'VIEW',   label: 'נדרש: צפייה' },
  ];

  readonly fieldTypeIcon: Record<string, string> = {
    text: 'text_fields', email: 'alternate_email', number: '123',
    dropdown: 'arrow_drop_down_circle', textarea: 'notes',
    file: 'attach_file', boolean: 'toggle_on', password: 'lock',
  };

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
    this.buildDetailForm();
    this.loadData();
  }

  private buildDetailForm() {
    this.detailForm = this.fb.group({
      menuItemName: ['', Validators.required],
      menuItemCode: ['', Validators.required],
      route:        [''],
      icon:         ['grid'],
      sortOrder:    [0],
      isVisible:    [true],
      isActive:     [true],
      parentId:     [0],
    });
  }

  selectNode(id: number) {
    this.selectedNodeId.set(id === this.selectedNodeId() ? null : id);
  }

  get editNavGroups(): { id: string; text: string; matIcon: string }[] {
    const item = this.detailItem();
    const groups: { id: string; text: string; matIcon: string }[] = [
      { id: 'general',     text: 'פרטי פריט',  matIcon: 'tune' },
    ];
    if (item?.MenuItemType === 'SCREEN') {
      groups.push({ id: 'permissions', text: 'הרשאות',     matIcon: 'verified_user' });
      groups.push({ id: 'fields',      text: 'שדות המסך',  matIcon: 'view_list' });
    }
    return groups;
  }

  loadFieldConfigs(code: string) {
    this.svc.getScreenFields(code).subscribe({
      next: r => { this.fieldConfigs.set(r.data || []); this.autoSelectFieldGroup(); },
      error: () => this.fieldConfigs.set([]),
    });
  }

  private autoSelectFieldGroup() {
    const groups = this.fieldGroups();
    if (groups.length && !groups.includes(this.activeFieldGroup())) {
      this.activeFieldGroup.set(groups[0]);
    }
  }

  scanFields() {
    const item = this.detailItem();
    if (!item) return;
    this.fieldScanning.set(true);
    this.svc.scanScreenFields(item.MenuItemCode).subscribe({
      next: r => {
        this.fieldConfigs.set(r.data || []);
        this.autoSelectFieldGroup();
        this.fieldScanning.set(false);
        this.notify.show({ content: r.message || 'שדות נסרקו', type: { style: 'success', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 2500 });
      },
      error: () => {
        this.fieldScanning.set(false);
        this.notify.show({ content: 'שגיאה בסריקה', type: { style: 'error', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 3000 });
      },
    });
  }

  getFieldsInGroup(group: string): ScreenFieldConfig[] {
    return this.fieldConfigs().filter(f => f.FieldGroup === group);
  }

  updateFieldPerm(fieldCode: string, prop: 'IsVisible' | 'RequiredAction' | 'IsAudited', value: any) {
    this.fieldConfigs.update(list =>
      list.map(f => f.FieldCode === fieldCode ? { ...f, [prop]: value } : f)
    );
  }

  saveFieldConfigs() {
    const item = this.detailItem();
    if (!item) return;
    this.fieldSaving.set(true);
    const payload = this.fieldConfigs().map(f => ({
      fieldCode: f.FieldCode, isVisible: f.IsVisible, requiredAction: f.RequiredAction, isAudited: f.IsAudited,
    }));
    this.svc.saveScreenFields(item.MenuItemCode, payload).subscribe({
      next: () => {
        this.fieldSaving.set(false);
        this.notify.show({ content: 'הרשאות שדות נשמרו', type: { style: 'success', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 2500 });
      },
      error: () => {
        this.fieldSaving.set(false);
        this.notify.show({ content: 'שגיאה בשמירה', type: { style: 'error', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 3000 });
      },
    });
  }

  closeDetail() { this.closeEditModal(); }

  closeEditModal() {
    this.editModalOpen.set(false);
    this.detailItem.set(null);
    this.fieldConfigs.set([]);
  }

  saveEditModal() {
    if (this.detailForm.invalid || !this.detailItem()) return;
    this.detailSaving.set(true);
    const v = this.detailForm.getRawValue();
    const item = this.detailItem()!;
    const payload = {
      MenuItemID:   item.MenuItemID,
      ParentID:     v.parentId || 0,
      MenuItemCode: v.menuItemCode,
      MenuItemName: v.menuItemName,
      MenuItemType: item.MenuItemType,
      Route:        v.route || '',
      Icon:         v.icon || 'grid',
      SortOrder:    v.sortOrder,
      IsVisible:    v.isVisible,
      IsActive:     v.isActive,
      actionCodes:  this.detailActionCodes.join(','),
    };
    this.svc.saveMenuItem(payload as any).subscribe({
      next: () => {
        this.detailSaving.set(false);
        this.notify.show({ content: 'נשמר בהצלחה', type: { style: 'success', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 2500 });
        this.closeEditModal();
        this.loadData();
      },
      error: () => {
        this.detailSaving.set(false);
        this.notify.show({ content: 'שגיאה בשמירה', type: { style: 'error', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 3000 });
      },
    });
  }

  hasDetailAction(code: string): boolean { return this.detailActionCodes.includes(code); }

  toggleDetailAction(code: string) {
    if (this.hasDetailAction(code)) {
      this.detailActionCodes = this.detailActionCodes.filter(c => c !== code);
    } else {
      this.detailActionCodes = [...this.detailActionCodes, code];
    }
  }

  saveDetail() { this.saveEditModal(); }

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
      parentId:     [0],
    });
  }

  loadData() {
    this.loading.set(true);
    this.svc.getMenuItems().subscribe({
      next: r => {
        const items: MenuItem[] = r.data;
        // Ensure root "ראשי" FOLDER exists for this tenant (exclude platform items TenantID=0)
        const hasRootFolder = items.some(i => i.MenuItemType === 'FOLDER' && !i.ParentID && i.TenantID !== 0);
        if (!hasRootFolder) {
          this.svc.saveMenuItem({
            MenuItemID: 0, ParentID: null,
            MenuItemCode: 'MAIN', MenuItemName: 'ראשי',
            MenuItemType: 'FOLDER', Route: '', Icon: 'menu',
            SortOrder: 0, IsVisible: true, IsActive: true,
            actionCodes: '',
          } as any).subscribe({ next: () => this.loadData() });
          return;
        }
        this.allItems.set(items);
        this.treeData.set(this.buildTree(items));
        this.loading.set(false);
      },
      error: () => { this.error.set('שגיאה בטעינת עץ התפריטים'); this.loading.set(false); },
    });
  }

  syncFromRoutes() {
    this.syncing.set(true);
    this.svc.syncMenuFromRoutes().subscribe({
      next: r => {
        this.allItems.set(r.data);
        this.treeData.set(this.buildTree(r.data));
        this.syncing.set(false);
        this.notify.show({ content: r.message || 'עץ התפריטים סונכרן בהצלחה', type: { style: 'success', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 3000 });
      },
      error: () => {
        this.syncing.set(false);
        this.notify.show({ content: 'שגיאה בסנכרון עץ התפריטים', type: { style: 'error', icon: true }, position: { horizontal: 'right', vertical: 'top' }, animation: { type: 'fade', duration: 400 }, hideAfter: 4000 });
      },
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
      parentId:     parent?.MenuItemID || 0,
    });
    this.dialogOpen.set(true);
  }

  openEditDialog(item: TreeMenuItem) {
    const actionList = item.AvailableActions ? item.AvailableActions.split(',').filter(Boolean) : [];
    this.detailItem.set(item);
    this.detailActionCodes = actionList;
    this.detailForm.reset({
      menuItemName: item.MenuItemName,
      menuItemCode: item.MenuItemCode,
      route:        item.Route || '',
      icon:         item.Icon || 'grid',
      sortOrder:    item.SortOrder,
      isVisible:    item.IsVisible,
      isActive:     item.IsActive,
      parentId:     item.ParentID || 0,
    });
    item.TenantID === 0 ? this.detailForm.disable() : this.detailForm.enable();
    this.fieldConfigs.set([]);
    if (item.MenuItemType === 'SCREEN' && item.TenantID !== 0) {
      this.loadFieldConfigs(item.MenuItemCode);
    }
    this.editModalGroup.set('general');
    this.editModalOpen.set(true);
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
      ParentID:     v.parentId || 0,
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

  isRootFolder(item: MenuItem): boolean {
    return item.MenuItemCode === 'MAIN' && !item.ParentID;
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

  // ─── Parent folder dropdown options ───────────────────────
  get parentFolderOptions(): { value: number; label: string }[] {
    const editingId = this.editingItem()?.MenuItemID;
    const folders = this.allItems()
      .filter(i => i.MenuItemType === 'FOLDER' && i.MenuItemID !== editingId)
      .sort((a, b) => a.SortOrder - b.SortOrder);
    return [
      { value: 0, label: '— שורש (ללא תיקייה) —' },
      ...folders.map(f => ({ value: f.MenuItemID, label: this.getItemLabel(f as any) })),
    ];
  }

  // ─── Reorder ───────────────────────────────────────────────
  // Only consider tenant-owned siblings (skip platform items TenantID=0)
  getSiblings(item: MenuItem): MenuItem[] {
    const parentId = item.ParentID ?? null;
    return this.allItems()
      .filter(i => (i.ParentID ?? null) === parentId && i.TenantID !== 0)
      .sort((a, b) => a.SortOrder - b.SortOrder);
  }

  isFirstSibling(item: MenuItem): boolean {
    const siblings = this.getSiblings(item);
    return siblings.length === 0 || siblings[0].MenuItemID === item.MenuItemID;
  }

  isLastSibling(item: MenuItem): boolean {
    const siblings = this.getSiblings(item);
    return siblings.length === 0 || siblings[siblings.length - 1].MenuItemID === item.MenuItemID;
  }

  moveUp(item: TreeMenuItem, event: Event) {
    event.stopPropagation();
    const siblings = this.getSiblings(item);
    const idx = siblings.findIndex(s => s.MenuItemID === item.MenuItemID);
    if (idx <= 0) return;
    this.swapSortOrder(item, siblings[idx - 1] as TreeMenuItem);
  }

  moveDown(item: TreeMenuItem, event: Event) {
    event.stopPropagation();
    const siblings = this.getSiblings(item);
    const idx = siblings.findIndex(s => s.MenuItemID === item.MenuItemID);
    if (idx >= siblings.length - 1) return;
    this.swapSortOrder(item, siblings[idx + 1] as TreeMenuItem);
  }

  private swapSortOrder(a: TreeMenuItem, b: MenuItem) {
    const aSort = a.SortOrder;
    const bSort = b.SortOrder;
    const bTree = b as TreeMenuItem;
    this.svc.saveMenuItem({ ...a, SortOrder: bSort, actionCodes: a.actionCodeList.join(',') })
      .subscribe({ next: () =>
        this.svc.saveMenuItem({ ...bTree, SortOrder: aSort, actionCodes: bTree.actionCodeList?.join(',') || '' })
          .subscribe({ next: () => this.loadData() })
      });
  }

  private readonly menuItemLabels: Record<string, string> = {
    'DASHBOARD':          'דשבורד',
    'ORGANIZATIONS':      'ארגונים',
    'USERS':              'משתמשים',
    'CATALOG':            'קטלוג מוצרים',
    'CATALOG_PRODUCTS':   'מוצרים',
    'CATALOG_PACKAGES':   'חבילות',
    'CATALOG_CATEGORIES': 'קטגוריות',
    'SETTINGS':           'הגדרות',
    'SETTINGS_GENERAL':   'הגדרות כלליות',
    'SETTINGS_ROLES':     'תפקידים והרשאות',
    'SETTINGS_ORGCHART':  'מבנה ארגוני',
    'SETTINGS_MENU':      'עץ תפריטים',
    'SETTINGS_SECURITY':  'אבטחה',
    'AUDIT':              'יומן פעילות',
    'SETTINGS_AUDIT_LOG': 'יומן פעילות',
    'DEVTOOLS':           'DevTools',
    'DIVIDER_1':          '—',
    'MAIN':               'ראשי',
  };

  getItemLabel(item: TreeMenuItem | MenuItem): string {
    // Platform items (TenantID=0) may have garbled DB encoding — use hardcoded map
    if (item.TenantID === 0) {
      return this.menuItemLabels[item.MenuItemCode] ?? item.MenuItemName;
    }
    // Tenant items: use saved name, fall back to map only when name is empty
    return item.MenuItemName || this.menuItemLabels[item.MenuItemCode] || item.MenuItemCode;
  }

  trackById(_i: number, item: TreeMenuItem) { return item.MenuItemID; }

  hasChildren = (item: TreeMenuItem) => item.children && item.children.length > 0;
  fetchChildren = (item: TreeMenuItem) => item.children;
}
