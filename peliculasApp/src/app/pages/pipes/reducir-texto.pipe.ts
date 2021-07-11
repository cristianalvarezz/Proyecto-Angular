import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducirTexto'
})
export class ReducirTextoPipe implements PipeTransform {

  arrayTextoLimpio: any;
  transform(value: string, ...args: unknown[]): string {

    
    return value.slice(0,100) ;
  }

}
