import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'http://localhost:8080/main';

  constructor(private http: HttpClient) {}

  crearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}`, heroe);
  }

  actualizarHeroe(heroe: HeroeModel) {
    const heroeTemp = {
      ...heroe,
    };
    return this.http.put(`${this.url}/${heroe.id}`, heroeTemp);
  }

  borrarHeroe(id:string){
    console.log(id);
    return this.http.delete(`${this.url}/${id}`);
  }

  getHeroes(){
    return this.http.get(`${this.url}`)
            .pipe(
              map(this.crearArreglo),
              delay(2)
            );
  }

  getHeroe(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  private crearArreglo( heroesObj: any ) {

    const heroes: HeroeModel[] = [];

    Object.keys( heroesObj ).forEach( key => {

      const heroe: HeroeModel = heroesObj[key];
      console.log(heroe.id);
     // heroe.id = key;

      heroes.push( heroe );
    });


    return heroes;

  }
}
