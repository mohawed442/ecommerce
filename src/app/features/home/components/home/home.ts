import { Component } from '@angular/core';
import { Product } from "../../../product/components/product/product";
import { MainSlider } from "../../../main-slider/main-slider";
import { CategoriesSlider } from "../../../categories/components/categories-slider/categories-slider";

@Component({
  selector: 'app-home',
  imports: [Product, MainSlider, CategoriesSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
