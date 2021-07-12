import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReducirTextoPipe } from './pipes/reducir-texto.pipe';
import { FormsModule } from '@angular/forms';
import { NoImagenPipe } from './pipes/no-imagen.pipe'

@NgModule({
  declarations: [
    DashboardComponent,
    PeliculasComponent,
    PagesComponent,
    ReducirTextoPipe,
    NoImagenPipe,

  ],
  exports:[
    DashboardComponent,
    PeliculasComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
