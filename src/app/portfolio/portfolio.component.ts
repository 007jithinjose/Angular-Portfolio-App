import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent,RouterLink], // Remove CardComponent import since we won't use it for now
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  // Empty projects array since you don't have content yet
  projects: any[] = [
    
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('JJ | Portfolio');
  }
}