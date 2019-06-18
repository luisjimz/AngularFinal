import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dniFormat'
})
export class DniFormatPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    value.toString();
    console.log(value);
    return null;
  }

}
