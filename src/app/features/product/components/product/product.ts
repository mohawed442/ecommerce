import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Card } from '../card/card';
import { ProductServices } from '../../services/product';
import { ProductInterface } from '../../models/product.interface.ts';
import { SearchPipe } from '../../../../core/pipe/search-pipe';
import { FormsModule } from '@angular/forms';
import { SearchOption } from '../../../../core/pipe/search.enum';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [Card, SearchPipe, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  allProducts: ProductInterface[] = [];
  dataSearch: string = '';
  selectedOption: SearchOption = SearchOption.Name;
  option: string = 'Name';
  isLoading: boolean = true;

  readonly SearchOption = SearchOption;
  private readonly _productServices = inject(ProductServices);
  private readonly _cdr = inject(ChangeDetectorRef);

  searchOptionsList = Object.keys(SearchOption) as Array<keyof typeof SearchOption>;
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this._productServices.getProduct().subscribe({
      next: (res) => {
        this.allProducts = res.data;

        this._cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.isLoading = false;
        this._cdr.detectChanges();
      },
    });
  }
}
