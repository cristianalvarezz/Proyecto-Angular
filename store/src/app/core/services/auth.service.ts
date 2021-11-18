import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8090/main";
  userid!: string;
  constructor(
    private http: HttpClient
  ) { }

  nuevoUsuario(nombre: any,password:any,email:any) {
    const authData = {
      nombre: nombre,
      password: password,
      email: email,
      // es igual a esto
      // ...usuario,
    };

    return this.http.post(`${this.url}`, authData).pipe(
      map((resp:any) => {
        console.log(resp);
        return resp;
      })
    );
  }
  private guardarToken(idus: string) {
    this.userid = idus;
    console.log( "este es el tamaño "+this.userid+ idus +"algo anda mal" )
    localStorage.setItem("idus", idus);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem("expira", hoy.getTime().toString());
  }
  login(password:any,email:any) {
    const authData = {
      password: password,
      email: email,
    };

    return this.http
      .get(`${this.url}/${password}/${email}`)
      .pipe(
        map((resp) => {
          console.log(resp)
          return resp;
        })
      );
  }
  
  
}