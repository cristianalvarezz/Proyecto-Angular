import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html'
})
export class TargetasComponent  {

  //resivo la informacion enviada desdel el home en este caso input
  @Input()
  items:any[]=[]

  constructor(  private router:Router) { }
  verArtista(item:any){
    let artistaId;
    //busco el artista dependiendo de donde esta si en el home o el search
    if(item.type==='artist'){
      artistaId=item.id;
      console.log(artistaId + " Capturado desde el search")
    } else{
      artistaId=item.artists[0].id;
      console.log(artistaId + " Capturado desde el home  ")
    }
  //me reedirecciona con el id a la pagina del artista 
    this.router.navigate([ '/artist', artistaId ]);
  }

}
