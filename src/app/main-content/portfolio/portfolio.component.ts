import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations:[
    trigger('slideAnimation', [
      state('hidden', style({
        transform: 'translateX(-25%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
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
    {name: "Pokedex", imagePath: "/assets/img/portfolio/portfolio-pokedex-hover.svg"},
    {name: "Join", imagePath: "/assets/img/portfolio/portfolio-join-hover.svg"},
    {name: "Sharky", imagePath: "/assets/img/portfolio/portfolio-sharky-hover.svg"},
  ]

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

}
