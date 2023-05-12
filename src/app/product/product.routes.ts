import { Routes } from '@angular/router';
import { ProductItemComponent } from './product-item.component';
import { ProductListComponent } from './product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductItemComponent },
];
