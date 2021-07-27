import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public usuario!: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = usuarioService.usuario;
  }

  logout() {
    this.usuarioService.logout();
  }

  buscar(termino: any) {
  
    if(termino.length==0){
      this.router.navigateByUrl('/dashboard');
    }

    this.router.navigateByUrl(`dashboard/buscar/${termino}`);
  }
}
