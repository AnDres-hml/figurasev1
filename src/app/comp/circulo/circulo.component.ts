import { Component, OnInit } from '@angular/core';
import { Circulo } from 'src/app/Figuras/figuras';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { IonImg, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonImg, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, FormsModule] // FormsModule añadido
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