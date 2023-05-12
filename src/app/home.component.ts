import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div><span class="red">Dev </span> <span class="blue">Propulsor</span></div>
  `,
})
export class HomeComponent {}
