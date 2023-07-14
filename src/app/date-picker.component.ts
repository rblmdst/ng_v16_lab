import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// YYYY-MM-DD
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

function toDate(dateStr: string): Date {
  if (!dateStr.match(dateRegex)) {
    throw new Error("Invalid date format! Expected format 'YYYY-MM-DD'");
  }
  return new Date(dateStr);
}

@Component({
  selector: 'date-picker',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <div [class.active]="!disabled" class="date-picker">
      {{ theDate | date }}
    </div>
  `,
})
export class DatePickerComponent /* implements OnChanges */ {
  // Before : Option1 - setter
  @Input({ required: true }) set defaultValue(value: string) {
    this.theDate = toDate(value);
  }
  @Input() disabled = false;

  theDate!: Date;

  // Before : Option2- ngOnChanges
  /* ngOnChanges(changes: SimpleChanges): void {
    if ('defaultValue' in changes) {
      const value = changes['defaultValue'].currentValue;
      this.theDate = toDate(value);
    }
  } */
}
