import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TreeListModule } from '@progress/kendo-angular-treelist';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NotificationModule, NotificationService } from '@progress/kendo-angular-notification';
import { SVGIconModule } from '@progress/kendo-angular-icons';
import { BadgeModule } from '@progress/kendo-angular-indicators';
import {
  plusIcon, pencilIcon, trashIcon, buildingsIcon, gearIcon,
  personIcon, chevronDownIcon, chevronRightIcon, folderIcon
} from '@progress/kendo-svg-icons';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RbacService, OrgUnit, JobTitle, OrgPosition, RoleItem } from '../../../core/services/rbac.service';

interface OrgUnitTree extends OrgUnit {
  children: OrgUnitTree[];
  expanded: boolean;
  level: number;
}

const UNIT_TYPES = [
  { value: 'COMPANY',    label: 'חברה',     icon: 'corporate_fare', color: '#7c3aed' },
  { value: 'DIVISION',   label: 'חטיבה',    icon: 'account_tree',   color: '#0D47FF' },
  { value: 'DEPARTMENT', label: 'מחלקה',    icon: 'business',       color: '#0891b2' },
  { value: 'TEAM',       label: 'צוות',     icon: 'groups',         color: '#059669' },
  { value: 'UNIT',       label: 'יחידה',    icon: 'people',         color: '#d97706' },
];

const TITLE_LEVELS = [
  { value: 1, label: 'מנהל בכיר (Executive)' },
  { value: 2, label: 'בכיר (Senior)'          },
  { value: 3, label: 'מנהל (Manager)'          },
  { value: 4, label: 'עובד (Employee)'         },
];

@Component({
  selector: 'app-org-chart',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TreeListModule, DialogModule, ButtonsModule,
    InputsModule, DropDownListModule, TooltipModule,
    NotificationModule, SVGIconModule, BadgeModule,
    MatIconModule, MatProgressSpinnerModule,
  ],
  providers: [NotificationService],
  templateUrl: './org-chart.component.html',
  styleUrl: './org-chart.component.scss',
})
export class OrgChartComponent implements OnInit {
  loading      = signal(true);
  saving       = signal(false);
  error        = signal('');
  view         = signal<'tree' | 'cards'>('cards');

  units        = signal<OrgUnit[]>([]);
  treeData     = signal<OrgUnitTree[]>([]);
  jobTitles    = signal<JobTitle[]>([]);
  roles        = signal<RoleItem[]>([]);

  selectedUnit      = signal<OrgUnitTree | null>(null);
  unitPositions     = signal<OrgPosition[]>([]);
  positionsLoading  = signal(false);

  unitDialogOpen    = signal(false);
  titleDialogOpen   = signal(false);
  positionDialogOpen = signal(false);
  editingUnit       = signal<OrgUnit | null>(null);
  editingTitle      = signal<JobTitle | null>(null);

  unitForm!:     FormGroup;
  titleForm!:    FormGroup;
  positionForm!: FormGroup;

  readonly icons = {
    plus: plusIcon, pencil: pencilIcon, trash: trashIcon,
    buildings: buildingsIcon, gear: gearIcon, person: personIcon,
    chevronDown: chevronDownIcon, chevronRight: chevronRightIcon, folder: folderIcon,
  };

  readonly unitTypes   = UNIT_TYPES;
  readonly titleLevels = TITLE_LEVELS;

  constructor(
    private svc: RbacService,
    private fb: FormBuilder,
    private notify: NotificationService,
  ) {}

  ngOnInit() {
    this.buildForms();
    this.loadAll();
  }

  private buildForms() {
    this.unitForm = this.fb.group({
      unitName:        ['', Validators.required],
      unitCode:        ['', Validators.required],
      unitType:        ['DEPARTMENT'],
      description:     [''],
      parentOrgUnitId: [0],
      budgetCode:      [''],
      sortOrder:       [0],
      isActive:        [true],
    });
    this.titleForm = this.fb.group({
      jobTitleName:  ['', Validators.required],
      jobTitleCode:  ['', Validators.required],
      titleLevel:    [4],
      defaultRoleId: [0],
      isActive:      [true],
    });
    this.positionForm = this.fb.group({
      jobTitleId:           [null, Validators.required],
      positionName:         [''],
      reportsToPositionId:  [0],
      headCount:            [1],
    });
  }

