import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RbacService } from '../services/rbac.service';

export function permissionGuard(screen: string, action = 'READ'): CanActivateFn {
  return () => {
    const rbac   = inject(RbacService);
    const router = inject(Router);
    if (rbac.can(screen, action)) return true;
    router.navigate(['/app/dashboard']);
    return false;
  };
}
