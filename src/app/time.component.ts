import { Component, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'cur-time',
  standalone: true,
  imports: [DatePipe],
  template: `{{ now | date : 'longTime' }}`,
})
export class TimeComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  now = new Date();

  constructor() {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.now = new Date();
        console.log('Time Stamp :', this.now.getTime());
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
