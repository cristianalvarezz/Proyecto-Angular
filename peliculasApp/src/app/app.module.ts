import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule,  HttpClientJsonpModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientJsonpModule,
    SharedModule,
    AppRoutingModule,
    PagesModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
