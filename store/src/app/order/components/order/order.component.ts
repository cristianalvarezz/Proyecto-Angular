import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // Cambié la lista de productos por una lista de Items de carrito.
  items$: Observable<Map<Product, number>>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.cart$
    .pipe(map(products => {
      console.log(this.items$);

      const listItems = new Map();
      
      products.forEach(product => {
        // El conteo de elementos inicia en 1 porque si un producto está en la
        // lista, es porque al menos una vez fue agregado al carrito.
        let count = 1;
        if (listItems.has(product)) {
          count = listItems.get(product) + 1;
        }

        // Inserta una nueva entrada en el map o actualiza la entrada existente
        // con el nuevo conteo
        listItems.set(product, count);
      });

      return listItems;
    }));
  }

  ngOnInit(): void {
  }

}

