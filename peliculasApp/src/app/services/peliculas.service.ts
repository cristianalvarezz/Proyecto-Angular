import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonpClientBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apikey: string = 'ed10152b5620743348761b0985899a52';
  private urlMoviedb: string = 'https://api.themoviedb.org/3/discover/movie';

  constructor(private http: HttpClient) {}

  getPopulares() {
    let url = `${this.urlMoviedb}?sort_by=popularity.desc&api_key=${this.apikey}&lenguage=es`;

    return this.http.get(url).pipe(map((res: any) => res));
  }
  getQuery(query: string) {
    const url = `${this.urlMoviedb}/${query}/&api_key=${this.apikey}&lenguage=es`;
    return this.http.get(url);
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&lenguage=es`;

    return this.http.get(url).pipe(map((res: any) => res));
  }

  elegirtipodebusqueda(seleccionado: number) {
    // console.log("El numero seleccionado es "+seleccionado);
    if(seleccionado==0){
      return this.getQuery('?sort_by=popularity.asc').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==1){
      return this.getQuery('?sort_by=popularity.desc').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==2){
      return this.getQuery('?certification_country=US&certification=R&sort_by=vote_average.desc').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==3){
      return this.getQuery('?certification_country=US&certification.lte=G&sort_by=popularity.desc').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==4){
      return this.getQuery('?primary_release_year=2020&sort_by=vote_average.desc').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==5){
      return this.getQuery('?with_genres=18&primary_release_year=2014').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==6){
      return this.getQuery('?with_genres=878&with_cast=500&sort_by=vote_average.desc').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==7){
      return this.getQuery('?with_genres=35&with_cast=23659&sort_by=revenue.desc').pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==8){
      return this.getQuery('?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10').pipe(
        map((res: any) => res.results));
    }
    return;
   
  }
}
