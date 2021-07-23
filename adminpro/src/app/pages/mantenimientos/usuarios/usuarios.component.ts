import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { CargarUsuario } from '../../../interfaces/cargar-usuarios.interface';
import { BusquedasService } from '../../../services/busquedas.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent implements OnInit {
  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];

  public usuariosTemp: Usuario[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(
    private UsuarioService: UsuarioService,
    private busquedasService: BusquedasService
  ) {}

  ngOnInit(): void {
    this.CargarUsuario();
  }
  CargarUsuario() {
    this.cargando = true;
    this.UsuarioService.cargarUsuarios(this.desde).subscribe(
      ({ total, usuarios }) => {
        this.totalUsuarios = total;
        this.usuarios = usuarios;
        this.usuariosTemp = usuarios;
        this.cargando = false;
      }
    );
  }

  cambiarPagina(valor: number) {
    this.desde += valor;

    if (this.desde < 0) {
      this.desde = 0;
    } else if (this.desde > this.totalUsuarios) {
      this.desde -= valor;
    }
    this.CargarUsuario();
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      return (this.usuarios = this.usuariosTemp);
    }
    this.busquedasService.buscar('usuarios', termino).subscribe((resp) => {
      this.usuarios = resp;
    });
    return;
  }
}
