import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CodeLabel, Product, ProductType } from '../product.model';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductItemComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  productTypes: CodeLabel[] = [
    { code: 'all', label: 'All' },
    { code: 'food', label: 'Food' },
    { code: 'drink', label: 'Drink' },
  ];

  defaultValue: Product[] = [
    { id: 3, name: 'Atsiéké Poisson Fumé (APF)', type: 'food' },
    { id: 12, name: 'Aloko Poulet Braisé', type: 'food' },
    { id: 7, name: 'Orangina 50 Cl', type: 'drink' },
  ];

  products = this.defaultValue;

  selectedProductType: ProductType | 'all' = 'all';

  // TODO: Create a filtered list based on products and selectedProductType
  filteredList = [];

  constructor() {
    // TOD0: Log product list changes (effect)
  }
  removeAllProducts() {
    // TODO: remove all products from the list
  }

  resetProductList() {
    // TODO: set product list to default
  }

  // people that are fan of using immutability :)
  addProduct() {
    const newProduct = { id: 28, name: 'Coca Cola 50 Cl', type: 'drink' };
    // TODO: Update the list by adding newProduct (use the existing list)
  }

  // people that are fan of using array.prototype.push()
  addProductByMutation() {
    const newProduct = { id: 75, name: 'Sprite 50 Cl', type: 'drink' };
    // TODO: Update the list by adding newProduct (mutate the existing list)
  }

  onDelete(productId: number) {
    // TODO: Update the list of produts
  }

  onFilterValueChange(productType: string) {
    // TODO: update the filter (selectedProductType)
  }
}
