import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsuarioModels } from "src/app/models/usuario.models";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModels;
  constructor() {}

  ngOnInit() {
    this.usuario = new UsuarioModels();
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
