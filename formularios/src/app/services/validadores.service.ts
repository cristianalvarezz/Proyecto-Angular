import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

interface ErrorValidate {
  [s:string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  //no permitir este nombre
  //voy a regresar un objeto
  noHerrera( control: FormControl ): ErrorValidate {

    if ( control.value?.toLowerCase() === 'herrera' ){
      return {
        noHerrera: true
      }
    }
    return{
      
    }
  }
}
