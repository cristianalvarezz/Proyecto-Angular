import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  constructor() { }
  personas=Array(500).fill(0);
  ngOnInit(): void {
    console.log('0');
    
  }

}
