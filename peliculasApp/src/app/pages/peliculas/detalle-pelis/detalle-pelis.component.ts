import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pelis',
  templateUrl: './detalle-pelis.component.html',
  styleUrls: ['./detalle-pelis.component.css'],
})
export class DetallePelisComponent implements OnInit {
  item: any;
  pelicula: any = {};
  constructor(private router: ActivatedRoute, private ps: PeliculasService) {
    

    this.router.params.subscribe((params) => {
      this.getPelicula(params['id']);    
    });
  }

  ngOnInit(): void {
    
  }
  getPelicula(id: any) {
    this.ps.buscarPelicula(id).subscribe((pelicula) => {
      console.log(pelicula);
      this.pelicula = pelicula;
    });
    

  }
}
