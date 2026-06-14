import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { TextBoxModule, TextAreaModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';

interface EntityDef {
  EntityDefID:  number;
  EntityCode:   string;
  EntityName:   string;
  SelectQuery:  string;
  IsActive:     boolean;
  GroupCount:   number;
}

interface ContentGroup {
  ContentGroupID: number;
  GroupName:      string;
  GroupCode:      string;
  Description:    string;
  IsActive:       boolean;
  EntityName:     string;
  EntityCode:     string;
  ItemCount:      number;
  UserCount:      number;
}

interface PreviewItem { KeyValue: string; DisplayLabel: string; }

@Component({
  selector: 'app-content-groups',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GridModule, DialogModule,
            ButtonModule, TextBoxModule, TextAreaModule, DropDownListModule,
            IndicatorsModule, MatProgressSpinnerModule, MatIconModule, NotificationModule],
  providers: [NotificationService],
  templateUrl: './content-groups.component.html',
  styleUrl:    './content-groups.component.scss',
})
export class ContentGroupsComponent implements OnInit {

  // sub-nav: 'entities' | 'groups'
  activeTab = signal<'entities' | 'groups'>('groups');

  // ── Entity Defs ──────────────────────────────────────────
  entityDefsLoading = signal(true);
  entityDefsError   = signal('');
  entityDefs        = signal<EntityDef[]>([]);
  entityDialogOpen  = signal(false);
  savingEntity      = signal(false);
  editingEntity: EntityDef | null = null;
  entityForm!: FormGroup;

  previewLoading = signal(false);
  previewItems   = signal<PreviewItem[]>([]);
  previewError   = signal('');

  // ── Content Groups ────────────────────────────────────────
  groupsLoading    = signal(true);
  groupsError      = signal('');
  contentGroups    = signal<ContentGroup[]>([]);
  groupDialogOpen  = signal(false);
  savingGroup      = signal(false);
  editingGroup: ContentGroup | null = null;
  groupForm!: FormGroup;

  // items picker state
  pickerItems      = signal<PreviewItem[]>([]);
  selectedItems    = signal<PreviewItem[]>([]);
  pickerLoading    = signal(false);

  skip     = 0;
  pageSize = 50;
  sort: SortDescriptor[] = [];

  get entityDefsOrdered() { return orderBy(this.entityDefs(), this.sort); }
  get groupsOrdered()     { return orderBy(this.contentGroups(), this.sort); }

  constructor(private http: HttpClient, private fb: FormBuilder, private notif: NotificationService) {}

  ngOnInit() { this.loadEntityDefs(); this.loadGroups(); }

  // ── Entity Defs ──────────────────────────────────────────

  loadEntityDefs() {
    this.entityDefsLoading.set(true);
    this.http.get<any>('/api/content-groups/entity-defs').subscribe({
      next: r => { this.entityDefs.set(r.data ?? []); this.entityDefsLoading.set(false); },
      error: () => { this.entityDefsError.set('שגיאה בטעינת יישויות'); this.entityDefsLoading.set(false); },
    });
  }

