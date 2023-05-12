import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div><strong>ID : </strong>{{ id }}</div>
    <div><strong>Qualité : </strong>{{ quality }}</div>
  `,
})
export class ProductItemComponent implements OnInit {
  private route = inject(ActivatedRoute);

  private id$ = this.route.params.pipe(map((params) => params['id']));
  private quality$ = this.route.queryParamMap.pipe(
    map((queryParams) => queryParams.get('quality'))
  );

  id: string | null = null;
  quality: string | null = null;

  ngOnInit() {
    // /!\ Remember to unsubscribe: this is just for demo
    this.id$.subscribe((id) => {
      this.id = id;
    });

    this.quality$.subscribe((quality) => {
      this.quality = quality;
    });
  }
}
