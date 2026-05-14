import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingServices } from '../services/loading-services';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingServices = inject(LoadingServices);
  
if (req.headers.has('Skip-Loading')) {
    return next(req);
  } 

  loadingServices.show();
  return next(req).pipe(
    finalize(() => loadingServices.hide())
  )
  
  ;
};
