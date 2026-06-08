import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory, Product, Package } from '../models/catalog.model';

interface ApiResp<T> { success: boolean; data: T; message: string; }

@Injectable({ providedIn: 'root' })
export class CatalogService {
  constructor(private http: HttpClient) {}

  // ── Categories ───────────────────────────────────────────
  getCategories(): Observable<ApiResp<ProductCategory[]>> {
    return this.http.get<ApiResp<ProductCategory[]>>('/api/categories');
  }

  saveCategory(cat: Partial<ProductCategory>): Observable<ApiResp<{ CategoryID: number }>> {
    return cat.CategoryID
      ? this.http.put<any>(`/api/categories/${cat.CategoryID}`, cat)
      : this.http.post<any>('/api/categories', cat);
  }

  // ── Products ─────────────────────────────────────────────
  getProducts(search?: string): Observable<ApiResp<Product[]>> {
    const params = search ? `?search=${encodeURIComponent(search)}` : '';
    return this.http.get<ApiResp<Product[]>>(`/api/products${params}`);
  }

  getProduct(id: number): Observable<ApiResp<Product>> {
    return this.http.get<ApiResp<Product>>(`/api/products/${id}`);
  }

  saveProduct(p: Partial<Product>): Observable<ApiResp<{ ProductID: number }>> {
    return p.ProductID
      ? this.http.put<any>(`/api/products/${p.ProductID}`, p)
      : this.http.post<any>('/api/products', p);
  }

  // ── Packages ─────────────────────────────────────────────
  getPackages(): Observable<ApiResp<Package[]>> {
    return this.http.get<ApiResp<Package[]>>('/api/packages');
  }

  getPackage(id: number): Observable<ApiResp<Package>> {
    return this.http.get<ApiResp<Package>>(`/api/packages/${id}`);
  }

  savePackage(pkg: Partial<Package> & { ProductIDs?: number[] }): Observable<ApiResp<{ PackageID: number }>> {
    return pkg.PackageID
      ? this.http.put<any>(`/api/packages/${pkg.PackageID}`, pkg)
      : this.http.post<any>('/api/packages', pkg);
  }
}
