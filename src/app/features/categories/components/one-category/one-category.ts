import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../../../product/services/product';
import { ProductInterface } from '../../../product/models/product.interface.ts';
import { Card } from '../../../product/components/card/card';

@Component({
  selector: 'app-one-category',
  imports: [ Card],
  templateUrl: './one-category.html',
  styleUrl: './one-category.css',
})
export class OneCategory {
  private activatedRoute = inject(ActivatedRoute);
  private _productServices = inject(ProductServices);

  product: ProductInterface[] = [];
  slug: string = '';
  
  constructor() {
    this.activatedRoute.paramMap.subscribe({
      next: (urlId) => {
        this.slug = urlId.get('slug') as string;
      },
    });
  }

  getProductByCategory() {
    this._productServices.getProduct().subscribe({
      next: (res) => {
        this.product = res.data.filter((product) => product.category.slug === this.slug);
      },
    });
  }

  ngOnInit() {
    this.getProductByCategory();
  }
}
