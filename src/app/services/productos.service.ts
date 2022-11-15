import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { Ropa } from '../interfaces/ropa';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private ropa: Ropa[] = [
    {
      nombre: 'Remera Negra',
      talle: 'M, L Y XL',
      genero: 'Masculino',
      valor: 1000,
      img: 'assets/img/sueterNegro.jpg',
      id: 1,
    },
    {
      nombre: 'Remera Roja',
      talle: 'M, L Y XL',
      genero: 'Masculino',
      valor: 1000,
      img: 'assets/img/sueterRojo.png',
      id: 2,
    },
    {
      nombre: 'Zapatos Hombre',
      talle: 'M, L Y XL',
      genero: 'Masculino',
      valor: 1200,
      img: 'assets/img/zapatos.jpg',
      id: 3,
    },
    {
      nombre: 'Zapato Mujer',
      talle: 'M, L Y XL',
      genero: 'Femenino',
      valor: 1500,
      img: 'assets/img/zapatos2.jpg',
      id: 4,
    },
  ];

  private product: Product[] = [];

  private API_SERVER =
    'http://ec2-44-212-9-7.compute-1.amazonaws.com:10021/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  public getAllProducts(): Observable<Product> {
    return this.httpClient.get<Product>(this.API_SERVER);
  }

  public getAllProducts2(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  getRopa() {
    return this.ropa;
  }

  getProduct() {
    return this.product;
  }

  getRopaUnica(idx: any) {
    return this.ropa[idx];
  }

  getProductUnico(idx: any) {
    return this.product[idx];
  }

  getRopaBuscada(termino: string) {
    let ropaArr: Ropa[] = [];
    termino = termino.toLowerCase();

    for (let prenda of this.ropa) {
      let nombre = prenda.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        ropaArr.push(prenda);
      }
    }
    return ropaArr;
  }

  getProductBuscada(termino: string) {
    let ropaArr: Product[] = [];
    termino = termino.toLowerCase();

    for (let prenda of this.product) {
      let nombre = prenda.name.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        ropaArr.push(prenda);
      }
    }
    return ropaArr;
  }

  agregarCarrito(product: Product): any {
    localStorage.setItem('products', JSON.stringify(product));
  }

}
