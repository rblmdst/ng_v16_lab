import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'cur-time',
  standalone: true,
  imports: [DatePipe],
  template: `{{ now | date : 'longTime' }}`,
})
export class TimeComponent implements OnInit {
  now = new Date();
  destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.now = new Date();
        console.log('Time Stamp :', this.now.getTime());
      });
  }
}
