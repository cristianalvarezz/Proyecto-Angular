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
  loading:boolean=true;
  mensajeError:any | undefined;
  error:boolean=false;
  constructor(private spotify: SpotifyService) {
   
    this.spotify.getNewReleases()
        .subscribe((data:any) => {
          console.log(data);
          this.nuevasCanciones = data;
          this.loading=false;

    },(errorServicio)=>{
      this.error=true;
      this.mensajeError=errorServicio.error.error.message;
      // this.mensajeError= console.log(errorServicio.error.error.message);
    });
  }
}
