import { Pipe, PipeTransform } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Pipe({
  name: 'dniFormat'
})
export class DniFormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    var transform : string[] = [];
    var number : number;
    //Es aqui donde determinamos el comportamiendo de la funcion de LocaleString, para poder formatear el numero segun sea requerido/por país.
    number.toLocaleString('es', );
    for (var i = 0; i < value.length; i++){
      console.log(i);
      if(i == 2 || i == 5 || i == 8 || i == 11 ){
        transform.push[','];
        transform.push(value[i]);
      }
      else{
        transform.push(value[i]);
      }
    }
    // console.log(value[11]);
    console.log(transform);
    // console.log(transform.toString());
    return null;
  }
}
