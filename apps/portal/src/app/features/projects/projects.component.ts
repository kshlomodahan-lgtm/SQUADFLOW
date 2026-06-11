import { Component, OnInit, ViewChild, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { GridModule, PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

export interface Project {
  ProjectID:     number;
  ProjectCode:   string;
  ProjectName:   string;
  Description:   string;
  ClientOrgID:   number | null;
  ClientOrgName: string | null;
  Status:        string;
  StartDate:     string | null;
  TargetDate:    string | null;
  CompletedDate: string | null;
  ProductCount:  number;
  CreatedAt:     string;
  UpdatedAt:     string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, GridModule, DialogModule,
    ButtonsModule, IndicatorsModule, MatIconModule,
    ProjectDialogComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl:    './projects.component.scss',
})
export class ProjectsComponent implements OnInit {

  @ViewChild(GridComponent) grid!: GridComponent;

  loading  = signal(true);
  error    = signal('');
  allData  = signal<Project[]>([]);
  search   = signal('');

  showDialog     = signal(false);
  editProject    = signal<Project | null>(null);
  pendingDelete  = signal<Project | null>(null);
  expandedRows   = new Set<number>();

  sort: SortDescriptor[] = [{ field: 'UpdatedAt', dir: 'desc' }];
  skip     = 0;
  pageSize = 10;

  filtered = computed(() => {
    const q = this.search().toLowerCase();
    const data = q
      ? this.allData().filter(p =>
          p.ProjectName.toLowerCase().includes(q) ||
          p.ProjectCode.toLowerCase().includes(q) ||
          (p.ClientOrgName || '').toLowerCase().includes(q))
      : this.allData();
    return orderBy(data, this.sort);
  });

  pagedData = computed(() =>
    this.filtered().slice(this.skip, this.skip + this.pageSize)
  );

  constructor(private http: HttpClient) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.expandedRows.clear();
    this.http.get<any>('/api/projects').subscribe({
      next:  r  => { this.allData.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת פרויקטים'); this.loading.set(false); },
    });
  }

  onSearch(v: string) { this.search.set(v); this.skip = 0; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.skip = 0; }
  onPageChange(e: PageChangeEvent)  { this.skip = e.skip; this.expandedRows.clear(); }

  toggleDetail(p: Project, rowIndex: number) {
    if (this.expandedRows.has(p.ProjectID)) {
      this.expandedRows.delete(p.ProjectID);
      this.grid.collapseRow(rowIndex);
    } else {
      this.expandedRows.add(p.ProjectID);
      this.grid.expandRow(rowIndex);
    }
  }

  isExpanded(id: number) { return this.expandedRows.has(id); }

  openNew()            { this.editProject.set(null); this.showDialog.set(true); }
  openEdit(p: Project) { this.editProject.set(p);    this.showDialog.set(true); }
  closeDialog()        { this.showDialog.set(false); }

  onSaved() { this.showDialog.set(false); this.load(); }

  askDelete(p: Project)  { this.pendingDelete.set(p); }
  cancelDelete()         { this.pendingDelete.set(null); }

  confirmDelete() {
    const p = this.pendingDelete();
    if (!p) return;
    this.pendingDelete.set(null);
    this.http.delete(`/api/projects/${p.ProjectID}`).subscribe({
      next:  () => this.load(),
      error: () => {},
    });
  }

  statusLabel(s: string): string {
    const map: Record<string, string> = {
      draft: 'טיוטה', active: 'פעיל', completed: 'הושלם', archived: 'בארכיון'
    };
    return map[s] ?? s;
  }

  statusClass(s: string): string {
    const map: Record<string, string> = {
      draft: 'badge-gray', active: 'badge-blue',
      completed: 'badge-green', archived: 'badge-muted'
    };
    return map[s] ?? 'badge-gray';
  }
}
