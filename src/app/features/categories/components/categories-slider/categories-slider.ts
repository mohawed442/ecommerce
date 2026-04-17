import { Component, inject, signal } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../../services/categories-service';
import { CategoriesInterface } from '../../module/categories-interface';

@Component({
  selector: 'app-categories-slider',
  imports: [CarouselModule],
  templateUrl: './categories-slider.html',
  styleUrl: './categories-slider.css',
})
export class CategoriesSlider {
  private readonly categoriesService = inject(CategoriesService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,

    autoplay: true,

    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    slideTransition: 'linear',

    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  slidesStore = signal<CategoriesInterface[]>([]);

  ngOnInit() {
    console.log(this.slidesStore);

    this.categoriesService.getCategories().subscribe({
      next: (res) => {
        this.slidesStore.set(res.data);
      },
    });
  }
}
