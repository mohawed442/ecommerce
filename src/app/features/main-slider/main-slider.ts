import { Component, signal } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule],
  templateUrl: './main-slider.html',
  styleUrl: './main-slider.css',
})
export class MainSlider {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,

    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  // slidesStore = signal<any[]>([
  //   {
  //     id: 'slide-1',
  //     text: 'عرض خاص',
  //     positionClass: 'items-center justify-center', // منتصف
  //     Image: '../../../../images/slider-image-1.jpeg',
  //   },
  //   {
  //     id: 'slide-2',
  //     text: 'وصل حديثاً',
  //     positionClass: 'items-end justify-start',
  //     Image: '../../../../images/slider-image-2.jpeg',
  //   },
  // ]);
}
