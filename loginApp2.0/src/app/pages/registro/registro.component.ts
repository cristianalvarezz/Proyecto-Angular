import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsuarioModels } from "src/app/models/usuario.models";
import { AuthServiceService } from "src/app/services/authService.service";


@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModels;

  constructor(private auth: AuthServiceService) {}

  ngOnInit() {
    this.usuario = new UsuarioModels();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.nuevoUsuario(this.usuario).subscribe((res) => {
      console.log(res);
    });
  }
}
