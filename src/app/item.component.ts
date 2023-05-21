import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="item">Name : {{ name }}</div> `,
})
export class ItemComponent {
  @Input() name!: string;
}
