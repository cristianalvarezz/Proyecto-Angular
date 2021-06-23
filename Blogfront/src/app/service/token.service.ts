import { Injectable } from '@angular/core';

//variables a almacenar en el stortorage del navegador 
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';

const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
//esta clase se utilizara para saber si estamos loggeados o no lo estamos 
//y para obtener el token 
export class TokenService {

  //array de los roles  vacio 
  roles: Array<string> = [];
  constructor() { }

  //editar el token 
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    //atrapa el antiguo token y lo cambia por el nuevo 
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    //retorna e token 
    return sessionStorage.getItem(TOKEN_KEY);
  }

  //para el nombre de usuario lo mismo 
  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }
//obtengo el nombre 
  public getUserName(): any {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  //editar los roles 
  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): any[] {
    this.roles = [];
    //comprobamos si en el storege tenemos la variable 

    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
    //entonces recorremos todos roles de los authority que ocmo mucho son el user y el admin 
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)||'{}').forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}

function getItem(AUTHORITIES_KEY: string): string {
  throw new Error('Function not implemented.');
}
