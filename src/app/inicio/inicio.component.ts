import { Component } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(
    private route:Router
  ) {
  }

  enviarHome(){
    this.route.navigate(['Home-Platos']);
    swal("Que increible!", "Gracias por visitarnos!", "success");

  }

  enviarGoogle(){
    swal("Aun seguimos trabajando!", "Gracias por la visita!", "warning");
  }
}
