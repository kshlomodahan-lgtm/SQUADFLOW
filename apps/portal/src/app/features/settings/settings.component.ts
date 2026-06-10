import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '@progress/kendo-angular-menu';
import { SwitchModule, TextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';
import { IconsModule } from '@progress/kendo-angular-icons';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GridModule, PageChangeEvent, RowArgs } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { SVGIcon, paletteIcon, gearIcon, passwordIcon, bellIcon, buildingsIcon, walletIcon, tableIcon, plusIcon, pencilIcon, lockIcon, clipboardTextIcon, filterIcon, calendarIcon, chartLineIcon, menuIcon } from '@progress/kendo-svg-icons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeService, COLOR_SCHEMES, ColorScheme } from '../../core/services/theme.service';
import { AuthService } from '../../core/services/auth.service';
import { CounterService } from '../../core/services/counter.service';
import { Counter } from '../../core/models/counter.model';
import { AuditActionTypesComponent } from '../audit/action-types/audit-action-types.component';
import { AuditEntityTypesComponent } from '../audit/entity-types/audit-entity-types.component';
import { MenuManagerComponent } from './menu-manager/menu-manager.component';
import { RolesManagerComponent } from './roles-manager/roles-manager.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { GroupsComponent } from './groups/groups.component';

interface SettingGroup  { id: string; text: string; icon: SVGIcon; }
interface EditNavGroup  { id: string; text: string; icon: SVGIcon; }

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuModule, SwitchModule,
            TextBoxModule, NumericTextBoxModule, DropDownListModule,
            ButtonModule, IndicatorsModule, NotificationModule, IconsModule,
            GridModule, MatProgressSpinnerModule, DialogModule,
            AuditActionTypesComponent, AuditEntityTypesComponent,
            MenuManagerComponent, RolesManagerComponent, OrgChartComponent, GroupsComponent],
  providers: [NotificationService],
  templateUrl: './settings.component.html',
  styleUrl:    './settings.component.scss',
})
export class SettingsComponent {

  // ── Nav ──────────────────────────────────────────────────
  schemes     = COLOR_SCHEMES;
  saving           = signal(false);
  isAdmin          = signal(false);
  isPlatformAdmin  = signal(false);
  activeGroup      = signal('general');
  auditSubGroup    = signal<'action-types' | 'entity-types'>('action-types');

  readonly groups: SettingGroup[] = [
    { id: 'general',       text: 'כללי',          icon: gearIcon           },
    { id: 'security',      text: 'אבטחה',         icon: passwordIcon       },
    { id: 'theme',         text: 'מראה ועיצוב',  icon: paletteIcon        },
    { id: 'notifications', text: 'התראות',        icon: bellIcon           },
    { id: 'organization',  text: 'ארגון',         icon: buildingsIcon      },
    { id: 'billing',       text: 'חיוב ומנוי',   icon: walletIcon         },
    { id: 'counters',      text: 'מונים',         icon: tableIcon          },
    { id: 'audit-log',     text: 'יומן פעילות',  icon: clipboardTextIcon  },
    { id: 'menu-tree',     text: 'עץ תפריטים',  icon: menuIcon           },
    { id: 'roles',         text: 'תפקידים והרשאות', icon: lockIcon        },
    { id: 'org-chart',     text: 'מבנה ארגוני', icon: buildingsIcon      },
    { id: 'groups',        text: 'קבוצות',       icon: filterIcon         },
  ];

  // ── Counters — רשימה ──────────────────────────────────────
  countersLoading = signal(false);
  countersError   = signal('');
  counters        = signal<Counter[]>([]);
  levelFilter     = signal<'TENANT' | 'CUSTOMER'>('TENANT');

  counterSkip     = 0;
  counterPageSize = 10;
  counterSort: SortDescriptor[] = [];

  get counterGridData()  { return orderBy(this.counters(), this.counterSort); }
  get counterPagedData() { return this.counterGridData.slice(this.counterSkip, this.counterSkip + this.counterPageSize); }

