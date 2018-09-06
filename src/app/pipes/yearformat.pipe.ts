import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'yearformat'
})
export class YearformatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, 'yyyy');
  }

}
