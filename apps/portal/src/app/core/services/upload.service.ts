import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadLogo(file: File): Observable<{ success: boolean; logoUrl: string }> {
    const form = new FormData();
    form.append('logo', file);
    return this.http.post<{ success: boolean; logoUrl: string }>('/api/upload/logo', form);
  }
}
