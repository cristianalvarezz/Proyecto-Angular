import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { YoutubeService } from './services/youtube/youtube.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from './pipes/youtube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubePipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
