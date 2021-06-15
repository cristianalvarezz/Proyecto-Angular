import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/shared/material.module';
import { MapaComponent } from './components/mapa/mapa.component';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCRtD3urSoSh751WCm5uN8LcJQMWtEQ6xo'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
