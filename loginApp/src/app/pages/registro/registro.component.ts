import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioModels } from "src/app/models/usuario.models";
import { AuthServiceService } from "src/app/services/authService.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModels;
  recordarme =false;

  constructor(private auth: AuthServiceService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModels();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      type: "info",
      text: "Espere por favor...",
    });
    Swal.showLoading();
    this.auth.nuevoUsuario(this.usuario).subscribe((res) => {

       Swal.close();
      Swal.fire({
        position: "center",
        title: "Guardado correctamente",
        showConfirmButton: false,
        timer: 1000,
      });

      if(this.recordarme){
        localStorage.setItem('email',this.usuario.email)
      }
      this.router.navigateByUrl('/home')
    });
  }
}