  readonly dateFormatOptions = [
    { text: 'ללא',       value: 'NONE'       },
    { text: 'שנה',       value: 'YEAR'       },
    { text: 'שנה+חודש',  value: 'YEAR_MONTH' },
  ];
  readonly resetPeriodOptions = [
    { text: 'ללא איפוס', value: 'NEVER'   },
    { text: 'שנתי',      value: 'ANNUAL'  },
    { text: 'חודשי',     value: 'MONTHLY' },
  ];
  readonly outputTypeOptions = [
    { text: 'מספרי',  value: 'NUMERIC' },
    { text: 'מחרוזת', value: 'STRING'  },
  ];

  plusIcon           = plusIcon;
  pencilIcon         = pencilIcon;
  lockIcon           = lockIcon;
  clipboardTextIcon  = clipboardTextIcon;
  filterIcon         = filterIcon;
  calendarIcon       = calendarIcon;
  chartLineIcon      = chartLineIcon;

  readonly editGroups: EditNavGroup[] = [
    { id: 'identity', text: 'פרטי זיהוי',    icon: clipboardTextIcon },
    { id: 'basic',    text: 'הגדרות בסיסיות', icon: pencilIcon        },
    { id: 'range',    text: 'טווח ערכים',     icon: filterIcon        },
    { id: 'reset',    text: 'מחזוריות איפוס', icon: calendarIcon      },
    { id: 'values',   text: 'ערכים נוכחיים',  icon: chartLineIcon     },
    { id: 'lock',     text: 'נעילה',          icon: lockIcon          },
  ];

  editActiveGroup = signal('identity');

  private readonly editGroupFields: Record<string, string[]> = {
    basic:  ['counterName', 'prefix', 'dateFormat', 'outputType'],
    range:  ['stepValue', 'startValue', 'maxValue'],
    reset:  ['resetPeriod'],
    lock:   ['isLocked'],
  };

  // ── Expand ───────────────────────────────────────────────
  expandedKeys = signal(new Set<string>());

  isDetailExpanded = (args: RowArgs): boolean =>
    this.expandedKeys().has(this.rowKey(args.dataItem as Counter));

  // ── New Counter Dialog ───────────────────────────────────
  newDialogOpen  = signal(false);
  newForm!: FormGroup;
  newSaving      = signal(false);
  newActiveGroup = signal('basic');

  readonly newGroups: EditNavGroup[] = [
    { id: 'basic', text: 'הגדרות בסיסיות', icon: pencilIcon   },
    { id: 'range', text: 'טווח ערכים',     icon: filterIcon   },
    { id: 'reset', text: 'מחזוריות איפוס', icon: calendarIcon },
  ];

  private readonly newGroupFields: Record<string, string[]> = {
    basic: ['counterKey', 'counterName', 'prefix'],
    range: ['stepValue', 'startValue', 'maxValue'],
    reset: ['resetPeriod'],
  };

  private navigateToNewError() {
    for (const [group, fields] of Object.entries(this.newGroupFields)) {
      if (fields.some(f => this.newForm.get(f)?.invalid)) {
        this.newActiveGroup.set(group); return;
      }
    }
  }

  // ── Edit Screen ──────────────────────────────────────────
  editScreenOpen  = signal(false);
  editSaving      = signal(false);
  editingCounter: Counter | null = null;
  editForm!: FormGroup;

  constructor(
    public  theme:      ThemeService,
    public  auth:       AuthService,
    private notif:      NotificationService,
    private counterSvc: CounterService,
    private fb:         FormBuilder,
  ) {
    const roleId = this.auth.user()?.roleId ?? 3;
    this.isAdmin.set(roleId <= 2);
    this.isPlatformAdmin.set(roleId === 1);
    this.initNewForm();
  }

  // ── Nav ──────────────────────────────────────────────────
  selectGroup(id: string) {
    this.activeGroup.set(id);
    if (id === 'counters') this.loadCounters();
  }

  selectScheme(id: ColorScheme) { this.theme.setScheme(id); }
  toggleDark(val: boolean)      { if (val !== this.theme.isDark()) this.theme.toggleMode(); }

  saveUser() {
    this.saving.set(true);
    this.theme.saveUserTheme().subscribe({
      next:  () => { this.saving.set(false); this.notify('ההעדפה האישית נשמרה', 'success'); },
      error: () => { this.saving.set(false); this.notify('שגיאה בשמירה', 'error'); },
    });
  }

