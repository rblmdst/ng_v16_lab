import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input({ required: true }) product: Product | null = null;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.product?.id);
  }
}
