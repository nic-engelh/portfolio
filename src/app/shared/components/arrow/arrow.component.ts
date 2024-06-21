import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent {
@Input() arrowDirection?: string;

  arrowImages = [
    'assets/img/animation/arrow-left/arrow-left-1.svg',
    'assets/img/animation/arrow-left/arrow-left-2.svg',
    'assets/img/animation/arrow-left/arrow-left-3.svg',
    'assets/img/animation/arrow-right/arrow-right-1.svg',
    'assets/img/animation/arrow-right/arrow-right-2.svg',
    'assets/img/animation/arrow-right/arrow-right-3.svg',
  ];


  isHovered: boolean = false;
  hoveredImage: string = this.arrowImages[0];
  direction: "left" | "right" = 'left';

  onHover(hovered: boolean) {
    this.isHovered = hovered;
    if (this.arrowDirection == "left") {
      this.hoveredImage = hovered ? this.arrowImages[1] : this.arrowImages[0];

    }
    if (this.arrowDirection == "right") {
      this.hoveredImage = hovered ? this.arrowImages[4] : this.arrowImages[3];
    }
  }



}
