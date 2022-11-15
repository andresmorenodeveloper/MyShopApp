import { Product } from 'src/app/interfaces/product';
import { SelectedRopaService } from './../../services/selected-ropa.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';
import { ProductosService } from 'src/app/services/productos.service';
import { Subscriber, Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css'],
})
export class CarritoCompraComponent implements OnInit {
  loading: boolean = true;
  ropas: Ropa[] = [];
  mostrarBtn: boolean = true;
  ropa: any = {};
  product: any = {};
  products: Product[] =[];
  x:any;

  constructor(
    private router: Router,
    private selectRopa: SelectedRopaService,
    private productService: ProductosService
  ) {}

  ngOnInit(): void {
  
    this.products = this.selectRopa.getProduct();
    if (this.ropas.length > 0) {
      this.mostrarBtn = true;
    };
    this.getItem();
  }

  getItem(){
    this.product = localStorage.getItem('products');
    let t = JSON.parse(this.product);
    console.log(t);
    this.products = t;
    
    return t;
    
  }

  borrarDeLista(i: number) {
    this.product.splice(i, 1);
  }


}
