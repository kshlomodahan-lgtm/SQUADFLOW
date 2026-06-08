import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { plusIcon } from '@progress/kendo-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CatalogService } from '../../../core/services/catalog.service';
import { Package } from '../../../core/models/catalog.model';
import { PackageDialogComponent } from './package-dialog/package-dialog.component';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    GridModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
    PackageDialogComponent,
  ],
  templateUrl: './packages.component.html',
  styleUrl:    './packages.component.scss',
})
export class PackagesComponent implements OnInit {
  addIcon = plusIcon;

  loading    = signal(true);
  error      = signal('');
  packages   = signal<Package[]>([]);
  gridData:    Package[] = [];
  searchTerm = '';
  skip       = 0;
  pageSize   = 10;
  sort: SortDescriptor[] = [{ field: 'SortOrder', dir: 'asc' }];

  dialogOpen    = signal(false);
  dialogPackage = signal<Package | null>(null);

  constructor(private svc: CatalogService) {}
  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.svc.getPackages().subscribe({
      next: r => { this.packages.set(r.data); this.applyFilter(); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת חבילות'); this.loading.set(false); },
    });
  }

  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q
      ? this.packages().filter(p =>
          p.PackageName.toLowerCase().includes(q) ||
          p.PackageCode.toLowerCase().includes(q))
      : [...this.packages()];
    this.gridData = orderBy(filtered, this.sort) as Package[];
    this.skip = 0;
  }

  onSearch(v: string)               { this.searchTerm = v; this.applyFilter(); }
  onPageChange(e: PageChangeEvent)  { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.applyFilter(); }

  openAdd()            { this.dialogPackage.set(null); this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  openEdit(p: Package) { this.dialogPackage.set(p);    this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  onSaved()            { this.load(); }
  onClosed()           { this.dialogOpen.set(false); }

  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }
}
