import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html'
})
export class TargetasComponent  {

  //resivo la informacion enviada desdel el home en este caso input
  @Input()
  items:any[]=[]

  constructor() { }


}
