import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductServices } from '../../services/product';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../models/product.interface.ts';
import { Loading } from "../../../../shared/components/loading/loading";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  private readonly _productServices = inject(ProductServices);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _cdr = inject(ChangeDetectorRef); // الحل السحري

  id: string = '';
  product: ProductInterface | null = null;
  isLoading: boolean = false;

  ngOnInit() {
    this.getProductById();
  }

  getProductById() {
    this._activatedRoute.paramMap.subscribe({
      next: (urlId) => {
        this.id = urlId.get('id') as string;
        this.product = null;

        if (this.id) {
          this.getProduct();
        }
      },
    });
  }

  getProduct() {
    this.isLoading = true;
    this._productServices.getProductById(this.id).subscribe({
      next: (res) => {
        this.product = res.data;
        this.isLoading = false;

        this._cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
        this._cdr.detectChanges();
      },
    });
  }
}
