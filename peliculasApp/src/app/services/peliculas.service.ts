import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


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
  getQuery(query: string,page:number) {
    console.log(page);
    const url = `${this.urlMoviedb}/${query}/&api_key=${this.apikey}&lenguage=es&page=${page}`;
    return this.http.get(url);
  }

  buscarPelicula(texto: string) {
    //https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
  
    let url2=`https://api.themoviedb.org/3/movie/${texto}?api_key=${this.apikey}`
    return this.http.get(url2).pipe(map((res: any) => res));
  }


  buscarPeliculatexto(texto: string) {
    let url = `https://api.themoviedb.org/3/search/movie?query=${texto}&api_key=${this.apikey}&lenguage=es`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }


  elegirtipodebusqueda(seleccionado: number,numero:number=1) {
    // console.log("El numero seleccionado es "+seleccionado);
    if(seleccionado==0){
      return this.getQuery('?primary_release_date.gte=2020-09-15&primary_release_date.lte=2021-10-22',numero).pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==1){
      return this.getQuery('?sort_by=popularity.desc',numero).pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==2){
      return this.getQuery('?certification_country=US&certification=R&sort_by=vote_average.desc',numero).pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==3){
      return this.getQuery('?certification_country=US&certification.lte=G&sort_by=popularity.desc',numero).pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==4){
      return this.getQuery('?primary_release_year=2010&sort_by=vote_average.desc',numero).pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==5){
      return this.getQuery('?with_genres=18&primary_release_year=2014',numero).pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==6){
      return this.getQuery('?with_genres=878&with_cast=500&sort_by=vote_average.desc',numero).pipe(
        map((res: any) => res.results));
    }
    if(seleccionado==7){
      return this.getQuery('?with_genres=35&with_cast=23659&sort_by=revenue.desc',numero).pipe(
        map((res: any) => res.results));
    }
    return;

  }
}
