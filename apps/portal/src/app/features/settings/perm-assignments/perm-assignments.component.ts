import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GridModule, PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';

interface Assignment {
  AssignmentID: number;
  TenantID:     number;
  PermCodeID:   number;
  PermCode:     string;
  PermName:     string;
  Scope:        string;
  ControlType:  string;
  SourceType:   string;
  EntityType:   string;
  EntityID:     number;
  EntityName:   string;
  Actions:      string;
  IsGrant:      boolean;
  IsActive:     boolean;
}

interface PermOption { PermCodeID: number; PermName: string; PermCode: string; Scope: string; SourceType: string; }
interface EntityOption { id: number; name: string; }

const ALL_ACTIONS = ['VIEW', 'CREATE', 'EDIT', 'DELETE', 'EXPORT', 'EXECUTE'];

@Component({
  selector: 'app-perm-assignments',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GridModule, DialogModule,
            ButtonModule, TextBoxModule, DropDownListModule, IndicatorsModule,
            MatProgressSpinnerModule, NotificationModule],
  providers: [NotificationService],
  templateUrl: './perm-assignments.component.html',
  styleUrl:    './perm-assignments.component.scss',
})
export class PermAssignmentsComponent implements OnInit {
  @ViewChild(GridComponent) grid!: GridComponent;

  loading    = signal(true);
  error      = signal('');
  items      = signal<Assignment[]>([]);
  dialogOpen = signal(false);
  saving     = signal(false);

  editingItem: Assignment | null = null;
  expandedIds = new Set<number>();

  filterEntity = signal('');
  filterScope  = signal('');

  form!: FormGroup;
  skip     = 0;
  pageSize = 25;
  sort: SortDescriptor[] = [{ field: 'Scope', dir: 'asc' }];

  // form state
  selectedPerm:       PermOption | null = null;
  selectedEntityType  = 'PROFILE';
  selectedEntity:     EntityOption | null = null;
  selectedActions:    Record<string, boolean> = {};

  allPerms     = signal<PermOption[]>([]);
  entityOptions = signal<EntityOption[]>([]);

  readonly entityTypes = [
    { value: 'PROFILE',       label: 'פרופיל'        },
    { value: 'GROUP',         label: 'קבוצה'         },
    { value: 'CONTENT_GROUP', label: 'קבוצת תוכן'  },
    { value: 'USER',          label: 'משתמש'         },
  ];

  readonly allActions = ALL_ACTIONS;

  get isScanner() { return this.selectedPerm?.SourceType === 'SCANNER'; }
  get isLogic()   { return this.selectedPerm?.SourceType === 'MANUAL';  }

  get filtered() {
    let lst = orderBy(this.items(), this.sort);
    const et = this.filterEntity();
    const sc = this.filterScope();
    if (et) lst = lst.filter(a => a.EntityType === et);
    if (sc) lst = lst.filter(a => a.Scope === sc);
    return lst;
  }
  get pagedData() { return this.filtered.slice(this.skip, this.skip + this.pageSize); }

  constructor(private http: HttpClient, private fb: FormBuilder,
              private notif: NotificationService) {}

  ngOnInit() { this.load(); this.loadPerms(); }

