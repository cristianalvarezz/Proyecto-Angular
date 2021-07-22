import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { CargarUsuario } from '../../../interfaces/cargar-usuarios.interface';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public totalUsuarios:number =0;
  public usuarios:Usuario[]=[];

  public desde:number=0;

  constructor(private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.CargarUsuario();
 
  }
  CargarUsuario(){
    this.UsuarioService.cargarUsuarios(this.desde)
    .subscribe(({total,usuarios})=>{
      this.totalUsuarios=total;
        this.usuarios=usuarios;
        console.log(this.usuarios)
    
    })
  }

  cambiarPagina( valor:number ){
    this.desde+=valor;


    if(this.desde < 0 ){
      this.desde=0;
    }else if(this.desde > this.totalUsuarios){
      this.desde -=valor;
    }
    this.CargarUsuario();
  }

}
