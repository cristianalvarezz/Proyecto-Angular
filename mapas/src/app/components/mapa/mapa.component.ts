import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    let loader =new Loader({
      apiKey:'AIzaSyB6XO5d31IkJB2-QPDfDMcw0FVJjznqyB0'
    })
    loader.load().then(()=>{
     new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644  },
        zoom: 8
      });
    })
  }

}
