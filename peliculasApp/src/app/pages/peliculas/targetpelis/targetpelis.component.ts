import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targetpelis',
  templateUrl: './targetpelis.component.html',
  styleUrls: ['./targetpelis.component.css']
})
export class TargetpelisComponent implements OnInit {

  constructor(private router:Router) { }

  @Input()
  peliculas:any[]=[];

  ngOnInit(): void {
  }
  verPelicula(item:any){
    console.log(item);
    let peliculaid;
    peliculaid =item.id;
    this.router.navigate(['dashboard/detallepelicula',peliculaid]);
    
    
  }
}
