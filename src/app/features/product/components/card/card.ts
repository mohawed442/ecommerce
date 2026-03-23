import { Component, inject, Input } from '@angular/core';
import { ProductInterface } from '../../models/product.interface.ts.js';
import { Router, RouterLink } from '@angular/router';
import { CartServices } from '../cart/services/cart-services.js';
import { Notification } from '../../../../core/services/notification.js';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product!: ProductInterface;
  private readonly cartServices = inject(CartServices);
  private readonly notification = inject(Notification);
  private readonly router = inject(Router);

  addCard() {
    this.cartServices.addCard(this.product._id).subscribe({
      next: (res) => {
this.notification.show('Product added to your cart!', 'success', {
  action: {
    label: 'View Cart',
    callback: () => {
      this.router.navigate(['/cart']); 
    }
  }
});      },
      error: (err) => 
        this.notification.show('Error adding product to cart', 'error'),
    });
  }
}
