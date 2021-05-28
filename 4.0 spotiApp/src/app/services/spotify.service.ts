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

  getNewReleases() {
    //headers necesarios para que me funcione el get de spotify
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCRzvrtRTZxm2cvm9CXVY3EO6GKEcg_oKCLtF_yvnp_gi3O88p3Nps7ATkYTt9FO3PEk0gqDpjyDZrJ5t0',
    });

    //hago la peticion a la api de spoti
    //si tengo error de token debo generar uno nuevo
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(
        map((data: any) => {
          return data.albums.items;
        })
      );
    //con map capto la informacion que necesitos y no todos
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCRzvrtRTZxm2cvm9CXVY3EO6GKEcg_oKCLtF_yvnp_gi3O88p3Nps7ATkYTt9FO3PEk0gqDpjyDZrJ5t0',
    });
    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15&offset=5`,
        { headers }
      ) // filtro los datos
      .pipe(map((data: any) => data['artists'].items));
  }
}
