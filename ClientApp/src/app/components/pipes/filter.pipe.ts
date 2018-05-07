import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, filter: any): Array<any> {
    if(filter) {
      return items.filter( item => {
        for (let key in item) {
          if(item[key].toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
            return item;
          }
        }
      });
    } else {
      return items;
    }
  }
}
