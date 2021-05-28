import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {

  nuevasCanciones:any[]=[]
  // el operador map toma la informacion y la cambia solo saldra lo que ami me 
  // interesa
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
        .subscribe((data:any) => {
          console.log(data);
          this.nuevasCanciones = data;

    });
  }
}
