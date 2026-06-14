import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../core/services/auth.service';
import { ThemeService } from '../core/services/theme.service';
import { RbacService } from '../core/services/rbac.service';
import { AiProcessingOverlayComponent } from '../shared/components/ai-processing/ai-processing-overlay.component';

interface NavItem  { icon: string; label: string; route: string; }
interface NavGroup { label: string; items: NavItem[]; hidePlatform?: boolean; platformOnly?: boolean; }

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterLink, RouterLinkActive,
    MatIconModule, MatButtonModule, MatTooltipModule,
    AiProcessingOverlayComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent implements OnInit {
  sidebarOpen = true;

  navGroups: NavGroup[] = [
    {
      label: 'כללי',
      items: [
        { icon: 'dashboard',      label: 'דשבורד',   route: '/app/dashboard' },
        { icon: 'corporate_fare', label: 'ארגונים',  route: '/app/organizations' },
        { icon: 'people',         label: 'משתמשים',  route: '/app/users' },
      ],
    },
    {
      label: 'SpaceFlow',
      hidePlatform: true,
      items: [
        { icon: 'rocket_launch', label: 'פרויקטים', route: '/app/projects' },
      ],
    },
    {
      label: 'קטלוג מוצרים',
      items: [
        { icon: 'category',   label: 'קטגוריות', route: '/app/categories' },
        { icon: 'storefront', label: 'מוצרים',   route: '/app/products' },
        { icon: 'layers',     label: 'חבילות',   route: '/app/packages' },
      ],
    },
    {
      label: 'DevTools',
      items: [
        { icon: 'manage_search', label: 'יומן פעילות',     route: '/app/audit' },
        { icon: 'vpn_key',      label: 'גישה לחיבורים', route: '/app/connector-access' },
      ],
    },
    {
      label: 'מערכת',
      items: [
        { icon: 'settings', label: 'הגדרות', route: '/app/settings' },
      ],
    },
  ];

  get isPlatformAdmin(): boolean {
    const u = this.auth.user();
    return u?.tenantId === 1 && u?.roleId === 1;
  }

  get visibleGroups(): NavGroup[] {
    return this.navGroups.filter(g => this.isPlatformAdmin ? !g.hidePlatform : !g.platformOnly);
  }

  constructor(
    public auth:  AuthService,
    public theme: ThemeService,
    private rbac: RbacService,
  ) {}

  ngOnInit() {
    this.rbac.resolvePermissions().subscribe();
  }

  logout() { this.auth.logout(); }
}
