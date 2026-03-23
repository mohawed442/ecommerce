import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environment/environment.prod';
import { Observable } from 'rxjs';
import { AuthServices } from '../../../../../core/layouts/auth/services/auth-services';

@Injectable({
  providedIn: 'root',
})
export class CartServices {
  private http = inject(HttpClient);
  private authServices = inject(AuthServices);

  addCard(productId: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      token: `${this.authServices.getToken()}`,
    };
    return this.http.post(environment.baseUrl + 'cart', { productId }, { headers });
  }

  updateCard(count: string, productId: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      token: `${this.authServices.getToken()}`,
    };
    return this.http.put(environment.baseUrl + 'cart' + productId, count, { headers });
  }

  loggedCard(): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      token: `${this.authServices.getToken()}`,
    };
    return this.http.get(environment.baseUrl + 'cart', { headers });
  }

  removeItem(productId: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      token: `${this.authServices.getToken()}`,
    };
    return this.http.delete(environment.baseUrl + 'cart' + productId, { headers });
  }

  clearCard(): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      token: `${this.authServices.getToken()}`,
    };
    return this.http.delete(environment.baseUrl + 'cart', { headers });
  }
}
