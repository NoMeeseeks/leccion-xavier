import { Component } from '@angular/core';
import {CarruselComponent} from '../carrusel/carrusel.component';
import {CardComponent} from '../card/card.component';
import {MenuOpcionesComponent} from '../menu-opciones/menu-opciones.component';

@Component({
  selector: 'app-home',
  imports: [
    CarruselComponent,
    CardComponent,
    MenuOpcionesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
