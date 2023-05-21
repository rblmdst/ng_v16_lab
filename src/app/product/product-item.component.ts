import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div><strong>ID : </strong>{{ id }}</div>
    <div><strong>Qualité : </strong>{{ quality }}</div>
    <div><strong>Test : </strong>{{ test }}</div>
  `,
})
class ProductItemComponent implements OnInit {
  @Input() id: string | null = null;
  @Input() quality: string | null = null;
  @Input() test: string | null = null;

  ngOnInit() {}
}

export default ProductItemComponent;
