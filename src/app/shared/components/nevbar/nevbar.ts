import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServices } from '../../../core/layouts/auth/services/auth-services';
import { CartServices } from '../../../features/product/components/cart/services/cart-services';
import { ICart } from '../../../features/product/components/cart/models/icart';

@Component({
  selector: 'app-nevbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nevbar.html',
  styleUrl: './nevbar.css',
})
export class Nevbar {
  
  
  @Input() layout!: string;
  
  private readonly _cartService = inject(CartServices);
  auth = inject(AuthServices);
  router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

    count = this._cartService.cartNumber;

  ngOnInit(): void {
    this._cartService.getLoggedUserCart()
  }
}
