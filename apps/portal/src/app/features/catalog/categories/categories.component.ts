import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, GridComponent, PageChangeEvent, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { plusIcon, fileExcelIcon, filePdfIcon } from '@progress/kendo-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CatalogService } from '../../../core/services/catalog.service';
import { ProductCategory } from '../../../core/models/catalog.model';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    GridModule, ExcelModule, PDFModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
    CategoryDialogComponent,
  ],
  templateUrl: './categories.component.html',
  styleUrl:    './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  @ViewChild(GridComponent) grid!: GridComponent;

  addIcon   = plusIcon;
  excelIcon = fileExcelIcon;
  pdfIcon   = filePdfIcon;

  loading    = signal(true);
  error      = signal('');
  cats       = signal<ProductCategory[]>([]);
  gridData:    ProductCategory[] = [];
  searchTerm = '';
  skip       = 0;
  pageSize   = 10;
  sort: SortDescriptor[] = [{ field: 'SortOrder', dir: 'asc' }];

  dialogOpen = signal(false);
  dialogCat  = signal<ProductCategory | null>(null);
  expandedIds = new Set<number>();

  constructor(private svc: CatalogService) {}
  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.svc.getCategories().subscribe({
      next: r => { this.cats.set(r.data); this.applyFilter(); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת קטגוריות'); this.loading.set(false); },
    });
  }

  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q
      ? this.cats().filter(c => c.CategoryName.toLowerCase().includes(q) || c.CategoryCode.toLowerCase().includes(q))
      : [...this.cats()];
    this.gridData = orderBy(filtered, this.sort) as ProductCategory[];
    this.skip = 0;
  }

  onSearch(v: string)               { this.searchTerm = v; this.applyFilter(); }
  onPageChange(e: PageChangeEvent)  { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.applyFilter(); }

  openAdd()                    { this.dialogCat.set(null); this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  openEdit(c: ProductCategory) { this.dialogCat.set(c);    this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  onSaved()                    { this.load(); }
  onClosed()                   { this.dialogOpen.set(false); }

  toggleActive(c: ProductCategory) {
    this.svc.saveCategory({ ...c, IsActive: !c.IsActive }).subscribe({
      next: () => this.load(),
      error: (e) => this.error.set(e?.error?.message || 'שגיאה בעדכון סטטוס'),
    });
  }

  isExpanded(id: number) { return this.expandedIds.has(id); }

  toggleDetail(catId: number, rowIndex: number) {
    const absIdx = this.skip + rowIndex;
    if (this.expandedIds.has(catId)) {
      this.expandedIds.delete(catId);
      this.grid.collapseRow(absIdx);
    } else {
      this.expandedIds.add(catId);
      this.grid.expandRow(absIdx);
    }
  }

  exportExcel() { this.grid.saveAsExcel(); }
  exportPDF()   { this.grid.saveAsPDF(); }
  allData       = () => ({ data: this.gridData });

  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }
}
