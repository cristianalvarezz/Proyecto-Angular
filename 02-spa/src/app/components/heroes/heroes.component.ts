import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeService, Heroe} from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor( private _heroesService:HeroeService,private router:Router) {
    console.log("contructor")
   }

  ngOnInit(){
    this.heroes=this._heroesService.getHeroes();
    console.log(this.heroes);  
  }

  verHeroe(index:number){
    // console.log(this.index)
    this.router.navigate(['/heroe',index])
  }
}
