import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    return{}
  }
  passwordsIguales( pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }

    }

  }

  

  
}
