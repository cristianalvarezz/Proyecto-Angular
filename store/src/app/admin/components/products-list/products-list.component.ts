import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(    private productsService: ProductsService) { }
  products:any = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    });
  }
}
