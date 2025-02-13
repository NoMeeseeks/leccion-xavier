import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlatosComponent} from './platos/platos.component';

export const routes: Routes = [
  {
    path:'Home-Platos',
    component: HomeComponent
  },
  {
    path:'Platos/:id',
    component: PlatosComponent
  },
  {
    path:'**',
    redirectTo:'Home-Platos',
  }
];
