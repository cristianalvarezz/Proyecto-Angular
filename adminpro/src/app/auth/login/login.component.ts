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
    email: [this.email, [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.loginForm.value.remember = true;
    }
    this.renderButton();
  }

  login() {
    this.usuarioService
      .login(this.loginForm.value, this.loginForm.value.remember)
      .subscribe(
        (correcto) => {
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      );
    // console.log( this.loginForm.value );
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

  startApp() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id:
          '836147328644-toved8qvtq0e3mhvsmnba4kovc1cs0j6.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  }

  attachSignin(element:any) {
    
    this.auth2.attachClickHandler( element, {},
        (googleUser:any) => {
            const id_token = googleUser.getAuthResponse().id_token;
            // console.log(id_token);
            this.usuarioService.loginGoogle( id_token )
              .subscribe( resp => {
                // Navegar al Dashboard
                this.ngZone.run( () => {
                  this.router.navigateByUrl('/');
                })
              });

        }, (error:any) => {
            alert(JSON.stringify(error, undefined, 2));
        });
  }
}
