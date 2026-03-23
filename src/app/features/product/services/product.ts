import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../models/product.interface.ts';
import { environment } from '../../../../environment/environment.prod.js';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  constructor(private httpClient: HttpClient) {}

  getProduct(): Observable<{ data: ProductInterface[] }> {
    return this.httpClient.get<{ data: ProductInterface[] }>(environment.baseUrl + 'products');
  }
  getProductById(id: string): Observable<any> {
    return this.httpClient.get(` ${environment.baseUrl}products/${id}`);
  }
}
