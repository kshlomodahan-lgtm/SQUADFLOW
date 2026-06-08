import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../core/services/auth.service';
import { ThemeService } from '../core/services/theme.service';

interface NavItem  { icon: string; label: string; route: string; }
interface NavGroup { label: string; items: NavItem[]; }

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterLink, RouterLinkActive,
    MatIconModule, MatButtonModule, MatTooltipModule,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
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
      label: 'קטלוג מוצרים',
      items: [
        { icon: 'category',   label: 'קטגוריות', route: '/app/categories' },
        { icon: 'storefront', label: 'מוצרים',   route: '/app/products' },
        { icon: 'layers',     label: 'חבילות',   route: '/app/packages' },
      ],
    },
    {
      label: 'מערכת',
      items: [
        { icon: 'settings', label: 'הגדרות', route: '/app/settings' },
      ],
    },
  ];

  constructor(public auth: AuthService, public theme: ThemeService) {}

  logout() { this.auth.logout(); }
}
