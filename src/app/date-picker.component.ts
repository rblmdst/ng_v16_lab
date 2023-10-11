import { booleanAttribute, Component, Input } from '@angular/core';
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
      {{ defaultValue | date }}
    </div>
  `,
})
export class DatePickerComponent {
  @Input({ required: true, transform: toDate }) defaultValue!: string;
  @Input({ transform: booleanAttribute }) disabled = false;
}
