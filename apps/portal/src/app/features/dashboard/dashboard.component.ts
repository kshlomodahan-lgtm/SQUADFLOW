import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth.service';

interface PlatformStats {
  orgs:  { total: number; active: number; inactive: number; expiring: number; };
  users: { total: number; active: number; inactive: number; };
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  stats   = signal<PlatformStats | null>(null);
  loading = signal(true);

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ success: boolean } & PlatformStats>('/api/stats/platform').subscribe({
      next:  r => { if (r.success) this.stats.set(r); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
}
