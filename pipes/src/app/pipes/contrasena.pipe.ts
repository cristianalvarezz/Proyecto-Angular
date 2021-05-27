import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean=true): string {
    //repite la contraseña cuantas veces se vea lo largo 
    return (mostrar)?'*'.repeat(value.length):value;
  }

}