  loadAll() {
    this.loading.set(true);
    Promise.all([
      this.svc.getOrgUnits().toPromise(),
      this.svc.getJobTitles().toPromise(),
      this.svc.getRoles().toPromise(),
    ]).then(([unitsR, titlesR, rolesR]) => {
      this.units.set(unitsR?.data || []);
      this.jobTitles.set(titlesR?.data || []);
      this.roles.set(rolesR?.data || []);
      this.treeData.set(this.buildTree(unitsR?.data || []));
      this.loading.set(false);
    }).catch(() => { this.error.set('שגיאה בטעינה'); this.loading.set(false); });
  }

  private buildTree(units: OrgUnit[], parentId: number | null = null, level = 0): OrgUnitTree[] {
    return units
      .filter(u => (u.ParentOrgUnitID ?? null) === parentId)
      .sort((a, b) => a.SortOrder - b.SortOrder)
      .map(u => ({
        ...u,
        children: this.buildTree(units, u.OrgUnitID, level + 1),
        expanded: level < 2,
        level,
      }));
  }

  selectUnit(unit: OrgUnitTree) {
    this.selectedUnit.set(unit);
    this.loadPositions(unit.OrgUnitID);
  }

  loadPositions(unitId: number) {
    this.positionsLoading.set(true);
    this.svc.getPositions(unitId).subscribe({
      next: r => { this.unitPositions.set(r.data); this.positionsLoading.set(false); },
      error: () => { this.positionsLoading.set(false); },
    });
  }

  toggleUnit(unit: OrgUnitTree) { unit.expanded = !unit.expanded; }

  // ─── Unit CRUD ─────────────────────────────────────────────

  openAddUnit(parent: OrgUnitTree | null = null) {
    this.editingUnit.set(null);
    this.unitForm.reset({
      unitName: '', unitCode: '', unitType: parent ? 'DEPARTMENT' : 'COMPANY',
      description: '', parentOrgUnitId: parent?.OrgUnitID || 0,
      budgetCode: '', sortOrder: 0, isActive: true,
    });
    this.unitDialogOpen.set(true);
  }

  openEditUnit(unit: OrgUnit) {
    this.editingUnit.set(unit);
    this.unitForm.patchValue({
      unitName: unit.UnitName, unitCode: unit.UnitCode, unitType: unit.UnitType,
      description: unit.Description, parentOrgUnitId: unit.ParentOrgUnitID || 0,
      budgetCode: unit.BudgetCode, sortOrder: unit.SortOrder, isActive: unit.IsActive,
    });
    this.unitDialogOpen.set(true);
  }

