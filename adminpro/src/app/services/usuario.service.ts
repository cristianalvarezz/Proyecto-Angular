import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { RegisterForm } from '../interfaces/register.form.interface';
import { environment } from '../../environments/environment.prod';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const base_url = environment.base_url;
declare const gapi: any;
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public auth2: any;
  usuario!: Usuario;


  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.googleInit();
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid():string {
    return this.usuario.uid || '';
  }
  //validar peticion de token
  validarToken(): Observable<any> {
    const token = localStorage.getItem('token') || '';

    return this.http
      .get(`${base_url}/login/renew`, {
        //especifico el x-token
        headers: {
          'x-token': token,
        },
      })
      .pipe(
        map((resp: any) => {
        
          const { email, google, img='', nombre, role, uid } = resp.usuario;
          this.usuario = new Usuario(nombre, email, '', img, google, role, uid);
          
          localStorage.setItem('token', resp.token);
          return true;
        }),
        //en caso de error
        catchError((error) => of(false))
      );
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData);
  }

  login(usuario: Usuario, recordar: boolean = false) {
    console.log(recordar);
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(`${base_url}/login`, usuario).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token);

        return true;
      })
    );
  }

  loginGoogle(token: any) {
    console.log('Este es el token de google' + token);
    return this.http.post(`${base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');

    this.auth2.signOut().then(() => {
      //esto es para manjar librerias externas aun que se ejecuten fuera del mismo
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      });
    });
  }

  googleInit() {
    //las promesas siempre se ejecutaran
    return new Promise<void>((resolve) => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id:
            '836147328644-toved8qvtq0e3mhvsmnba4kovc1cs0j6.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });

        resolve();
      });
    });
  }
  actualizarPerfil( data: { email: string, nombre: string, role?: string } ) {

    data = {
      ...data,
      role: this.usuario.role
    };

    return this.http.put(`${ base_url }/usuarios/${ this.uid }`, data, {
      headers: {
        'x-token': this.token
      }
    });

  }
}
