import { Component } from '@angular/core';
import { Product } from "../../../product/components/product/product";
import { MainSlider } from "../../../main-slider/main-slider";

@Component({
  selector: 'app-home',
  imports: [Product, MainSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
