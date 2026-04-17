import { ChangeDetectorRef, Component, inject } from '@angular/core';

import { DatePipe } from '@angular/common';
import { CategoriesInterface } from '../../module/categories-interface';
import { CategoriesService } from '../../services/categories-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-categories',
  imports: [DatePipe, RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  private readonly _cdr = inject(ChangeDetectorRef);

  catogres: CategoriesInterface[] = [];
  private readonly categoriesService = inject(CategoriesService);

  getCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (res) => {
        this.catogres = res.data;
        this._cdr.detectChanges();
        console.log(this.catogres);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.getCategories();
  }
}
