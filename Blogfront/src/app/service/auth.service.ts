import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { map } from 'rxjs/operators';
import { CarritoCompra } from '../models/carrito-compra';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
 
  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
  public traerUsuario(nombreUsuario: any,productos:any) {
    return this.httpClient.get(this.authURL + 'get/' + nombreUsuario).pipe(
      map((data: any) => {
        const datosAquerer = new CarritoCompra(data.id,data.nombre,data.nombreUsuario,data.email,productos);
        return datosAquerer;
      })
    );
  }
}
