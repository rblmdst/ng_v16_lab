import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from './product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <div class="list">
      <div class="item" *ngFor="let product of products">
        <span>{{ product.name }}</span>
        <span class="action-btns">
          <a
            [queryParams]="{ quality: 'new' }"
            [routerLink]="['/products', product.id]"
            >Nouveau</a
          >
          <a
            [queryParams]="{ quality: 'old' }"
            [routerLink]="['/products', product.id]"
            >Occasion</a
          >
        </span>
      </div>
    </div>
  `,
})
export class ProductListComponent {
  products: Product[] = [
    { id: '2a9bef', name: 'Clavier RGB' },
    { id: '8c30cd', name: 'Écran 2K' },
  ];
}
