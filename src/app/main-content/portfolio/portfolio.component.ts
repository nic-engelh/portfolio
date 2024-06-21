import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations:[
    trigger('slideAnimation', [
      state('hidden', style({
        transform: 'translateX(-100%)'
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      transition('hidden <=> visible', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class PortfolioComponent {
  isHovered = false;

  projects: {name: string, imagePath: string}[] = [
    {name: "Pokedex", imagePath: "/assets/img/"},
    {name: "Join", imagePath: "/assets/img/"},
    {name: "Sharky", imagePath: "/assets/img/"},
  ]

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

  getProjectNumber () {
    return this.projects.length;
  }



}
