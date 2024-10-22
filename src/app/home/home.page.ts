import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule si usas formularios
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { CirculoComponent } from '../comp/circulo/circulo.component';
import { TrianguloComponent } from '../comp/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonSelectOption, IonSelect, CirculoComponent, TrianguloComponent, FormsModule] // Añadir FormsModule
})
export class HomePage {
  figuraSeleccionada: string = ''; // Para el selector de figuras

  constructor() {}
}
