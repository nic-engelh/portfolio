import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectComponent } from './project/project.component';
import { ArrowComponent } from '../../shared/components/arrow/arrow.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, ArrowComponent],
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

  projects: {name: string, imagePath: string, isHovered: boolean}[] = [
    {name: "Pokedex", imagePath: "/assets/img/portfolio/portfolio-pokedex-hover.svg", isHovered: false},
    {name: "Join", imagePath: "/assets/img/portfolio/portfolio-join-hover.svg", isHovered: false},
    {name: "Sharky", imagePath: "/assets/img/portfolio/portfolio-sharky-hover.svg", isHovered: false},
  ]

  onHover(hoveredProject: number) {
   this.projects[hoveredProject].isHovered = true;
  }

  onLeave(hoveredProject: number) {
    this.projects[hoveredProject].isHovered = false;
  }

}
