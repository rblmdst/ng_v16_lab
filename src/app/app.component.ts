import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  template: ` <item [name]="name" /> `,
})
export class AppComponent {
  name = 'My name';
}
