import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{'font-size':tamano+'px'}">
      esto es un testo a configurar
    </p> -->
    <p [style.fontSize.px]="tamano">
    esto es un texto a configurar
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

   tamano:number=20;
  constructor() { }

  ngOnInit(): void {
  }

}
