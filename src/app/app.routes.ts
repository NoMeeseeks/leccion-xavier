import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InicioComponent} from './inicio/inicio.component';

export const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent,
  },
  {
    path:'Home-Platos',
    component: HomeComponent
  }
];
