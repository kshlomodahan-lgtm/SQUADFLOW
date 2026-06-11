import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    CommonModule, GridModule, ButtonsModule, IndicatorsModule,
    IconsModule, MatIconModule, MatTooltipModule,
    ProjectDialogComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl:    './projects.component.scss',
})
export class ProjectsComponent implements OnInit {

  loading  = signal(true);
  error    = signal('');
  allData  = signal<Project[]>([]);
  search   = signal('');

  showDialog  = signal(false);
  editProject = signal<Project | null>(null);

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
    this.http.get<any>('/api/projects').subscribe({
      next:  r  => { this.allData.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת פרויקטים'); this.loading.set(false); },
    });
  }

  onSearch(v: string) { this.search.set(v); this.skip = 0; }

  onSortChange(s: SortDescriptor[]) {
    this.sort = s; this.skip = 0;
  }

  onPageChange(e: PageChangeEvent) { this.skip = e.skip; }

  openNew()               { this.editProject.set(null); this.showDialog.set(true); }
  openEdit(p: Project)    { this.editProject.set(p);    this.showDialog.set(true); }
  closeDialog()           { this.showDialog.set(false); }

  onSaved() {
    this.showDialog.set(false);
    this.load();
  }

  deleteProject(p: Project) {
    if (!confirm(`למחוק את הפרויקט "${p.ProjectName}"?`)) return;
    this.http.delete(`/api/projects/${p.ProjectID}`).subscribe({
      next:  () => this.load(),
      error: () => alert('שגיאה במחיקה'),
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
