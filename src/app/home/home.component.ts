import { Component } from '@angular/core';
import {CarruselComponent} from '../carrusel/carrusel.component';

@Component({
  selector: 'app-home',
  imports: [
    CarruselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
