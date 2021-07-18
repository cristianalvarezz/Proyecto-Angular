import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  email!:string;

  public loginForm = this.fb.group(
    {
      email: [this.email, [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember:[false]
    }
  );

  constructor(private fb:FormBuilder,private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.email=localStorage.getItem('email')||'';
    if(this.email.length>1){
      this.loginForm.value.remember=true;
    }
  }

  login(){
    console.log(this.loginForm.value.remember);
      this.usuarioService.login(this.loginForm.value,this.loginForm.value.remember)
          .subscribe(correcto=>{
            this.router.navigate(['/dashboard'])
          },(err)=>{
            Swal.fire('Error',err.error.msg,'error');
          });
      // console.log( this.loginForm.value );
  }

}
