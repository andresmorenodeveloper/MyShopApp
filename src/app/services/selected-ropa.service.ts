import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Ropa } from '../interfaces/ropa';

@Injectable({
  providedIn: 'root',
})
export class SelectedRopaService {
  private ropas: Ropa[] = [];
  private product: Product[] = [];

  constructor() {}

  getProduct() {
    return this.product;
  }


  guardarProduct() {
    localStorage.setItem('product', JSON.stringify(this.product));
  }


  addProduct(product: Product) {
    this.product.push(product);
    this.guardarProduct();
  }
}
