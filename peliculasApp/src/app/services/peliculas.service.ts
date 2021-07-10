import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
import {JsonpClientBackend } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string ="ed10152b5620743348761b0985899a52";
  private urlMoviedb:string="https://api.themoviedb.org/3";

  constructor(private http:HttpClient) { }

  getPopulares(){
    let url =`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&lenguage=es`;

    return this.http.get(url)
          .pipe(map((res:any)=>res))
  }
  buscarPelicula(texto:string){
    let url =`${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&lenguage=es`
   
  
    return this.http.get(url)
         .pipe(map((res:any)=>res))
  }


}
