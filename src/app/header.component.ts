import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a
        routerLinkActive="active-link"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLink="/"
        >Accueil</a
      >
      <a
        routerLinkActive="active-link"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLink="/products"
        >Produits</a
      >
    </nav>
  `,
})
export class HeaderComponent {}