  openNewEntity() {
    this.editingEntity = null;
    this.previewItems.set([]); this.previewError.set('');
    this.entityForm = this.fb.group({
      entityCode:  ['', [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      entityName:  ['', Validators.required],
      selectQuery: ['SELECT KeyValue, DisplayLabel FROM ...', Validators.required],
      isActive:    [true],
    });
    this.entityDialogOpen.set(true);
  }

  openEditEntity(e: EntityDef) {
    this.editingEntity = e;
    this.previewItems.set([]); this.previewError.set('');
    this.entityForm = this.fb.group({
      entityCode:  [e.EntityCode,  [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      entityName:  [e.EntityName,  Validators.required],
      selectQuery: [e.SelectQuery, Validators.required],
      isActive:    [e.IsActive],
    });
    this.entityDialogOpen.set(true);
  }

  closeEntityDialog() { this.entityDialogOpen.set(false); this.editingEntity = null; }

  saveEntity() {
    if (this.entityForm.invalid) { this.entityForm.markAllAsTouched(); return; }
    this.savingEntity.set(true);
    const req = this.editingEntity
      ? this.http.put<any>(`/api/content-groups/entity-defs/${this.editingEntity.EntityDefID}`, this.entityForm.value)
      : this.http.post<any>('/api/content-groups/entity-defs', this.entityForm.value);
    req.subscribe({
      next: () => {
        this.savingEntity.set(false); this.closeEntityDialog(); this.loadEntityDefs();
        this.notify(this.editingEntity ? 'עודכן בהצלחה' : 'יישות נוצרה בהצלחה', 'success');
      },
      error: err => { this.savingEntity.set(false); this.notify(err?.error?.message ?? 'שגיאה', 'error'); },
    });
  }

  previewEntity() {
    if (!this.editingEntity) return;
    this.previewLoading.set(true); this.previewError.set(''); this.previewItems.set([]);
    this.http.post<any>(`/api/content-groups/entity-defs/${this.editingEntity.EntityDefID}/preview`, {}).subscribe({
      next: r => { this.previewItems.set(r.data ?? []); this.previewLoading.set(false); },
      error: err => { this.previewError.set(err?.error?.message ?? 'שגיאה בהרצת ה-SELECT'); this.previewLoading.set(false); },
    });
  }

  deleteEntity(e: EntityDef) {
    if (!confirm(`למחוק את יישות "${e.EntityName}"?`)) return;
    this.http.delete<any>(`/api/content-groups/entity-defs/${e.EntityDefID}`).subscribe({
      next: () => { this.loadEntityDefs(); this.notify('יישות הוסרה', 'success'); },
      error: () => this.notify('שגיאה במחיקה', 'error'),
    });
  }

  // ── Content Groups ────────────────────────────────────────

  loadGroups() {
    this.groupsLoading.set(true);
    this.http.get<any>('/api/content-groups').subscribe({
      next: r => { this.contentGroups.set(r.data ?? []); this.groupsLoading.set(false); },
      error: () => { this.groupsError.set('שגיאה בטעינת קבוצות תוכן'); this.groupsLoading.set(false); },
    });
  }

  openNewGroup() {
    this.editingGroup = null;
    this.selectedItems.set([]);
    this.groupForm = this.fb.group({
      groupName:   ['', Validators.required],
      groupCode:   ['', [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      entityDefId: [null, Validators.required],
      description: [''],
      isActive:    [true],
    });
    this.groupDialogOpen.set(true);
  }

  openEditGroup(g: ContentGroup) {
    this.editingGroup = g;
    this.groupForm = this.fb.group({
      groupName:   [g.GroupName,   Validators.required],
      groupCode:   [g.GroupCode,   [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      entityDefId: [this.entityDefs().find(e => e.EntityCode === g.EntityCode)?.EntityDefID ?? null, Validators.required],
      description: [g.Description],
      isActive:    [g.IsActive],
    });
    // load existing items
    this.http.get<any>(`/api/content-groups/${g.ContentGroupID}/items`).subscribe({
      next: r => this.selectedItems.set(r.data ?? []),
    });
    this.groupDialogOpen.set(true);
  }

  onEntityDefChange(entityDefId: number) {
    this.selectedItems.set([]);
    this.pickerItems.set([]);
    if (!entityDefId) return;
    // find entity def and preview its values
    const def = this.entityDefs().find(e => e.EntityDefID === entityDefId);
    if (!def) return;
    this.pickerLoading.set(true);
    this.http.post<any>(`/api/content-groups/entity-defs/${entityDefId}/preview`, {}).subscribe({
      next: r => { this.pickerItems.set(r.data ?? []); this.pickerLoading.set(false); },
      error: () => { this.pickerLoading.set(false); },
    });
  }

  isItemSelected(item: PreviewItem): boolean {
    return this.selectedItems().some(s => s.KeyValue === item.KeyValue);
  }

  toggleItem(item: PreviewItem) {
    if (this.isItemSelected(item))
      this.selectedItems.update(list => list.filter(s => s.KeyValue !== item.KeyValue));
    else
      this.selectedItems.update(list => [...list, item]);
  }

  closeGroupDialog() { this.groupDialogOpen.set(false); this.editingGroup = null; }

  saveGroup() {
    if (this.groupForm.invalid) { this.groupForm.markAllAsTouched(); return; }
    this.savingGroup.set(true);
    const payload = { ...this.groupForm.value, items: this.selectedItems() };
    const req = this.editingGroup
      ? this.http.put<any>(`/api/content-groups/${this.editingGroup.ContentGroupID}`, payload)
      : this.http.post<any>('/api/content-groups', payload);
    req.subscribe({
      next: () => {
        this.savingGroup.set(false); this.closeGroupDialog(); this.loadGroups();
        this.notify(this.editingGroup ? 'עודכן בהצלחה' : 'קבוצת תוכן נוצרה בהצלחה', 'success');
      },
      error: err => { this.savingGroup.set(false); this.notify(err?.error?.message ?? 'שגיאה', 'error'); },
    });
  }

  deleteGroup(g: ContentGroup) {
    if (!confirm(`למחוק את קבוצת התוכן "${g.GroupName}"?`)) return;
    this.http.delete<any>(`/api/content-groups/${g.ContentGroupID}`).subscribe({
      next: () => { this.loadGroups(); this.notify('קבוצת תוכן הוסרה', 'success'); },
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
