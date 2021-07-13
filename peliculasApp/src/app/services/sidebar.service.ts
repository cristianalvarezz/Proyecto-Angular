import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Peliculas',
      icono: 'mdi-movie',
      submenu: [
        { titulo: 'Todas las peliculas', url: 'peliculas' },
        { titulo: 'Busqueda de pelicula', url: 'busqueda' },
        // { titulo: 'Main', url: '/' },
        // { titulo: 'Gráficas', url: 'grafica1' },
        // { titulo: 'rxjs', url: 'rxjs' },
        // { titulo: 'Promesas', url: 'promesas' },
        // { titulo: 'ProgressBar', url: 'progress' },
      ]
    },
  ];

  constructor() { }
}

