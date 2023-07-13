import { Component, computed, effect, signal } from '@angular/core';
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

  products = signal<Product[]>(this.defaultValue);

  selectedProductType = signal<ProductType | 'all'>('all');

  filteredList = computed(() => {
    const products = this.products();
    const selectedProductType = this.selectedProductType();

    if (selectedProductType === 'all') {
      return products;
    } else {
      return products.filter((product) => product.type === selectedProductType);
    }
  });

  constructor() {
    effect(() => {
      console.log(this.products());
    });
  }
  removeAllProducts() {
    this.products.set([]);
  }

  resetProductList() {
    this.products.set(this.defaultValue);
  }

  // people that are fan of using immutability :)
  addProduct() {
    const newProduct: Product = {
      id: 28,
      name: 'Coca Cola 50 Cl',
      type: 'drink',
    };
    this.products.update((currProducts) => [...currProducts, newProduct]);
  }

  // people that are fan of using array.prototype.push()
  addProductByMutation() {
    const newProduct: Product = { id: 75, name: 'Sprite 50 Cl', type: 'drink' };
    this.products.mutate((currProducts) => currProducts.push(newProduct));
  }

  onDelete(productId: number) {
    this.products.update((products) =>
      products.filter((product) => product.id !== productId)
    );
  }

  onFilterValueChange(productType: string) {
    console.log(productType);
    this.selectedProductType.set(productType as ProductType);
    // TODO: update the filter (selectedProductType)
  }
}
