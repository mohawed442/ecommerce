import { Routes } from '@angular/router';
import { User } from './core/layouts/user/user/user';
import { Auth } from './core/layouts/auth/auth/auth';
import { Login } from './core/layouts/auth/login/login';
import { Register } from './core/layouts/auth/register/register';
import { Notfund } from './shared/components/notfund/notfund';
import { Home } from './features/home/components/home/home';
import { Product } from './features/product/components/product/product';
import { ProductDetails } from './features/product/components/product-details/product-details';
import { authGuard } from './core/guards/auth-guard';
import { authLogoutGuard } from './core/guards/auth-logout-guard';
import { Cart } from './features/product/components/cart/components/cart/cart';

export const routes: Routes = [
  {
    path: '',
    component: User,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home, title: 'home' },
      { path: 'products', component: Product, title: 'products' },
      { path: 'product-details/:id', component: ProductDetails, title: 'product-details' },
      { path: 'cart', component: Cart, title: 'cart' },
    ],
  },
  {
    path: '',
    component: Auth,
    canActivate: [authLogoutGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login, title: 'login' },
      { path: 'register', component: Register, title: 'register' },
    ],
  },
  { path: '**', component: Notfund, title: '404' },
];
