import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'current'
})
export class CurrencyPipe implements PipeTransform {
  transform(items: any, filter: any): Array<any> {
    if (! isNaN(items)) {
      let a = Number(items).toLocaleString('en');
      console.log(a);
      // console.log(items);
      var result = items.toString().split('.');
      // console.log(result);
      var lastThree = result[0].substring(result[0].length - 3);
            var otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            if (result.length > 1) {
                output += "." + result[1];
            }
            // console.log(output);
          return  output;
    }
    //return null;
  }
}
