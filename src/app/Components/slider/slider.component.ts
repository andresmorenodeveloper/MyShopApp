import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  Image2: string = '';
  constructor() {
    this.Image2 = 'assets/img/Personas.jpg';
  }

  ngOnInit(): void {}
}
