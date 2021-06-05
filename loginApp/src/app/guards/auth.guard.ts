import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/authService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthServiceService,private router:Router){}
  
  
  canActivate(): boolean {
    console.log("guard")
    if(this.auth.estaAutenticado()){
      console.log("guard");
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
 
  }
  
}
