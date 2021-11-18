import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//array de productos
  private products: Product[] = [];

  private cart = new BehaviorSubject<Product[]>([]);
  //para que cualquiera se subscriba a el en tiempo real
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    //hacer carrito de compras
    this.products = [...this.products, product];
    this.cart.next(this.products);
   
  }
}

