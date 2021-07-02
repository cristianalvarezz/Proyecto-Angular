import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutingModule } from './auth/auth.routing';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [

  //path: '/dashboard' PagesRouting
  //path : '/auth' AuthRouting 
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),PagesRoutingModule,authRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
