import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    //  console.log(termino);
     //esto recible la palabra a buscar y el me dirige al componenete 
     this.router.navigate( ['/buscar',termino] );
  }

}