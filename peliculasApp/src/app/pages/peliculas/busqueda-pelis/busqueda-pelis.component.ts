import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-busqueda-pelis',
  templateUrl: './busqueda-pelis.component.html',
  styleUrls: ['./busqueda-pelis.component.css']
})
export class BusquedaPelisComponent implements OnInit {

  pelicula: any[]=[]; 
  noExiste:boolean =false;
  mensaje ="Pelicula no encontrada intenta buscar con otro titulo "
  constructor(private ps:PeliculasService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.ps.buscarPeliculatexto(termino).subscribe((data:any)=>{
      this.pelicula=data;
      if(this.pelicula.length==0){
        this.noExiste=true;
      }else{
        this.noExiste=false;
      }
      
    })
  }

}