  saveOrg() {
    this.saving.set(true);
    this.theme.saveOrgTheme().subscribe({
      next:  () => { this.saving.set(false); this.notify('ברירת המחדל לארגון עודכנה', 'success'); },
      error: () => { this.saving.set(false); this.notify('שגיאה בשמירה', 'error'); },
    });
  }

  // ── Counters — טעינה ─────────────────────────────────────
  setLevelFilter(level: 'TENANT' | 'CUSTOMER') {
    this.levelFilter.set(level);
    this.loadCounters();
  }

  loadCounters() {
    this.countersLoading.set(true);
    this.countersError.set('');
    this.counterSvc.getAll(this.levelFilter()).subscribe({
      next: r => {
        this.counters.set(r.data ?? []);
        this.countersLoading.set(false);
      },
      error: () => {
        this.countersError.set('שגיאה בטעינת מונים');
        this.countersLoading.set(false);
      },
    });
  }

  // ── Expand ───────────────────────────────────────────────
  toggleExpand(c: Counter) {
    const k = this.rowKey(c);
    const next = new Set(this.expandedKeys());
    next.has(k) ? next.delete(k) : next.add(k);
    this.expandedKeys.set(next);
  }
  isExpanded(c: Counter): boolean { return this.expandedKeys().has(this.rowKey(c)); }


  // ── Lock ─────────────────────────────────────────────────
  lockCounter(c: Counter) {
    const newLocked = !c.IsLocked;
    this.counterSvc.lock(c.CounterKey, newLocked, c.CounterLevel, c.CustomerID, c.ProductID).subscribe({
      next: (r) => {
        this.counters.update(list =>
          list.map(x => this.rowKey(x) === this.rowKey(c) ? { ...x, IsLocked: newLocked } : x)
        );
        if (this.editingCounter && this.rowKey(this.editingCounter) === this.rowKey(c))
          this.editingCounter = { ...this.editingCounter, IsLocked: newLocked };
        this.notify(r.message, 'success');
      },
      error: () => this.notify('שגיאה בנעילת מונה', 'error'),
    });
  }

  // ── Reset ────────────────────────────────────────────────
  resetCounter(c: Counter) {
    this.counterSvc.reset(c.CounterKey, c.CounterLevel, c.CustomerID, c.ProductID).subscribe({
      next: () => {
        this.counters.update(list =>
          list.map(x => this.rowKey(x) === this.rowKey(c) ? { ...x, CurrentValue: x.StartValue } : x)
        );
        this.notify('המונה השוטף אופס', 'success');
      },
      error: () => this.notify('שגיאה באיפוס', 'error'),
    });
  }

