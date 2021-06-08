import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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

      //traigo el password del formulario
      const pass1Control = formGroup.controls[pass1Name];
     //traigo el password 2 
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value ) {
        //tengo que pasar la validacion 
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }

    }

  }
  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    //si se escribio lo que la persona escribio 
    if( !control.value ) {
      return Promise.resolve({});
    }

    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        //si la validacion choca con esto quiere decir que esta chocando y algo anda mal 

        if ( control.value === 'cristian' ) {
          resolve({ existe: true });
        } else {
          resolve({});
        }

      }, 3500);


    });

  }

  

  
}
