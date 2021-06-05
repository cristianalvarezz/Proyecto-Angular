import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModels } from "../models/usuario.models";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  private url = "http://localhost:8090/main";

  userid: string;
  constructor(private http: HttpClient) {}

  nuevoUsuario(usuario: UsuarioModels) {
    const authData = {
      nombre: usuario.nombre,
      password: usuario.password,
      email: usuario.email,
      // es igual a esto
      // ...usuario,
    };

    return this.http.post(`${this.url}`, authData).pipe(
      map((resp) => {
        this.guardarToken(resp["id"]);
        return resp;
      })
    );
  }
  obtenerUsuario() {
    return this.http.get(`${this.url}`);
  }

  login(usuario: UsuarioModels) {
    const authData = {
      ...usuario,
    };
    console.log(usuario);
    return this.http
      .get(`${this.url}/${usuario.password}/${usuario.email}`)
      .pipe(
        map((resp) => {
          console.log("Entro en el mapa de RXJS");
          this.guardarToken(resp["id"]);
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

  leerToken() {
    if (localStorage.getItem("token")) {
      this.userid = localStorage.getItem("token");
    } else {
      this.userid = "";
    }
    return this.userid;
  }

  estaAutenticado(){
    console.log("por aqui paso "+this.userid);
    return this.userid != undefined;

  }

  logout(){
    localStorage.removeItem('idus');
  }
}
