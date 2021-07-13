import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallePelisComponent } from './peliculas/detalle-pelis/detalle-pelis.component';
import { BusquedaPelisComponent } from './peliculas/busqueda-pelis/busqueda-pelis.component';


const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'peliculas', component: PeliculasComponent, data: { titulo: 'peliculas' } },
            { path: 'busqueda', component: BusquedaPelisComponent, data: { titulo: 'busqueda pelicula' } },
            { path: 'detallepelicula/:id', component: DetallePelisComponent, data: { titulo: 'detalle peliculas' } },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}