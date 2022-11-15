import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SliderComponent } from './Components/slider/slider.component';
import { FAQComponent } from './Components/faq/faq.component';
import { AdsStoreComponent } from './Components/ads-store/ads-store.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductsComponent } from './viewProducts/view-products/view-products.component';
import { RopaComponent } from './Components/ropa/ropa.component';
import { CarritoCompraComponent } from './Components/carrito-compra/carrito-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FAQComponent,
    HeaderComponent,
    SliderComponent,
    AdsStoreComponent,
    FooterComponent,
    HomeComponent,
    ViewProductsComponent,
    RopaComponent,
    CarritoCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
