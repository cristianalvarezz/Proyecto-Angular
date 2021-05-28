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
        'Bearer BQD3-7fRl1Re0e7O-n6Gr3kY4855EZUOJgg6BrV7ObVk1ivWYhwfulDG0zlIaOFo5sxA6t30EUxKapmp8FU',
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
    //hago la peticion a la api de spoti
    //si tengo error de token debo generar uno nuevo
    //con map capto la informacion que necesitos y no todos
  }

  getArtista(termino: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist&limit=15&offset=5`
    ).pipe(map((data: any) => data.artists.items));
  }
}
