import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioModels } from "src/app/models/usuario.models";
import { AuthServiceService } from "src/app/services/authService.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModels = new UsuarioModels();
  recordarme = false;
  constructor(private auth: AuthServiceService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("email")) {
      this.usuario.email = localStorage.getItem("email");
      this.recordarme = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      type: "info",
      text: "Espere por favor...",
    });
    Swal.showLoading();
    Swal.close();
    this.auth.login(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        Swal.close();
        if (resp) {
          this.router.navigateByUrl("/home");
        } else {
          Swal.close();
          Swal.fire({
            type: "error",
            title: "Error al autenticar",
            text: "Ingresa una contraseña valida",
          });
        }
      },
      (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          type: "error",
          title: "Error al autenticar",
          text: err.error.error.message,
        });
      }
    );
  }
}
