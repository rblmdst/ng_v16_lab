import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  template: `
    <div class="item">
      Name : {{ name | nbchar }}
    </div>
  `
})
export class ItemComponent {
  @Input() name: null | string = null
}
