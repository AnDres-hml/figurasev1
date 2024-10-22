import { Component, OnInit } from '@angular/core';
import { Triangulo } from 'src/app/Figuras/figuras';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { IonImg, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonImg, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, FormsModule] // FormsModule añadido
})
export class TrianguloComponent implements OnInit {

  lado1!: number;
  lado2!: number;
  lado3!: number;
  resultado!: number;

  constructor() {}

  ngOnInit() {}

  calcularPerimetro(): void {
    const triangulo = new Triangulo(this.lado1, this.lado2, this.lado3);
    this.resultado = triangulo.calcularPerimetro();
  }
}
