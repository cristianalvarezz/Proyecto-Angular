import { Component, OnInit,Input } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-carrito-producto',
  templateUrl: './carrito-producto.component.html',
  styleUrls: ['./carrito-producto.component.css']
})
export class CarritoProductoComponent implements OnInit {

 
  constructor( public productoService:ProductoService) { }

  ngOnInit(): void {
    console.log(this.productoService.productosElegidos())
  }

}
