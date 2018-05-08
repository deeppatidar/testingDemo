import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormator'
})
export class CurrencyFormatorPipe implements PipeTransform {
  transform(items: any, filter: any): Array<any> {
      if(items)
      if (! isNaN(items)) {
        var result = items.toString().split('.');
        var lastThree = result[0].substring(result[0].length - 3);
              var otherNumbers = result[0].substring(0, result[0].length - 3);
              if (otherNumbers != '')
                  lastThree = ',' + lastThree;
              var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

              if (result.length > 1) {
                  output += "." + result[1];
              }
            return  output;
      }
    }

}
