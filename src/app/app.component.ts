import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<date-picker [disabled]="true" defaultValue="2023-07-12" />',
  imports: [DatePickerComponent],
})
export class AppComponent {}
