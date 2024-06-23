import { Component } from '@angular/core';
import { ArrowComponent } from '../../shared/components/arrow/arrow.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  arrowImages = [
    'assets/img/animation/arrow-left/arrow-left-1.svg',
    'assets/img/animation/arrow-left/arrow-left-2.svg',
    'assets/img/animation/arrow-left/arrow-left-3.svg',
  ];
  isHovered: boolean = false;
  hoveredImage: string = this.arrowImages[0];

  onHover(hovered: boolean) {
    this.isHovered = hovered;
    this.hoveredImage = hovered ? this.arrowImages[1] : this.arrowImages[0];
  }
}
