import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
    console.log('listo')
   }

    // Obtiene pokemon
    getPokemons(index:any){
      return this.http.get(`${this.baseUrl}/pokemon/${index}`);
    }
  
}
