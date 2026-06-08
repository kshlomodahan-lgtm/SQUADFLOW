import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./shell/shell.component').then(m => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'organizations',
        loadComponent: () =>
          import('./features/organizations/organizations.component').then(m => m.OrganizationsComponent),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/users/users.component').then(m => m.UsersComponent),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./features/catalog/categories/categories.component').then(m => m.CategoriesComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./features/catalog/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'packages',
        loadComponent: () =>
          import('./features/catalog/packages/packages.component').then(m => m.PackagesComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings.component').then(m => m.SettingsComponent),
      },
      {
        path: 'audit',
        loadComponent: () =>
          import('./features/audit/audit.component').then(m => m.AuditComponent),
      },
      {
        path: 'audit/action-types',
        loadComponent: () =>
          import('./features/audit/action-types/audit-action-types.component').then(m => m.AuditActionTypesComponent),
      },
      {
        path: 'audit/entity-types',
        loadComponent: () =>
          import('./features/audit/entity-types/audit-entity-types.component').then(m => m.AuditEntityTypesComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
