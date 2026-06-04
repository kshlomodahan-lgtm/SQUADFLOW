import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../core/services/auth.service';

interface NavItem {
  icon:  string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  sidebarOpen = true;

  // תפריט מנהל הפלטפורמה (RoleID=1, TenantID=1)
  navItems: NavItem[] = [
    { icon: 'dashboard',      label: 'דשבורד',   route: '/app/dashboard' },
    { icon: 'corporate_fare', label: 'ארגונים',  route: '/app/organizations' },
    { icon: 'people',         label: 'משתמשים',  route: '/app/users' },
    { icon: 'settings',       label: 'הגדרות',   route: '/app/settings' },
  ];

  constructor(public auth: AuthService) {}

  logout() { this.auth.logout(); }
}
