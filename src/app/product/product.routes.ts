import { InjectionToken } from '@angular/core';
import { Routes } from '@angular/router';
// import { ProductItemComponent } from './product-item.component';
import { ProductListComponent } from './product-list.component';

export const DUMMY_DATA = new InjectionToken('DUMMY_DATA');

const routes: Routes = [
  { path: '', component: ProductListComponent },
  // { path: ':id', component: ProductItemComponent },
  {
    path: ':id',
    resolve: {
      test: () => 'TOTO',
    },
    providers: [{ provide: DUMMY_DATA, useValue: 'TESTTETET' }],
    loadComponent: () => import('./product-item.component'),
  },
];

export default routes;
