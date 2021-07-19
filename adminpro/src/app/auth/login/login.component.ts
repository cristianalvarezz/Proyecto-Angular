import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formSubmitted = false;
  email!: string;
  public auth2: any;
  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
   
    this.renderButton();
  }

  login() {

    this.usuarioService.login( this.loginForm.value )
      .subscribe( resp => {

        if ( this.loginForm.get('remember')?.value){ 
          localStorage.setItem('email', this.loginForm.get('email')?.value );
        } else {
          localStorage.removeItem('email');
        }

        // Navegar al Dashboard
        this.router.navigateByUrl('/');

      }, (err) => {
        // Si sucede un error
        try {
          if(err.error.errors.password.msg){
            Swal.fire('Error', err.error.errors.password.msg, 'error' );
          }
          if(err.error.errors.email.msg){
            Swal.fire('Error', err.error.errors.email.msg, 'error' );
          }
          Swal.fire('Error', 'Los dos campos son obligatorios', 'error' );
        } catch (error) {
          Swal.fire('Error', '  los campos no coinciden ', 'error' );
        }
   
      });

  }
  //

  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });
    this.startApp();
  }

  async startApp() {

     //llamo la promesa
      await this.usuarioService.googleInit();
      this.auth2 =this.usuarioService.auth2;

      this.attachSignin(document.getElementById('my-signin2'));
    
  }

  attachSignin(element:any) {
    
    this.auth2.attachClickHandler( element, {},
        (googleUser:any) => {
            const id_token = googleUser.getAuthResponse().id_token;
            // console.log(id_token);
            this.usuarioService.loginGoogle( id_token )
              .subscribe( resp => {
                // Navegar al Dashboard
                //el ngZone es para que angular tome el control 
                this.ngZone.run( () => {
                  this.router.navigateByUrl('/');
                })
              });

        }, (error:any) => {
            alert(JSON.stringify(error, undefined, 2));
        });
  }
}
