import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(imagen: any[]): unknown {
    if(imagen==null){
      return 'assets/images/no-image.png'
    }
    return "https://image.tmdb.org/t/p/w300"+imagen;
  }

}
