import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServices } from '../layouts/auth/services/auth-services';

export const authGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthServices);
  const _router = inject(Router);

  if (_auth.isAuthenticated()) return true;

  _router.navigate(['/login']);
  return false;
};
