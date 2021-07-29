import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {

    let params = new HttpParams().append('page','1')
    params.append('nombre','Fernando Herrera')

  

    //esto lo puedo enviar a la peticion
    return this.http.get(`https://reqress.in/api/users`,{
      params,
     
    }).pipe(
      map((resp:any)=>{
        return resp['data'];
      })
    );
  }



}
