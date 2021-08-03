import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {


  public lineChartData: any[] = [
    { data: [0, 0, 0, 0], label: 'Ventas' },
  
  ];
  public lineChartLabels: any[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];
  constructor() { }

  ngOnInit(): void {
    
   
    //instruccion que se repetira cada tres segundos
    setInterval(()=>{
      const newData=[
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100)
      ];
      this.lineChartData=[
        {data:newData, label:'ventas'}
      ];
    },3000)

   
     
  }

}
