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
import { Product, PRICING_MODEL_LABELS, PRODUCT_STATUS_LABELS } from '../../../core/models/catalog.model';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    GridModule, ButtonsModule,
    MatIconModule, MatProgressSpinnerModule,
    ProductDialogComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl:    './products.component.scss',
})
export class ProductsComponent implements OnInit {
  addIcon = plusIcon;

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
          p.ShortDescription.toLowerCase().includes(q))
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

  get pagedData() { return this.gridData.slice(this.skip, this.skip + this.pageSize); }

  statusClass(s: string) {
    return ({ ACTIVE: 'badge-active', DRAFT: 'badge-draft', DEPRECATED: 'badge-deprecated' } as Record<string,string>)[s] ?? '';
  }

  getPricingLabel(m: string)  { return (this.pricingLabels as Record<string,string>)[m] ?? m; }
  getStatusLabel(s: string)   { return (this.statusLabels  as Record<string,string>)[s] ?? s; }
}
