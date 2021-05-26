import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HeroeService} from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any={};

  constructor(private activatedRoute:ActivatedRoute, 
              private _heroesService:HeroeService
    ) { 

    this.activatedRoute.params.subscribe( params=>{
      // console.log(params['id'])
      this.heroe=this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    } )
  }

  ngOnInit(): void {
  }

}
