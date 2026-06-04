import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface TenantPublicInfo {
  success:     boolean;
  companyName: string;
  logoUrl:     string | null;
  systemName:  string;
  promptText:  string;
  copyright:   string;
  brandColor:  string;
}

@Injectable({ providedIn: 'root' })
export class TenantService {
  constructor(private http: HttpClient) {}

  getPublicInfo(tenantCode: string): Observable<TenantPublicInfo> {
    return this.http
      .get<TenantPublicInfo>(`/api/public/tenant/${tenantCode}`)
      .pipe(catchError(() => of({
        success: false, companyName: tenantCode,
        logoUrl: null, systemName: '', promptText: '', copyright: '', brandColor: '#C8472A'
      })));
  }
}
