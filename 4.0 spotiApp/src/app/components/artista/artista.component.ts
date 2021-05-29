import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  loadingArtist: boolean | undefined;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params) => {
      // console.log(params['id']);
   
      this.getArtista(params['id']);
      this.loadingArtist = false;
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe((artista) => {
      this.artista = artista;
    });
  }
}
