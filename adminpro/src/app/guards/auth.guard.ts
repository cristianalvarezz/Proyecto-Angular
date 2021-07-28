import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private UsuarioService: UsuarioService, public router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.UsuarioService.validarToken().subscribe((resp) => {
      //va a retornar el token
      return this.UsuarioService.validarToken().pipe(
        //esto para por si el token no es valido
        tap((estaAutenticado) => {
          if (!estaAutenticado) {
            //esto se dispara si esto esta en falso
            this.router.navigateByUrl('/login');
          }
        })
      );
    });

    //va a retornar el token
    return this.UsuarioService.validarToken().pipe(
      //esto para por si el token no es valido
      tap((estaAutenticado) => {
        if (!estaAutenticado) {
          //esto se dispara si esto esta en falso
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
