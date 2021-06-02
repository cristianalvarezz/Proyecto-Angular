import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
//rutas hijas

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    //rutas hijas
    children: [
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'detalle', component: UsuarioDetalleComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const app_routing = RouterModule.forRoot(app_routes);
