//importo paquete para el token que necesita el spotify para funcionar
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  //con este decorador no necesito importar en el modulo
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('listo');
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    //headers necesarios para que me funcione el get de spotify
    const headers = new HttpHeaders({
      Authorization:
        'Bearer QCU4rRNcafK0FiKqIlsIzzES289Tk2iGnW9PLnrO0JMHdUJDYIQ5RJid-FG76pjc2OsWIh8-S-sbTlh-fs',
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist&limit=15&offset=5`
    ).pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string) {
    // console.log(id);
    return this.getQuery(`artists/${id}`);
  }

  getTopTraks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((data: any) => data.tracks));
  }
}
