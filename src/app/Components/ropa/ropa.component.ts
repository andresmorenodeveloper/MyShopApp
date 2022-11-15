import { ProductosService } from './../../services/productos.service';
import { SelectedRopaService } from './../../services/selected-ropa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css'],
})
export class RopaComponent implements OnInit {
  ropa: any = {};
  product: any = {};
  loading!: boolean;

  constructor(
    private router: Router,
    private selectedRopa: SelectedRopaService,
    private productService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.ropa = this.productService.getRopaUnica(params['id']);
      this.loading = false;
    });
    this.loading = true;
    this.activatedRoute.params.subscribe((data) => {
      this.product = this.productService.getProductUnico(data['id']);
      this.loading = false;
    });
  }

  ngOnInit(): void {
    console.log(this.ropa);
    console.log(this.product);
  }

  volver() {
    this.router.navigate(['ViewProducts']);
  }


  agregarCarritoProduct() {
    this.selectedRopa.addProduct(this.product);
  }
}
