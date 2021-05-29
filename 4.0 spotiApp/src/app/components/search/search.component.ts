import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

artistas:any[] =[];
loading:boolean | undefined;
  constructor(private spotify:SpotifyService) { }
  //lo que sea que la persona me escriba lo traere acaa
 buscar(termino:string){
  this.loading=true;
  this.spotify.getArtistas(termino)
    .subscribe((data:any)=>{
      console.log(data);
      this.artistas = data;
      this.loading=false;
    })
 }

}
