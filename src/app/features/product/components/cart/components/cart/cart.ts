import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CartServices } from '../../services/cart-services';
import { ICart } from '../../models/icart';
import { Router, RouterLink } from '@angular/router';
import { Notification } from '../../../../../../core/services/notification';

@Component({
  selector: 'app-cart',
  imports: [ RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  private readonly cartServices = inject(CartServices);
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly notification = inject(Notification);
  private readonly router = inject(Router);

  cartData: ICart = {} as ICart;
  isLoading: boolean = false;
  bIsLoading: boolean = false;
  cardId: string = '';

  updateCount(productId: string, count: number) {
    this.bIsLoading = true;
    this.cartServices.updateCard(count.toString(), productId).subscribe((res) => {
      this.cartData = res;
      this.notification.show('Cart updated!', 'success');
      this.bIsLoading = false;
      this._cdr.detectChanges();
    });
  }

  removeItem(productId: string) {
    this.cartServices.removeItem(productId).subscribe((res) => {
      this.cartData = res;
      this.notification.show('Product removed from your cart!', 'success');
      this._cdr.detectChanges();
    });
  }

  clearCard() {
    this.cartServices.clearCard().subscribe((res) => {
      this.cartData = res;
      this.notification.show('Cart cleared!', 'success');
      this._cdr.detectChanges();
    });
  }

  order() {
    const cartId = this.cartData?.data?._id;
    if (cartId) {
      this.router.navigate(['/order', cartId]);
    } else {
      this.notification.show('عذراً، فشل الوصول لبيانات السلة', 'error');
    }
  }

  getProducts() {
    this.isLoading = true;
    return this.cartServices.loggedCard().subscribe((res) => {
      this.cartData = res;
      this.isLoading = false;
      this._cdr.detectChanges();
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
