import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../models/product.interface.ts.js';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product!: ProductInterface;
}
