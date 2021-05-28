import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  //este pype recibe un arreglo de img y devuelve un strng
  transform(image: any[],): string {

    //si no viene nada de imagenes
    if(!image){
      return 'assets/img/no-image.png'
    }
    // En caso de que si alla una imagen retorno la url
    if(image.length>0){
      return image[0].url;
    }else{
      return 'assets/img/no-image.png'
    }
  
  }

}
