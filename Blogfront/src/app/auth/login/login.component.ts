import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //si estamos loggeados 
  isLogged = false;
  //si fallo o hay algun error 
  isLoginFail = false;
  //objeto del login usuario 
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    //servicio de token 
    private tokenService: TokenService,
    private authService: AuthService,
    //reedirigir
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    //aqui comprobamos si estamos logueados
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
//metodo de el login 
  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    //una vez que tenemos los datos los pasamos al service del login 
    this.authService.login(this.loginUsuario).subscribe(
      (data:any) => {
        //esta loggeado verdadero
        this.isLogged = true;
        //usamos los token creados en el servicio todo esto se guardara en el storege
        this.tokenService.setToken(data.token);
       //guardo el token nombre en set 
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        window.location.reload();
        this.router.navigate(['/']);
      },
      (err:any) => {
        this.isLogged = false;
        this.errMsj = err.error.message;

        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        //este es el mensaje de error puesto en el back
        console.log(err.error.message);
      }
    );
  }
  redireccionar(){
            this.router.navigate(['/']);
  }

}
