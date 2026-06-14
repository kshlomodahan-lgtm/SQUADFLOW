import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GridModule, PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { TextBoxModule, TextAreaModule } from '@progress/kendo-angular-inputs';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';

interface PermCode {
  PermCodeID:  number;
  TenantID:    number;
  ProductID:   number;
  ProjectID:   number;
  PermCode:    string;
  PermName:    string;
  Scope:       string;
  ControlType: string;
  SourceType:  string;
  Tags:        string;
  Notes:       string;
  Description: string;
  IsActive:    boolean;
}

@Component({
  selector: 'app-permission-codes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GridModule, DialogModule,
            ButtonModule, TextBoxModule, TextAreaModule, IndicatorsModule,
            MatProgressSpinnerModule, MatIconModule, NotificationModule],
  providers: [NotificationService],
  templateUrl: './permission-codes.component.html',
  styleUrl:    './permission-codes.component.scss',
})
export class PermissionCodesComponent implements OnInit {
  @ViewChild(GridComponent) grid!: GridComponent;

  loading    = signal(true);
  error      = signal('');
  codes      = signal<PermCode[]>([]);
  dialogOpen = signal(false);
  saving     = signal(false);

  editingCode:  PermCode | null = null;
  expandedIds = new Set<number>();

  filterScope       = signal<string>('');
  filterControlType = signal<string>('');
  filterTag         = signal<string>('');
  tagInput     = '';
  currentTags: string[] = [];

  form!: FormGroup;
  skip     = 0;
  pageSize = 50;
  sort: SortDescriptor[] = [{ field: 'Scope', dir: 'asc' }];

  setScope(sc: string) {
    this.filterScope.set(sc);
    this.filterControlType.set('');
  }

  get filteredCodes() {
    const sc  = this.filterScope();
    const ct  = this.filterControlType();
    const tag = this.filterTag();
    let lst   = orderBy(this.codes(), this.sort);
    if (sc === 'BUSINESS_LOGIC') lst = lst.filter(c => c.Scope === 'BUSINESS_LOGIC' || !c.Scope);
    else if (sc)                  lst = lst.filter(c => c.Scope === sc);
    if (ct)                       lst = lst.filter(c => c.ControlType === ct);
    if (tag) lst = lst.filter(c => c.Tags.split(',').map(t => t.trim()).includes(tag));
    return lst;
  }
  get pagedData() { return this.filteredCodes.slice(this.skip, this.skip + this.pageSize); }

  get allTags(): string[] {
    const set = new Set<string>();
    this.codes().forEach(c => c.Tags.split(',').forEach(t => { if (t.trim()) set.add(t.trim()); }));
    return [...set].sort();
  }

  constructor(private http: HttpClient, private fb: FormBuilder,
              private notif: NotificationService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.http.get<any>('/api/permission-codes').subscribe({
      next:  r => { this.codes.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת הרשאות'); this.loading.set(false); },
    });
  }

  openNew() {
    this.editingCode = null;
    this.currentTags = [];
    this.tagInput    = '';
    this.form = this.fb.group({
      permName:    ['', Validators.required],
      notes:       [''],
      isActive:    [true],
    });
    this.dialogOpen.set(true);
  }

  openEdit(c: PermCode) {
    this.editingCode = c;
    this.currentTags = c.Tags.split(',').map(t => t.trim()).filter(Boolean);
    this.tagInput    = '';
    this.form = this.fb.group({
      permName:    [c.PermName],
      notes:       [c.Notes],
      isActive:    [c.IsActive],
    });
    this.dialogOpen.set(true);
  }

  toggleDetail(c: PermCode, rowIndex: number) {
    const abs = this.skip + rowIndex;
    if (this.expandedIds.has(c.PermCodeID)) {
      this.grid.collapseRow(abs);
      this.expandedIds.delete(c.PermCodeID);
    } else {
      this.grid.expandRow(abs);
      this.expandedIds.add(c.PermCodeID);
    }
  }

  isExpanded(id: number) { return this.expandedIds.has(id); }
  closeDialog() { this.dialogOpen.set(false); this.editingCode = null; }

  addTag() {
    const t = this.tagInput.trim().toLowerCase();
    if (t && !this.currentTags.includes(t)) this.currentTags.push(t);
    this.tagInput = '';
  }

  removeTag(tag: string) { this.currentTags = this.currentTags.filter(t => t !== tag); }

  onTagKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); this.addTag(); }
  }

  toggleLock(c: PermCode) {
    this.http.patch<any>(`/api/permission-codes/${c.PermCodeID}/toggle`, {}).subscribe({
      next:  () => { this.load(); this.notify(c.IsActive ? 'הרשאה ננעלה' : 'הרשאה שוחררה', 'success'); },
      error: () => this.notify('שגיאה בשינוי מצב', 'error'),
    });
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    const v = this.form.getRawValue();
    const tagsStr = this.currentTags.join(',') || null;

    const isBuiltIn = this.editingCode?.SourceType === 'SCANNER';

    const payload: any = {
      permName: isBuiltIn ? this.editingCode!.PermName : v.permName,
      notes:    v.notes || '',
      tags:     tagsStr || '',
      isActive: v.isActive,
    };

    if (!this.editingCode) {
      payload.scope      = 'BUSINESS_LOGIC';
      payload.sourceType = 'MANUAL';
    }

    const req = this.editingCode
      ? this.http.put<any>(`/api/permission-codes/${this.editingCode.PermCodeID}`, payload)
      : this.http.post<any>('/api/permission-codes', payload);

    req.subscribe({
      next:  () => { this.saving.set(false); this.closeDialog(); this.load();
                     this.notify(this.editingCode ? 'עודכן בהצלחה' : 'הרשאה נוצרה בהצלחה', 'success'); },
      error: err => { this.saving.set(false); this.notify(err?.error?.message ?? 'שגיאה', 'error'); },
    });
  }

  scopeClass(scope: string): string {
    if (!scope || scope === 'BUSINESS_LOGIC') return 'scope-logic';
    return ({ MENU: 'scope-menu', SCREEN: 'scope-screen', CONTROL: 'scope-control' } as any)[scope] ?? '';
  }

  scopeLabel(scope: string): string {
    const map: Record<string, string> = { MENU: 'תפריט', SCREEN: 'מסך', CONTROL: 'פקד', BUSINESS_LOGIC: 'לוגיקה עסקית' };
    return map[scope] ?? 'לוגיקה עסקית';
  }

  parseTags(tags: string): string[] {
    return tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];
  }

  onPageChange(e: PageChangeEvent) { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.skip = 0; }

  private notify(msg: string, style: 'success' | 'error') {
    this.notif.show({ content: msg, closable: true,
      type: { style, icon: true },
      animation: { type: 'slide', duration: 300 },
      position: { horizontal: 'center', vertical: 'top' } });
  }
}
