import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
;

  constructor(public _ps: PeliculasService) {
  

    // this._ps.buscarPelicula("wall-e")
    // .subscribe((data:any)=>console.log(data))
  }
}
