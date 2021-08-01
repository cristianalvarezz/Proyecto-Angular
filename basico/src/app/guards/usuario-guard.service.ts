import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate{

  constructor(public wsService:WebsocketService,private router:Router) { }

  canActivate(){
    //evaluo si exite el usuario   
    
    if(this.wsService.getUsuario().nombre||this.wsService.getUsuario().nombre===undefined){
     return true
    }else{
      this.router.navigateByUrl('/')
      return false
    }
  }
}
