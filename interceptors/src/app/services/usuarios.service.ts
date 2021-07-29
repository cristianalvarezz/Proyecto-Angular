import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {

    let params = new HttpParams().append('page','1')
    params.append('nombre','Fernando Herrera')

    const headers = new HttpHeaders({
      'token-usuario':'ABC1234532632675'
    })
    //esto lo puedo enviar a la peticion
    return this.http.get(`https://reqres.in/api/users`,{
      params,
      headers
    });
  }
}
