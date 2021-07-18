import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register.form.interface';
import { environment } from '../../environments/environment.prod';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}


  //validar peticion de token 
    validarToken():Observable<any>{
      const token =localStorage.getItem('token')||'';

     return this.http.get(`${base_url}/login/renew`,{
        //especifico el x-token
        headers:{
          'x-token':token
        }
      }).pipe(tap((resp:any)=>{
        localStorage.setItem('token',resp.token)
      }),
      map(resp=>true
        //si es una respuesta exitosa tengo que retornar true si no false 
        ),
        //en caso de error 
        catchError(error=>of(false))
      )
    }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData);
  }

  login(usuario: Usuario, recordar: boolean = false) {

    console.log(recordar);
    if(recordar){
      localStorage.setItem('email',usuario.email)
    }else{
      localStorage.removeItem('email')
    }

    return this.http.post(`${base_url}/login`, usuario).pipe(
      map((res: any) => {
        localStorage.setItem('token',res.token);
        
        return true;
      })
    );
  }

  loginGoogle( token:any ) {
    console.log("Este es el token de google"+token)
    return this.http.post(`${ base_url }/login/google`, { token } )
                .pipe(
                  tap( (resp: any) => {
                    console.log("ESta es la respuesta"+resp)
                    localStorage.setItem('token', resp.token )
                  })
                );

  }
}

