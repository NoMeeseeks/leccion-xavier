import { Component } from '@angular/core';
import {RecursosService} from '../servicios/recursos.service';
import {HttpClient} from '@angular/common/http';
import {Receta} from '../interfaz/receta';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  recetas:Receta[]=[]

  constructor(
    private service:RecursosService,
  ) {
    this.service.obtenerReceta().subscribe(res=>{
      // @ts-ignore
      this.recetas = res['meals'] as Receta[];
      console.log(this.recetas);
    })
  }
}