  load() {
    this.loading.set(true);
    this.http.get<any>('/api/perm-assignments').subscribe({
      next:  r => { this.items.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת שיוכים'); this.loading.set(false); },
    });
  }

  loadPerms() {
    this.http.get<any>('/api/permission-codes').subscribe({
      next: r => this.allPerms.set(r.data ?? []),
    });
  }

  loadEntities() {
    const routes: Record<string, string> = {
      PROFILE:       '/api/profiles',
      GROUP:         '/api/groups',
      CONTENT_GROUP: '/api/content-groups',
      USER:          '/api/users',
    };
    const url = routes[this.selectedEntityType];
    this.entityOptions.set([]);
    this.http.get<any>(url).subscribe({
      next: r => {
        const raw = r.data ?? [];
        const opts: EntityOption[] = raw.map((x: any) => ({
          id:   x.ProfileID ?? x.GroupID ?? x.ContentGroupID ?? x.UserID,
          name: x.ProfileName ?? x.GroupName ?? x.ContentGroupName ?? x.FullName ?? x.UserName ?? '',
        }));
        this.entityOptions.set(opts);
      },
    });
  }

  openNew() {
    this.editingItem        = null;
    this.selectedPerm       = null;
    this.selectedEntityType = 'PROFILE';
    this.selectedEntity     = null;
    this.selectedActions    = {};
    this.form = this.fb.group({ isGrant: [true], isActive: [true] });
    this.loadEntities();
    this.dialogOpen.set(true);
  }

  openEdit(a: Assignment) {
    this.editingItem        = a;
    this.selectedPerm       = this.allPerms().find(p => p.PermCodeID === a.PermCodeID) ?? null;
    this.selectedEntityType = a.EntityType;
    this.selectedEntity     = { id: a.EntityID, name: a.EntityName };
    this.selectedActions    = {};
    a.Actions.split(',').filter(Boolean).forEach(ac => this.selectedActions[ac] = true);
    this.form = this.fb.group({ isGrant: [a.IsGrant], isActive: [a.IsActive] });
    this.loadEntities();
    this.dialogOpen.set(true);
  }

  onPermChange(perm: PermOption) {
    this.selectedPerm    = perm;
    this.selectedActions = {};
  }

  onEntityTypeChange(type: string) {
    this.selectedEntityType = type;
    this.selectedEntity     = null;
    this.loadEntities();
  }

  toggleAction(ac: string) {
    this.selectedActions[ac] = !this.selectedActions[ac];
  }

  save() {
    if (!this.editingItem && !this.selectedPerm)
      return this.notify('יש לבחור הרשאה', 'error');
    if (!this.editingItem && !this.selectedEntity)
      return this.notify('יש לבחור ישות', 'error');

    this.saving.set(true);
    const v       = this.form.getRawValue();
    const actions = Object.entries(this.selectedActions)
      .filter(([, v]) => v).map(([k]) => k).join(',');

    const payload: any = {
      actions:  actions,
      isGrant:  v.isGrant,
      isActive: v.isActive,
    };

    let req;
    if (this.editingItem) {
      req = this.http.put<any>(`/api/perm-assignments/${this.editingItem.AssignmentID}`, payload);
    } else {
      payload.permCodeId  = this.selectedPerm!.PermCodeID;
      payload.entityType  = this.selectedEntityType;
      payload.entityId    = this.selectedEntity!.id;
      payload.entityName  = this.selectedEntity!.name;
      req = this.http.post<any>('/api/perm-assignments', payload);
    }

    req.subscribe({
      next:  () => {
        this.saving.set(false);
        this.dialogOpen.set(false);
        this.load();
        this.notify(this.editingItem ? 'עודכן בהצלחה' : 'שיוך נוצר בהצלחה', 'success');
      },
      error: err => { this.saving.set(false); this.notify(err?.error?.message ?? 'שגיאה', 'error'); },
    });
  }

  remove(a: Assignment) {
    this.http.delete<any>(`/api/perm-assignments/${a.AssignmentID}`).subscribe({
      next:  () => { this.load(); this.notify('שיוך הוסר', 'success'); },
      error: () => this.notify('שגיאה בהסרה', 'error'),
    });
  }

  toggleDetail(a: Assignment, rowIndex: number) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(a.AssignmentID)) {
      this.grid.collapseRow(abs); this.expandedIds.delete(a.AssignmentID);
    } else {
      this.grid.expandRow(abs);  this.expandedIds.add(a.AssignmentID);
    }
  }
  isExpanded(id: number) { return this.expandedIds.has(id); }

  scopeLabel(scope: string) {
    return ({ MENU: 'תפריט', SCREEN: 'מסך', CONTROL: 'פקד', BUSINESS_LOGIC: 'לוגיקה עסקית' } as any)[scope] ?? scope;
  }
  scopeClass(scope: string) {
    return ({ MENU: 'scope-menu', SCREEN: 'scope-screen', CONTROL: 'scope-control', BUSINESS_LOGIC: 'scope-logic' } as any)[scope] ?? '';
  }
  entityLabel(type: string) {
    return ({ PROFILE: 'פרופיל', GROUP: 'קבוצה', CONTENT_GROUP: 'קבוצת תוכן', USER: 'משתמש' } as any)[type] ?? type;
  }
  parseActions(actions: string): string[] {
    return actions ? actions.split(',').filter(Boolean) : [];
  }

  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.skip = 0; }

  closeDialog() { this.dialogOpen.set(false); this.editingItem = null; }

  private notify(msg: string, style: 'success' | 'error') {
    this.notif.show({ content: msg, closable: true,
      type: { style, icon: true },
      animation: { type: 'slide', duration: 300 },
      position: { horizontal: 'center', vertical: 'top' } });
  }
}
