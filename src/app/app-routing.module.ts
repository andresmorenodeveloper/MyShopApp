import { CarritoCompraComponent } from './Components/carrito-compra/carrito-compra.component';
import { RopaComponent } from './Components/ropa/ropa.component';
import { ViewProductsComponent } from './viewProducts/view-products/view-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAQComponent } from './Components/faq/faq.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'FAQ', component: FAQComponent },
  {path: 'ViewProducts', component: ViewProductsComponent},
  { path: 'ropa/:id', component: RopaComponent },
  { path: 'CarritoCompras', component: CarritoCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
