import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../layouts/auth/services/auth-services';
import { inject } from '@angular/core';

export const authLogoutGuard: CanActivateFn = (route, state) => {
  const authServices = inject(AuthServices);
  const router = inject(Router);

  if (authServices.isAuthenticated()) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
