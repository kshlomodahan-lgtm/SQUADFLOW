import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';
import { LogicPermsComponent } from '../logic-perms/logic-perms.component';

interface Profile {
  ProfileID:       number;
  ProfileName:     string;
  ProfileCode:     string;
  Description:     string;
  IsActive:        boolean;
  UserCount:       number;
  PermissionCount: number;
}

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GridModule, DialogModule,
            ButtonModule, TextBoxModule, IndicatorsModule,
            MatProgressSpinnerModule, MatIconModule, NotificationModule,
            LogicPermsComponent],
  providers: [NotificationService],
  templateUrl: './profiles.component.html',
  styleUrl:    './profiles.component.scss',
})
export class ProfilesComponent implements OnInit {
  loading    = signal(true);
  error      = signal('');
  profiles   = signal<Profile[]>([]);
  dialogOpen = signal(false);
  saving     = signal(false);
  editingProfile: Profile | null = null;

  // permissions dialog
  permsOpen:    boolean = false;
  permsProfile: Profile | null = null;

  form!: FormGroup;
  skip     = 0;
  pageSize = 50;
  sort: SortDescriptor[] = [];

  get gridData()  { return orderBy(this.profiles(), this.sort); }
  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }

  constructor(private http: HttpClient, private fb: FormBuilder, private notif: NotificationService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.http.get<any>('/api/profiles').subscribe({
      next: r => { this.profiles.set(r.data ?? []); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת פרופילים'); this.loading.set(false); },
    });
  }

  openNew() {
    this.editingProfile = null;
    this.form = this.fb.group({
      profileName: ['', Validators.required],
      profileCode: ['', [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      description: [''],
      isActive:    [true],
    });
    this.dialogOpen.set(true);
  }

  openEdit(p: Profile) {
    this.editingProfile = p;
    this.form = this.fb.group({
      profileName: [p.ProfileName, Validators.required],
      profileCode: [p.ProfileCode, [Validators.required, Validators.pattern(/^[A-Z0-9_]+$/)]],
      description: [p.Description],
      isActive:    [p.IsActive],
    });
    this.dialogOpen.set(true);
  }

  closeDialog() { this.dialogOpen.set(false); this.editingProfile = null; }

  openPerms(p: Profile) { this.permsProfile = p; this.permsOpen = true; }
  closePerms()           { this.permsOpen = false; this.permsProfile = null; }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    const req = this.editingProfile
      ? this.http.put<any>(`/api/profiles/${this.editingProfile.ProfileID}`, this.form.value)
      : this.http.post<any>('/api/profiles', this.form.value);
    req.subscribe({
      next: () => {
        this.saving.set(false); this.closeDialog(); this.load();
        this.notify(this.editingProfile ? 'עודכן בהצלחה' : 'פרופיל נוצר בהצלחה', 'success');
      },
      error: err => { this.saving.set(false); this.notify(err?.error?.message ?? 'שגיאה בשמירה', 'error'); },
    });
  }

  delete(p: Profile) {
    if (!confirm(`למחוק את הפרופיל "${p.ProfileName}"?`)) return;
    this.http.delete<any>(`/api/profiles/${p.ProfileID}`).subscribe({
      next: () => { this.load(); this.notify('הפרופיל הוסר', 'success'); },
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
