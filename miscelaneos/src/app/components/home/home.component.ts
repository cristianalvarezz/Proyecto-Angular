import { Component, OnInit, OnChanges,DoCheck,AfterContentInit,
  AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <hr />
    <app-ng-style></app-ng-style>
    <hr />
    <app-css></app-css>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
      veritatis nulla omnis excepturi! Molestias nihil consequatur aliquam sit
      eius odit ducimus, omnis natus nesciunt sunt nostrum quas. Dignissimos,
      deserunt dolorum!
    </p>
    <hr />
    <app-clases></app-clases>

    <hr />
    <p [appResaltado]="'red'">Directivas</p>
    <hr />
    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterViewInit,AfterViewChecked,OnDestroy {
  constructor() {
    console.log("constructor")
  }

  ngOnInit(){
    console.log("ngOnInit")
  }
  ngOnChanges(){
    console.log("ngOnChanges")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
}
