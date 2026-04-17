import { HttpInterceptorFn } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { inject, PLATFORM_ID } from '@angular/core';
import { AuthServices } from '../layouts/auth/services/auth-services';
import { isPlatformBrowser } from '@angular/common';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authServices = inject(AuthServices);
  const platformId = inject(PLATFORM_ID);
  const token = authServices.getToken();

  if (isPlatformBrowser(platformId)) {
    if (req.url.includes('cart') || req.url.includes('orders')) {
      req = req.clone({
        setHeaders: {
          token: token!,
        },
      });
    }
  }

  return next(req);
};
