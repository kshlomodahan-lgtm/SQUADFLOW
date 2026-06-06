import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import {
  buildingsIcon, checkCircleIcon, clockIcon, cancelIcon,
  userIcon, eyeSlashIcon, arrowRightIcon, SVGIcon
} from '@progress/kendo-svg-icons';
import { AuthService } from '../../core/services/auth.service';

interface PlatformStats {
  orgs:  { total: number; active: number; inactive: number; expiring: number; };
  users: { total: number; active: number; inactive: number; };
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, IconsModule, IndicatorsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  stats   = signal<PlatformStats | null>(null);
  loading = signal(true);

  readonly icons = {
    buildings:    buildingsIcon,
    checkCircle:  checkCircleIcon,
    clock:        clockIcon,
    cancel:       cancelIcon,
    user:         userIcon,
    eyeSlash:     eyeSlashIcon,
    arrowRight:   arrowRightIcon,
  };

  get greeting(): string {
    const h = new Date().getHours();
    if (h < 12) return 'בוקר טוב';
    if (h < 17) return 'צהריים טובים';
    return 'ערב טוב';
  }

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ success: boolean } & PlatformStats>('/api/stats/platform').subscribe({
      next:  r => { if (r.success) this.stats.set(r); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
}
