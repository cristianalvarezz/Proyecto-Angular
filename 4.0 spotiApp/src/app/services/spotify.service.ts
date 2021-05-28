
//importo paquete para el token que necesita el spotify para funcionar
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  //con este decorador no necesito importar en el modulo
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http:HttpClient) {
    console.log('listo');
  }

  getNewReleases() {

    //headers necesarios para que me funcione el get de spotify
    const headers=new HttpHeaders({
      'Authorization' : 'Bearer BQBpksn56kdvebsNB-uRg3o_cPEKGqTNf_6hSDGG1QF7TyaGqbqrHy3cmkRF4JjEypZGNhTv5WYPzBZIIfw'
    });

    //hago la peticion a la api de spoti 
    //si tengo error de token debo generar uno nuevo 
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }
}
