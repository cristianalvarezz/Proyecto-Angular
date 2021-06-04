import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModels } from "../models/usuario.models";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  private url = "http://localhost:8090/main";

  constructor(private http: HttpClient) {}
  nuevoUsuario(usuario: UsuarioModels) {
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      // es igual a esto
      ...usuario,
    };
    console.log(authData);
    return this.http.post(
      `${this.url}`,
      authData
    );
  }
}
