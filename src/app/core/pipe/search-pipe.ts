import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from '../../features/product/models/product.interface.ts';
import { SearchOption } from './search.enum';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    value: ProductInterface[],
    searchValue: string = '',
    searchOption = SearchOption.Name,
  ): ProductInterface[] {
    if (searchOption === SearchOption.Name) {
      return value.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    } else if (searchOption === SearchOption.Category) {
      return value.filter((product) =>
        product.category.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
    } else if (searchOption === SearchOption.slug) {
      return value.filter((product) =>
        product.slug.toLowerCase().includes(searchValue.toLowerCase()),
      );
    } else if (searchOption === SearchOption.Brand) {
      return value.filter((product) =>
        product.brand.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
    } else {
      return value;
    }
  }
}
