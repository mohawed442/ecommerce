import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { AuthServices } from '../../../core/layouts/auth/services/auth-services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly authServices = inject(AuthServices);
  private url = window.location.href;
  private get myHeaders() {
    return {
      token: this.authServices.getToken() || '',
    };
  }

  orderCash(addressDetails: any, cartId: string): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}orders/${cartId}`,
      { shippingAddress: addressDetails },
      { headers: this.myHeaders },
    );
  }

  orderVisa(addressDetails: any, cartId: string): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}orders/checkout-session/${cartId}?url=${this.url}`,
      { shippingAddress: addressDetails },
      { headers: this.myHeaders },
    );
  }

  getOrders(): Observable<any> {
    const idUser = this.authServices.decodeToken(this.myHeaders.token);
    return this.http.get(`${environment.baseUrl}orders/user/${idUser.id}`, { headers: this.myHeaders });
  }
}
