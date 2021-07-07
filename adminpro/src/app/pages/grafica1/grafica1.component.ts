import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public labels2: string[] = ['Tampico', 'Bebida caliente', 'Tamal'];
  public data1 = [[10, 15, 40]];
  public data2 = [[10, 30, 50]];
}
