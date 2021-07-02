import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent  {

    progreso1: any = 100;
    progreso2: number = 35;

    get getProgreso1() {
      return `${ this.progreso1 }%`;
    }

    get getProgreso2() {
      return `${ this.progreso2 }%`;
    }

    cambiarValor(valor:number){

      if(this.progreso1>=100 && valor>=0){
        return  this.progreso1=100;
      }
      if(this.progreso1<=0 && valor<0){
        return  this.progreso1=0;
      }
    return this.progreso1 = this.progreso1+valor;
    }

}