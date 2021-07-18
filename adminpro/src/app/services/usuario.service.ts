import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register.form.interface';
import { environment } from '../../environments/environment.prod';
import { LoginForm } from '../interfaces/login-form.interface';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

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
}

