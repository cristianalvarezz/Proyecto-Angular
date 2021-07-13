import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  peliculasPopulares: any[] = [];
  noExiste: boolean = false;
  mensajeError: any | undefined;
  error: boolean = false;
  seleccionado: any;
  mensaje =" No existen mas peliculas en este listado devuelvete "
  busqueda =1;

  lista: string[] = [
    '¿Qué películas hay en los cines?',
    '¿Cuáles son las películas más populares?',
    '¿Cuáles son las películas mejor calificadas con R?',
    '¿Cuáles son las películas para niños más populares?',
    '¿Cuáles son las mejores películas de 2010?',
    '¿Cuáles son los mejores dramas que se estrenaron este año?',
    '¿Cuáles son las películas de ciencia ficción mejor calificadas en las que ha estado Tom Cruise?',
    '¿Cuáles son las comedias más taquilleras de Will Ferrell?',
  ];

  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe(
      (data: any) => {
        this.peliculasPopulares = data.results;
        this.nohaydatos(this.peliculasPopulares);
      
      },
      (errorServicio) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        // this.mensajeError= console.log(errorServicio.error.error.message);
      }
    );
  }

  ngOnDestroy(): void{
    localStorage.removeItem('busqueda');
  }
  elegirtipodebusqueda(busqueda: any) {
    this.guardarStorage(busqueda);
    this._ps.elegirtipodebusqueda(busqueda)?.subscribe(
      (data: any) => {
        this.peliculasPopulares = data;
        this.nohaydatos(this.peliculasPopulares);
      },
      (errorServicio) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }
  nohaydatos(dato: any) {
 
    if (dato.length == 0) {
      this.noExiste = true;
    } else {
      this.noExiste = false;
    }
  }


 progreso1: number = 1;

  cambiarValor( valor: number=0 ) {
    if ( this.progreso1 >= 100 && valor >= 0 ) {
      return this.progreso1 = 100;
    }
    if ( this.progreso1 <= 0 && valor < 0 ) {
      return this.progreso1 = 0;
    }
    this.progreso1 = this.progreso1 + valor;
    this.busqueda = JSON.parse(localStorage.getItem('busqueda') || '');
    this._ps.elegirtipodebusqueda(this.busqueda,this.progreso1)?.subscribe(
      (data: any) => {
        this.peliculasPopulares = data;
        this.nohaydatos(this.peliculasPopulares);
      },
      (errorServicio) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      }
    );
    return
  }

  guardarStorage(number:any) {
    //transformo el arreglo de marcadores en un json
    localStorage.setItem('busqueda', JSON.stringify(number));
  }
  ngOnInit(): void {}
}
