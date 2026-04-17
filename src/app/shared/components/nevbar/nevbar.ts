import { ChangeDetectorRef, Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServices } from '../../../core/layouts/auth/services/auth-services';
import { CartServices } from '../../../features/product/components/cart/services/cart-services';
import { ICart } from '../../../features/product/components/cart/models/icart';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nevbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nevbar.html',
  styleUrl: './nevbar.css',
})
export class Nevbar {
  @Input() layout!: string;

  public readonly _cartService = inject(CartServices);
  auth = inject(AuthServices);
  router = inject(Router);
  platformId = inject(PLATFORM_ID);

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  count = this._cartService.cartNumber;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this._cartService.getLoggedUserCart();
    }
  }
}
