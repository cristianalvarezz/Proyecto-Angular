import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIOS_ROUTES} from './components/usuario/usuario.routes'
//rutas hijas

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    //rutas hijas
    children: USUARIOS_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const app_routing = RouterModule.forRoot(app_routes);
