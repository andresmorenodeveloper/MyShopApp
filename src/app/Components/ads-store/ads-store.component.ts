import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-store',
  templateUrl: './ads-store.component.html',
  styleUrls: ['./ads-store.component.css'],
})
export class AdsStoreComponent implements OnInit {
  Image1: string = '';
  Image2: string = '';

  constructor() {
    this.Image1 = 'assets/img/hombre.jpg';
    this.Image2 = 'assets/img/Personas.jpg';
    
  }

  ngOnInit(): void {}
}
