import { Component, inject, Input } from '@angular/core';
import { ProductInterface } from '../../models/product.interface.ts.js';
import { RouterLink } from "@angular/router";
import { CartServices } from '../cart/services/cart-services.js';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product!: ProductInterface;
 private readonly cartServices = inject(CartServices);

  addCard() {
    this.cartServices.addCard(this.product._id).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
