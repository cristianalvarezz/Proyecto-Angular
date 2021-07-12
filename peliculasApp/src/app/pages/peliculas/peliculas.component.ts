import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  peliculasPopulares: any[] = [];
  loading: boolean = true;
  mensajeError: any | undefined;
  error: boolean = false;
  seleccionado: any;

  lista: string[] = [
    '¿Qué películas hay en los cines?',
    '¿Cuáles son las películas más populares?',
    '¿Cuáles son las películas mejor calificadas con R?',
    '¿Cuáles son las películas para niños más populares?',
    '¿Cuáles son las mejores películas de 2010?',
    '¿Cuáles son los mejores dramas que se estrenaron este año?',
    '¿Cuáles son las películas de ciencia ficción mejor calificadas en las que ha estado Tom Cruise?',
    '¿Cuáles son las comedias más taquilleras de Will Ferrell?',
    '¿Cuáles son los mejores dramas? ',
  ];

  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe(
      (data: any) => {
        this.peliculasPopulares = data.results;
        console.log(data);
        this.loading = false;
      },
      (errorServicio) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        // this.mensajeError= console.log(errorServicio.error.error.message);
      }
    );
  }

  elegirtipodebusqueda(busqueda: any) {
    console.log(busqueda);
    this._ps.elegirtipodebusqueda(busqueda)?.subscribe(
      (data: any) => {
        console.log(data);
        this.peliculasPopulares = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      }
    );

    //console.log(busqueda); // Aquí iría tu lógica al momento de seleccionar algo
  }

  ngOnInit(): void {}
}
