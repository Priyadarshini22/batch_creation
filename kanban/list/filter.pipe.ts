// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {

//     if (!items) {
//       return [];
//     }
//     if (!searchText) {
//       return items;
//     }
//     searchText = searchText.toLocaleLowerCase();

//     return items.filter(it => {
//       return it.toLocaleLowerCase().includes(searchText);
//     });
//   }
// }
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, filter?: any, searchKey?: any): any {
    return filter ? items.filter((show: any) => show[searchKey] === filter) : items;
  }
}
