import { Component, Input } from '@angular/core';
@Component({
  selector: 'list',
  template: `
    <item *ngFor="let item of items" [name]="item"></item>
  `
})
export class ListComponent {
  @Input() items: Array<string> = []
}
