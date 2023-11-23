import { Component, computed, effect, inject, signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CodeLabel, Product, ProductType } from '../product.model';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [ProductItemComponent],
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

  products = signal(this.defaultValue);

  selectedProductType = signal<ProductType | 'all'>('all');

  // TODO: Create a filtered list based on products and selectedProductType
  filteredList = computed(() => {
    const products = this.products();
    const selectedType = this.selectedProductType();
    return selectedType !== 'all'
      ? products.filter((product) => product.type === selectedType)
      : products;
  });

  constructor() {
    // TOD0: Log product list changes (effect)
    effect(() => {
      console.log('Chganged', this.filteredList());
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
    this.products.update((oldList) => [...oldList, newProduct]);
  }

  onDelete(productId: number) {
    // TODO: Update the list of produts
    this.products.update((oldList) =>
      oldList.filter((product) => product.id !== productId)
    );
  }

  onFilterValueChange(productType: string) {
    // TODO: update the filter (selectedProductType)
    this.selectedProductType.set(productType as ProductType | 'all');
  }
}
