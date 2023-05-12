import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { routes as productRoutes } from './product/product.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'products',
    children: productRoutes,
  },
];
