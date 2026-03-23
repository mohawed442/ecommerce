import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthServices } from '../../../core/layouts/auth/services/auth-services';

@Component({
  selector: 'app-nevbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nevbar.html',
  styleUrl: './nevbar.css',
})
export class Nevbar {

  @Input() layout!:string

  auth = inject(AuthServices) ; 
  router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  
}
