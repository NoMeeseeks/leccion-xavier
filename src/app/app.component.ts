import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import swal from 'sweetalert';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MenuOpcionesComponent} from './menu-opciones/menu-opciones.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuOpcionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leccion-xavier';

  constructor() {
    // swal("Good job!", "You clicked the button!", "success");
    // swal("Good job!", "You clicked the button!", "error");
    // swal("Good job!", "You clicked the button!", "warning");
    // swal("Good job!", "You clicked the button!", "info");

  }
}
