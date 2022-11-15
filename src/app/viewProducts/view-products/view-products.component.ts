import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ropa } from 'src/app/interfaces/ropa';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  ropa: Ropa[] = [];
  products: Product[] = [];
  loading!: boolean;

  constructor(
    private router: Router,
    private productService: ProductosService
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.ropa = this.productService.getRopa();
    this.products = this.productService.getProduct();
    this.allProduct();
    
  }

  allProduct() {
    this.productService.getAllProducts2().subscribe((data) => {
      console.log(this.products);

      return (this.products = data);
    });
  }

  allProduct2() {
    this.productService.getAllProducts().subscribe((data) => {
      return console.log(data);
    });
  }

  verRopa(idx: number) {
    this.router.navigate(['/ropa', idx]);
  }

  agregarCarrit(product: Product) {
    this.productService.agregarCarrito(product);
  }
}
