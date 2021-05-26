import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService} from '../../services/heroes.service'
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [],
})
export class BuscadorComponent implements OnInit {

heroes:any =  []=[]
termino:string | undefined;

  constructor(private activatedRoute: ActivatedRoute,private _heroesService:HeroeService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params['termino']);
     this.termino=(params['termino']);
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
    console.log(this.heroes)
    });
  }
}
