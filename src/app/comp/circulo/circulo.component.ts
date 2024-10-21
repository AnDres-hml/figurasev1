import { Component, OnInit } from '@angular/core';
import { Circulo } from 'src/app/Figuras/figuras';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
})
export class CirculoComponent implements OnInit {

  radio!: number;  
  resultado: number | null = null;

  constructor() {}

  ngOnInit() {}

  calcularPerimetro(): void {
    const circulo = new Circulo(this.radio);
    this.resultado = circulo.calcularPerimetro();
  }
}
