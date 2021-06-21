import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport} from '@angular/cdk/scrolling'
@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  // de esta manera tengo refencia a todo los metodos 
  @ViewChild(CdkVirtualScrollViewport) vieport!:CdkVirtualScrollViewport

  constructor() { }
  personas=Array(500).fill(0);
  ngOnInit(): void {
    console.log('0');
  }
  irFinal(){
    //tomo referencia del html
    this.vieport.scrollToIndex(this.personas.length);
  }
  irInicio(){
    this.vieport.scrollToIndex(0);
  }
  centro(){
      //tomo referencia del html
      this.vieport.scrollToIndex(this.personas.length/2);
  }
}
