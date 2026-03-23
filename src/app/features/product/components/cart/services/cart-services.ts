import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environment/environment.prod';
import { Observable } from 'rxjs';
import { AuthServices } from '../../../../../core/layouts/auth/services/auth-services';
import { ICart } from '../models/icart';

@Injectable({
  providedIn: 'root',
})
export class CartServices {
  private http = inject(HttpClient);
  private authServices = inject(AuthServices);

  private get myHeaders() {
    return {
      token: this.authServices.getToken() || '',
    };
  }
  addCard(productId: string): Observable<ICart> {
    return this.http.post<ICart>(environment.baseUrl + 'cart', { productId }, { headers: this.myHeaders });
  }

  updateCard(count: string, productId: string): Observable<ICart> {
    return this.http.put<ICart>(environment.baseUrl + 'cart/' + productId, count, {
      headers: this.myHeaders,
    });
  }

  loggedCard(): Observable<ICart> {
    return this.http.get<ICart>(environment.baseUrl + 'cart', { headers: this.myHeaders });
  }

  removeItem(productId: string): Observable<ICart> {
    return this.http.delete<ICart>(environment.baseUrl + 'cart/' + productId, { headers: this.myHeaders });
  }

  clearCard(): Observable<ICart> {
    return this.http.delete<ICart>(environment.baseUrl + 'cart', { headers: this.myHeaders });
  }
}
