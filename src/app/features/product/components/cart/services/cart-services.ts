import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../../../environment/environment.prod';
import { Observable, tap } from 'rxjs';
import { ICart } from '../models/icart';

@Injectable({
  providedIn: 'root',
})
export class CartServices {
  private http = inject(HttpClient);
  cartNumber = signal<number>(0);
  addCard(productId: string): Observable<ICart> {
    return this.http.post<ICart>(environment.baseUrl + 'cart', { productId }).pipe(
      tap((res: any) => {
        this.cartNumber.set(res.numOfCartItems);
      }),
    );
  }

  updateCard(count: string, productId: string): Observable<ICart> {
    return this.http.put<ICart>(environment.baseUrl + 'cart/' + productId, { count });
  }

  loggedCard(): Observable<ICart> {
    return this.http.get<ICart>(environment.baseUrl + 'cart');
  }

  getLoggedUserCart(): void {
    this.loggedCard().subscribe({
      next: (res) => {
        this.cartNumber.set(res.numOfCartItems);
      },
      error: (err) => {
        console.error('فشل في جلب بيانات السلة:', err);
      },
    });
  }

  removeItem(productId: string): Observable<ICart> {
    return this.http.delete<ICart>(environment.baseUrl + 'cart/' + productId).pipe(
      tap((res: any) => {
        this.cartNumber.set(res.numOfCartItems);
      }),
    );
  }

  clearCard(): Observable<ICart> {
    return this.http.delete<ICart>(environment.baseUrl + 'cart').pipe(
      tap((res: any) => {
        this.cartNumber.set(res.numOfCartItems);
      }),
    );
  }
}