  // ── New Counter Dialog ───────────────────────────────────
  private initNewForm() {
    this.newForm = this.fb.group({
      counterLevel: ['TENANT'],
      customerID:   [0, [Validators.required, Validators.min(0)]],
      productID:    [0, [Validators.required, Validators.min(0)]],
      counterKey:   ['', [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      counterName:  ['', Validators.required],
      prefix:       ['', Validators.required],
      dateFormat:   ['NONE'],
      stepValue:    [1,       Validators.min(1)],
      startValue:   [1,       Validators.min(0)],
      maxValue:     [999999,  Validators.min(1)],
      outputType:   ['NUMERIC'],
      resetPeriod:  ['NEVER'],
    });
  }

  openNewDialog() {
    this.initNewForm();
    this.newActiveGroup.set('basic');
    if (this.isPlatformAdmin()) this.newForm.get('counterLevel')?.setValue('TENANT');
    this.newDialogOpen.set(true);
  }
  closeNewDialog() { this.newDialogOpen.set(false); }

  submitNewCounter() {
    if (this.newForm.invalid) { this.newForm.markAllAsTouched(); this.navigateToNewError(); return; }
    this.newSaving.set(true);
    this.counterSvc.create(this.newForm.value).subscribe({
      next: () => {
        this.newSaving.set(false);
        this.newDialogOpen.set(false);
        this.loadCounters();
        this.notify('המונה נוצר בהצלחה', 'success');
      },
      error: (err) => {
        this.newSaving.set(false);
        this.notify(err?.error?.message ?? 'שגיאה ביצירת מונה', 'error');
      },
    });
  }

  // ── Edit Screen ──────────────────────────────────────────
  private navigateToEditError() {
    for (const [group, fields] of Object.entries(this.editGroupFields)) {
      if (fields.some(f => this.editForm.get(f)?.invalid)) {
        this.editActiveGroup.set(group); return;
      }
    }
  }

  openEditDialog(c: Counter) {
    this.editingCounter = c;
    this.editActiveGroup.set('identity');
    this.editForm = this.fb.group({
      counterName:  [c.CounterName,  Validators.required],
      prefix:       [c.Prefix,       Validators.required],
      dateFormat:   [c.DateFormat],
      stepValue:    [c.StepValue,    [Validators.required, Validators.min(1)]],
      startValue:   [c.StartValue,   [Validators.required, Validators.min(0)]],
      maxValue:     [c.MaxValue,     [Validators.required, Validators.min(1)]],
      outputType:   [c.OutputType],
      resetPeriod:  [c.ResetPeriod],
      isLocked:     [c.IsLocked],
    });
    this.editScreenOpen.set(true);
  }

  closeEditDialog() { this.editScreenOpen.set(false); this.editingCounter = null; }

  submitEditCounter() {
    if (!this.editingCounter || this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      this.navigateToEditError();
      return;
    }
    this.editSaving.set(true);
    const c    = this.editingCounter;
    const vals = this.editForm.value;

    this.counterSvc.update(c.CounterKey, {
      customerID: c.CustomerID, productID: c.ProductID, counterLevel: c.CounterLevel,
      counterName: vals.counterName,   prefix:     vals.prefix,
      dateFormat:  vals.dateFormat,    textPrefix: '',
      stepValue:   vals.stepValue,     startValue: vals.startValue,
      maxValue:    vals.maxValue,      outputType:  vals.outputType,
      resetPeriod: vals.resetPeriod,
    } as any).subscribe({
      next: () => {
        const lockChanged = vals.isLocked !== c.IsLocked;
        const finish = () => {
          this.editSaving.set(false);
          this.editScreenOpen.set(false);
          this.editingCounter = null;
          this.loadCounters();
          this.notify('המונה עודכן בהצלחה', 'success');
        };
        if (lockChanged)
          this.counterSvc.lock(c.CounterKey, vals.isLocked, c.CounterLevel, c.CustomerID, c.ProductID)
            .subscribe({ next: finish, error: finish });
        else finish();
      },
      error: (err) => {
        this.editSaving.set(false);
        this.notify(err?.error?.message ?? 'שגיאה בעדכון מונה', 'error');
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────
  levelLabel(level: string): string {
    return ({ PLATFORM: 'פלטפורמה', TENANT: 'ארגון', CUSTOMER: 'לקוח', PRODUCT: 'מוצר' } as any)[level] ?? level;
  }
  levelClass(level: string): string {
    return ({ PLATFORM: 'chip-platform', TENANT: 'chip-tenant', CUSTOMER: 'chip-customer', PRODUCT: 'chip-product' } as any)[level] ?? '';
  }
  outputTypeLabel(v: string): string { return v === 'STRING' ? 'מחרוזת' : 'מספרי'; }
  resetPeriodLabel(v: string): string {
    return ({ NEVER: 'ללא', ANNUAL: 'שנתי', MONTHLY: 'חודשי' } as any)[v] ?? v;
  }
  dateFormatLabel(v: string): string {
    return ({ NONE: 'ללא', YEAR: 'שנה', YEAR_MONTH: 'שנה+חודש', TEXT: 'טקסט' } as any)[v] ?? v;
  }

  formatDate(val: string): string {
    if (!val || val.startsWith('1900') || val.startsWith('1899')) return '—';
    return new Date(val).toLocaleDateString('he-IL', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

  onCounterPageChange(e: PageChangeEvent) { this.counterSkip = e.skip; this.counterPageSize = e.take; }
  onCounterSortChange(s: SortDescriptor[]) { this.counterSort = s; }

  private rowKey(c: Counter): string { return `${c.TenantID}_${c.CustomerID}_${c.ProductID}_${c.CounterKey}`; }

  private notify(msg: string, style: 'success' | 'error') {
    this.notif.show({
      content: msg, closable: true,
      type: { style, icon: true },
      animation: { type: 'slide', duration: 300 },
      position: { horizontal: 'center', vertical: 'top' },
    });
  }
}
