import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { AuthServices } from '../../../core/layouts/auth/services/auth-services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  
private readonly http = inject(HttpClient) ;
private readonly authServices = inject(AuthServices)

  private get myHeaders() {
    return {
      token: this.authServices.getToken() || '',
    };
  }


orderCash(addressDetails: any, cartId: string): Observable<any> {
  return this.http.post(
    `${environment.baseUrl}orders/${cartId}`, 
    { shippingAddress: addressDetails }, 
    { headers: this.myHeaders }
  );
}

}
