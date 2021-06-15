import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  marcadores: Marcador[] = [];
  constructor(private snackBar: MatSnackBar) {
    // const nuevoMarcado = new Marcador(51.678418, 7.809007);
    // this.marcadores.push(nuevoMarcado);

    //si existen marcadores en el storage
    if(localStorage.getItem('marcadores')){
     // hacemos la inversa 
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')||'{}');
    }
  }
  ngOnInit(): void {}

  agregarMarcador(evento: any) {
    //aggaro las cordenadas enviadas al hacer click en cualquier parte del mapa 
    const coords: { lat: number; lng: number } = evento.coords;
    const nuevoMarcado = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcado);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar',{duration:3000});
  }

  guardarStorage(){
    //transformo el arreglo de marcadores en un json 
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    
  }
  borrarMarcador(i:number){
    // console.log(i);
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador Borrado', 'Cerrar',{duration:3000});
    
  }
}
