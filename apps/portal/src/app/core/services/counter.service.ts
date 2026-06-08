import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Counter } from '../models/counter.model';

interface ApiResponse<T> { success: boolean; data: T; message: string; }

@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(private http: HttpClient) {}

  getAll(level = '', customerId = 0, productId = -1): Observable<ApiResponse<Counter[]>> {
    return this.http.get<ApiResponse<Counter[]>>(
      `/api/counters?level=${level}&customerId=${customerId}&productId=${productId}`
    );
  }

  create(payload: Partial<Counter>): Observable<ApiResponse<null>> {
    return this.http.post<ApiResponse<null>>('/api/counters', payload);
  }

  update(counterKey: string, payload: Partial<Counter>): Observable<ApiResponse<null>> {
    return this.http.put<ApiResponse<null>>(`/api/counters/${counterKey}`, payload);
  }

  lock(counterKey: string, isLocked: boolean, counterLevel: string, customerId = 0, productId = 0): Observable<ApiResponse<null>> {
    return this.http.put<ApiResponse<null>>(`/api/counters/${counterKey}/lock`, {
      counterLevel, customerID: customerId, productID: productId, isLocked
    });
  }

  reset(counterKey: string, counterLevel: string, customerId = 0, productId = 0): Observable<ApiResponse<null>> {
    return this.http.put<ApiResponse<null>>(`/api/counters/${counterKey}/reset`, {
      counterLevel, customerID: customerId, productID: productId
    });
  }
}
