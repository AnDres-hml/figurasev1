import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CirculoComponent } from '../comp/circulo/circulo.component';
import { TrianguloComponent } from '../comp/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  constructor() {}
}