  saveUnit() {
    if (this.unitForm.invalid) { this.unitForm.markAllAsTouched(); return; }
    this.saving.set(true);
    const editing = this.editingUnit();
    const v = this.unitForm.value;
    const payload: Partial<OrgUnit> = {
      OrgUnitID: editing?.OrgUnitID || 0,
      ...v,
      ParentOrgUnitID: v.parentOrgUnitId || null,
    };
    this.svc.saveOrgUnit(payload).subscribe({
      next: () => {
        this.unitDialogOpen.set(false);
        this.saving.set(false);
        this.loadAll();
        this.notify.show({ content: editing ? 'יחידה עודכנה' : 'יחידה נוצרה', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
      error: (e) => { this.saving.set(false); },
    });
  }

  deleteUnit(unit: OrgUnit) {
    if (!confirm(`למחוק "${unit.UnitName}"? כל תתי-היחידות יוסתרו.`)) return;
    this.svc.deleteOrgUnit(unit.OrgUnitID).subscribe({
      next: () => {
        if (this.selectedUnit()?.OrgUnitID === unit.OrgUnitID) this.selectedUnit.set(null);
        this.loadAll();
        this.notify.show({ content: 'נמחק', type: { style: 'warning', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
    });
  }

  // ─── Job Title CRUD ────────────────────────────────────────

  openAddTitle() {
    this.editingTitle.set(null);
    this.titleForm.reset({ jobTitleName: '', jobTitleCode: '', titleLevel: 4, defaultRoleId: 0, isActive: true });
    this.titleDialogOpen.set(true);
  }

  openEditTitle(title: JobTitle) {
    this.editingTitle.set(title);
    this.titleForm.patchValue({ jobTitleName: title.JobTitleName, jobTitleCode: title.JobTitleCode, titleLevel: title.TitleLevel, defaultRoleId: title.DefaultRoleID || 0, isActive: title.IsActive });
    this.titleDialogOpen.set(true);
  }

  saveTitle() {
    if (this.titleForm.invalid) { this.titleForm.markAllAsTouched(); return; }
    this.saving.set(true);
    const editing = this.editingTitle();
    this.svc.saveJobTitle({ JobTitleID: editing?.JobTitleID || 0, ...this.titleForm.value }).subscribe({
      next: () => {
        this.titleDialogOpen.set(false);
        this.saving.set(false);
        this.loadAll();
        this.notify.show({ content: editing ? 'תואר עודכן' : 'תואר נוצר', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
      error: () => { this.saving.set(false); },
    });
  }

  // ─── Position ──────────────────────────────────────────────

  openAddPosition() {
    this.positionForm.reset({ jobTitleId: null, positionName: '', reportsToPositionId: 0, headCount: 1 });
    this.positionDialogOpen.set(true);
  }

  savePosition() {
    if (this.positionForm.invalid) { this.positionForm.markAllAsTouched(); return; }
    const unit = this.selectedUnit();
    if (!unit) return;
    const v = this.positionForm.value;
    this.saving.set(true);
    this.svc.saveJobTitle({ JobTitleID: v.jobTitleId }); // just trigger — real impl uses positions endpoint
    this.svc['http']['post']('/api/org/positions', {
      orgUnitId: unit.OrgUnitID,
      jobTitleId: v.jobTitleId,
      positionName: v.positionName,
      reportsToPositionId: v.reportsToPositionId,
      headCount: v.headCount,
    }).subscribe({
      next: () => {
        this.positionDialogOpen.set(false);
        this.saving.set(false);
        this.loadPositions(unit.OrgUnitID);
        this.notify.show({ content: 'משרה נוצרה', type: { style: 'success', icon: true }, position: { horizontal: 'center', vertical: 'top' } });
      },
      error: () => { this.saving.set(false); },
    });
  }

  // ─── Helpers ───────────────────────────────────────────────

  getUnitTypeInfo(type: string) {
    return UNIT_TYPES.find(t => t.value === type) ?? UNIT_TYPES[2];
  }

  levelLabel(level: number): string {
    return TITLE_LEVELS.find(l => l.value === level)?.label ?? '';
  }

  levelBadgeColor(level: number): string {
    return ['', '#7c3aed', '#0D47FF', '#059669', '#64748b'][level] ?? '#64748b';
  }

  trackId(_i: number, item: any) { return item.OrgUnitID || item.JobTitleID || item.PositionID; }

  get allUnitsForSelect() {
    return [{ OrgUnitID: 0, UnitName: '— ללא הורה (שורש) —' }, ...this.units()];
  }

  get allRolesForSelect() {
    return [{ RoleID: 0, RoleName: '— ללא תפקיד ברירת מחדל —' }, ...this.roles()];
  }

  get allJobTitlesForSelect() {
    return this.jobTitles();
  }

  get allPositionsForSelect() {
    return [{ PositionID: 0, DisplayName: '— ידווח ישירות ליחידה —' }, ...this.unitPositions()];
  }
}
