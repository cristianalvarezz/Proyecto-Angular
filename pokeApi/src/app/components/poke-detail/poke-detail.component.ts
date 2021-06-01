import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {
  pokemon:any={};
  constructor(
    private activatedRouter: ActivatedRoute,
    private pokemonService: ServicesService
  ) {
    this.activatedRouter.params.subscribe((params) => {
      this.getPokemon(params['id']);
    });
  }
  getPokemon(id:any) {
    let pokemonData;
    this.pokemonService.getPokemons(id).subscribe(
      (res:any) => {
        console.log(res);
       this.pokemon= pokemonData = {
          p:res,
          pokemonImg : res.sprites.front_default,
          pokemonType: res.name
        };
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {}
}
