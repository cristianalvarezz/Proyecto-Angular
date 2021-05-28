
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
      'Authorization' : 'Bearer BQBascl8ZZ_IWiO6mFemEdWtOBHGW45_ATsaTZz35004TthrA739ihfuZpcwWw5382ee_5N_OlhhCjU_k4w'
    });

    //hago la peticion a la api de spoti 
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})
        .subscribe(data=>{
          console.log(data);
        })
  }
}
