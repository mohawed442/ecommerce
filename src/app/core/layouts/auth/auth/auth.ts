import { Component } from '@angular/core';
import { Nevbar } from '../../../../shared/components/nevbar/nevbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../../../shared/components/footer/footer";

@Component({
  selector: 'app-auth',
  imports: [Nevbar, RouterOutlet, Footer],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {}
