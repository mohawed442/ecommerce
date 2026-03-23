import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Card } from '../card/card'; 
import { ProductServices } from '../../services/product';
import { ProductInterface } from '../../models/product.interface.ts'; 
import { Loading } from '../../../../shared/components/loading/loading';

@Component({
  selector: 'app-product',
  standalone: true, 
  imports: [Card, Loading],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  allProducts: ProductInterface[] = [];
  
  isLoading: boolean = true;

  private readonly _productServices = inject(ProductServices);
  private readonly _cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.isLoading = true; 
    
    this._productServices.getProduct().subscribe({
      next: (res) => {
        this.allProducts = res.data;
        this.isLoading = false;
        
        this._cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.isLoading = false;
        this._cdr.detectChanges();
      }
    });
  }
}