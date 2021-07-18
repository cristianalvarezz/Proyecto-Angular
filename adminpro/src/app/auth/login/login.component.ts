import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';


declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formSubmitted = false;
  email!: string;

  public loginForm = this.fb.group({
    email: [this.email, [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.loginForm.value.remember = true;
    }
    this.renderButton();
  }

  login() {
    console.log(this.loginForm.value.remember);
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

  onSuccess(googleUser: any) {
    // console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token)
  }
  onFailure(error: any) {
    console.log(error);
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSuccess,
      onfailure: this.onFailure,
    });
  }
}
