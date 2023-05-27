import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TimeComponent } from './time.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, TimeComponent],
  template: `
    <button (click)="toggleState()">{{ display ? 'destroy' : 'show' }}</button>
    <div *ngIf="display" class="item">
      <cur-time />
    </div>
  `,
})
export class AppComponent {
  display = false;

  toggleState() {
    this.display = !this.display;
  }
}
