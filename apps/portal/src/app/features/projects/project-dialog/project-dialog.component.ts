import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TextBoxModule, TextAreaModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../projects.component';

interface ClientOrg { CustomerID: number; CompanyName: string; }

const STATUS_OPTIONS = [
  { value: 'draft',     label: 'טיוטה' },
  { value: 'active',    label: 'פעיל'  },
  { value: 'completed', label: 'הושלם' },
  { value: 'archived',  label: 'בארכיון' },
];

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    DialogModule, TextBoxModule, TextAreaModule,
    DropDownListModule, DatePickerModule,
    ButtonsModule, IndicatorsModule, NotificationModule, MatIconModule,
  ],
  providers: [NotificationService],
  templateUrl: './project-dialog.component.html',
  styleUrl:    './project-dialog.component.scss',
})
export class ProjectDialogComponent implements OnInit {

  @Input() project: Project | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved  = new EventEmitter<void>();

  form!: FormGroup;
  saving   = signal(false);
  errorMsg = signal('');

  clientOrgs   = signal<ClientOrg[]>([]);
  statusOptions = STATUS_OPTIONS;

  get isEdit() { return !!this.project; }
  get title()  { return this.isEdit ? 'עריכת פרויקט' : 'פרויקט חדש'; }

  constructor(
    private fb:    FormBuilder,
    private http:  HttpClient,
    private notif: NotificationService,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.loadClients();
  }

  buildForm() {
    const p = this.project;
    this.form = this.fb.group({
      projectCode:   [p?.ProjectCode   ?? '', [Validators.required, Validators.maxLength(50)]],
      projectName:   [p?.ProjectName   ?? '', [Validators.required, Validators.maxLength(150)]],
      description:   [p?.Description   ?? ''],
      clientOrgId:   [p?.ClientOrgID   ?? null],
      status:        [p?.Status        ?? 'draft'],
      startDate:     [p?.StartDate     ? new Date(p.StartDate)  : null],
      targetDate:    [p?.TargetDate    ? new Date(p.TargetDate) : null],
    });
  }

  loadClients() {
    this.http.get<any>('/api/customers').subscribe({
      next: r => this.clientOrgs.set(r.data ?? []),
    });
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.errorMsg.set('');

    const body = this.form.value;
    const req = this.isEdit
      ? this.http.put(`/api/projects/${this.project!.ProjectID}`, body)
      : this.http.post('/api/projects', body);

    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.saved.emit();
      },
      error: err => {
        this.saving.set(false);
        this.errorMsg.set(err.error?.message ?? 'שגיאה בשמירה');
      },
    });
  }

  close() { this.closed.emit(); }
}
