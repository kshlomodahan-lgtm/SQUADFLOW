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
import { Product, PRICING_MODEL_LABELS, PRODUCT_STATUS_LABELS } from '../../../core/models/catalog.model';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { HasPermDirective } from '../../../core/directives/has-perm.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    GridModule, ExcelModule, PDFModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
    ProductDialogComponent,
    HasPermDirective,
  ],
  templateUrl: './products.component.html',
  styleUrl:    './products.component.scss',
})
export class ProductsComponent implements OnInit {
  @ViewChild(GridComponent) grid!: GridComponent;

  addIcon   = plusIcon;
  excelIcon = fileExcelIcon;
  pdfIcon   = filePdfIcon;

  loading    = signal(true);
  error      = signal('');
  products   = signal<Product[]>([]);
  gridData:    Product[] = [];
  searchTerm = '';
  skip       = 0;
  pageSize   = 10;
  sort: SortDescriptor[] = [{ field: 'SortOrder', dir: 'asc' }];

  dialogOpen    = signal(false);
  dialogProduct = signal<Product | null>(null);
  expandedIds   = new Set<number>();

  pricingLabels = PRICING_MODEL_LABELS;
  statusLabels  = PRODUCT_STATUS_LABELS;

  constructor(private svc: CatalogService) {}
  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.svc.getProducts().subscribe({
      next: r => { this.products.set(r.data); this.applyFilter(); this.loading.set(false); },
      error: () => { this.error.set('שגיאה בטעינת מוצרים'); this.loading.set(false); },
    });
  }

  applyFilter() {
    const q = this.searchTerm.toLowerCase();
    const filtered = q
      ? this.products().filter(p =>
          p.ProductName.toLowerCase().includes(q) ||
          p.ProductCode.toLowerCase().includes(q) ||
          (p.ShortDescription ?? '').toLowerCase().includes(q))
      : [...this.products()];
    this.gridData = orderBy(filtered, this.sort) as Product[];
    this.skip = 0;
  }

  onSearch(v: string)               { this.searchTerm = v; this.applyFilter(); }
  onPageChange(e: PageChangeEvent)  { this.skip = e.skip; this.pageSize = e.take; }
  onSortChange(s: SortDescriptor[]) { this.sort = s; this.applyFilter(); }

  openAdd()            { this.dialogProduct.set(null);  this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  openEdit(p: Product) { this.dialogProduct.set(p);     this.dialogOpen.set(false); setTimeout(() => this.dialogOpen.set(true)); }
  onSaved()            { this.load(); }
  onClosed()           { this.dialogOpen.set(false); }

  isExpanded(id: number) { return this.expandedIds.has(id); }

  toggleDetail(prodId: number, rowIndex: number) {
    const absIdx = this.skip + rowIndex;
    if (this.expandedIds.has(prodId)) {
      this.expandedIds.delete(prodId);
      this.grid.collapseRow(absIdx);
    } else {
      this.expandedIds.add(prodId);
      this.grid.expandRow(absIdx);
    }
  }

  toggleActive(p: Product) {
    this.svc.saveProduct({ ...p, IsActive: !p.IsActive }).subscribe({ next: () => this.load() });
  }

  exportExcel() { this.grid.saveAsExcel(); }
  exportPDF()   { this.grid.saveAsPDF(); }
  allData       = () => ({ data: this.gridData });

  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }

  statusClass(s: string) {
    return ({ ACTIVE: 'badge-active', DRAFT: 'badge-draft', DEPRECATED: 'badge-deprecated' } as Record<string,string>)[s] ?? '';
  }

  getPricingLabel(m: string) { return (this.pricingLabels as Record<string,string>)[m] ?? m; }
  getStatusLabel(s: string)  { return (this.statusLabels  as Record<string,string>)[s] ?? s; }
}
