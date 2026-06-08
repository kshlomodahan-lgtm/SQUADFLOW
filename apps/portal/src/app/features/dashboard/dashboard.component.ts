import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import {
  buildingsIcon, userIcon, arrowRightIcon,
  clockIcon, cancelIcon, checkCircleIcon, SVGIcon,
  gridIcon, listUnorderedSquareIcon,
} from '@progress/kendo-svg-icons';
import { AuthService } from '../../core/services/auth.service';

const HE_MONTHS = [
  'ינואר','פברואר','מרץ','אפריל','מאי','יוני',
  'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר',
];
const PLAN_LABELS: Record<string, string> = {
  pro: 'Pro', basic: 'Basic', trial: 'ניסיון', free: 'חינם',
  PRO: 'Pro', BASIC: 'Basic', TRIAL: 'ניסיון', FREE: 'חינם',
};
const PLAN_COLORS: Record<string, string> = {
  pro: '#0d47ff', basic: '#0891b2', trial: '#f59e0b', free: '#94a3b8',
  PRO: '#0d47ff', BASIC: '#0891b2', TRIAL: '#f59e0b', FREE: '#94a3b8',
};

interface RecentOrg {
  TenantID: number; CompanyName: string; TenantCode: string;
  PlanType: string; IsActive: boolean; SubscribedAt: string | null;
}
interface TopPackage {
  PackageID: number; PackageName: string; PackageCode: string;
  PriceMonthly: number; IsActive: boolean; ProductCount: number;
}
interface PlatformStats {
  orgs:     { total: number; active: number; inactive: number; expiring: number };
  users:    { total: number; active: number; inactive: number };
  products: { total: number; active: number; inactive: number; draft: number; deprecated: number };
  packages: { total: number; active: number; inactive: number; public: number };
  planDistribution: { planType: string; count: number }[];
  monthlyGrowth:    { month: string; count: number }[];
  recentOrgs:       RecentOrg[];
  topPackages:      TopPackage[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ChartsModule, IconsModule, IndicatorsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  stats   = signal<PlatformStats | null>(null);
  loading = signal(true);
  error   = signal('');

  readonly icons: Record<string, SVGIcon> = {
    buildings: buildingsIcon,
    user:      userIcon,
    arrow:     arrowRightIcon,
    clock:     clockIcon,
    cancel:    cancelIcon,
    check:     checkCircleIcon,
    grid:      gridIcon,
    packages:  listUnorderedSquareIcon,
  };

  get greeting(): string {
    const h = new Date().getHours();
    if (h < 12) return 'בוקר טוב';
    if (h < 17) return 'צהריים טובים';
    return 'ערב טוב';
  }

  // ── Area chart ────────────────────────────────────────
  get growthCategories(): string[] {
    const now = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
      return HE_MONTHS[d.getMonth()];
    });
  }

  get growthData(): number[] {
    const s = this.stats();
    if (!s) return [0, 0, 0, 0, 0, 0];
    const now = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      return s.monthlyGrowth.find(m => m.month === key)?.count ?? 0;
    });
  }

  // ── Donut chart ───────────────────────────────────────
  get planDonutData(): { plan: string; count: number; color: string }[] {
    const s = this.stats();
    if (!s) return [];
    return s.planDistribution.map(p => ({
      plan:  PLAN_LABELS[p.planType] ?? p.planType,
      count: p.count,
      color: PLAN_COLORS[p.planType] ?? '#94a3b8',
    }));
  }

  // ── Summary ratios ────────────────────────────────────
  orgActiveRatio(): number {
    const s = this.stats();
    if (!s || s.orgs.total === 0) return 0;
    return Math.round((s.orgs.active / s.orgs.total) * 100);
  }
  userActiveRatio(): number {
    const s = this.stats();
    if (!s || s.users.total === 0) return 0;
    return Math.round((s.users.active / s.users.total) * 100);
  }
  productActiveRatio(): number {
    const s = this.stats();
    if (!s || s.products.total === 0) return 0;
    return Math.round((s.products.active / s.products.total) * 100);
  }
  packageActiveRatio(): number {
    const s = this.stats();
    if (!s || s.packages.total === 0) return 0;
    return Math.round((s.packages.active / s.packages.total) * 100);
  }

  planLabel(plan: string): string { return PLAN_LABELS[plan] ?? plan; }
  planColor(plan: string): string { return PLAN_COLORS[plan] ?? '#94a3b8'; }

  formatDate(dt: string | null): string {
    if (!dt) return '—';
    const d = new Date(dt);
    if (d.getFullYear() < 2000) return '—';
    return d.toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ success: boolean } & PlatformStats>('/api/stats/platform').subscribe({
      next: r => {
        if (r.success) {
          this.stats.set({
            ...r,
            products:    r.products    ?? { total: 0, active: 0, inactive: 0, draft: 0, deprecated: 0 },
            packages:    r.packages    ?? { total: 0, active: 0, inactive: 0, public: 0 },
            topPackages: r.topPackages ?? [],
          });
        } else {
          this.error.set('השרת החזיר שגיאה — בדוק את הלוג');
        }
        this.loading.set(false);
      },
      error: err => {
        const status = err.status;
        if (status === 401 || status === 403)
          this.error.set('פג תוקף הסשן — יש להתנתק ולהתחבר מחדש');
        else if (status === 0)
          this.error.set('לא ניתן להתחבר לשרת — ודא שה-backend פועל');
        else
          this.error.set(`שגיאה ${status} — ${err.message}`);
        this.loading.set(false);
      },
    });
  }
}
