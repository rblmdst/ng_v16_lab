import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<date-picker disabled defaultValue="2024-07-12" />',
  imports: [DatePickerComponent],
})
export class AppComponent {}

/* 
<date-picker [disabled]="true" defaultValue="2024-07-12" />

<date-picker defaultValue="2024-07-12" disabled />

*/
