import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor( private UsuarioService:UsuarioService,public router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      this.UsuarioService.validarToken().subscribe(resp=>{
        console.log(resp)
      })

      //va a retornar el token 
    return this.UsuarioService.validarToken().pipe(
      //esto para por si el token no es valido 
      tap(estaAutenticado=>{
        if(!estaAutenticado){
          //esto se dispara si esto esta en falso 
          this.router.navigateByUrl('/login')
        }
      })
    );
  }
  
}
