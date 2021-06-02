import { Component, OnInit } from '@angular/core';

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
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
