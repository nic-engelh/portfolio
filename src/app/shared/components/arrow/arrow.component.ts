import { Component, Input, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss',
  animations: [
    trigger('changeSvg', [
      transition('* => *', [
        animate('170ms ease-out')
      ])
    ])
  ]

})
export class ArrowComponent {
@Input() arrowDirection?: string;

  arrowSvgs = [
    'assets/img/animation/arrow-left/arrow-left-1.svg',
    'assets/img/animation/arrow-left/arrow-left-2.svg',
    'assets/img/animation/arrow-left/arrow-left-3.svg',
  ];
  /*

  'assets/img/animation/arrow-right/arrow-right-1.svg',
    'assets/img/animation/arrow-right/arrow-right-2.svg',
    'assets/img/animation/arrow-right/arrow-right-3.svg',

  */

  currentSvg = this.arrowSvgs[0];
  private animationInProgress = false;

  startAnimation() {
    if (!this.animationInProgress) {
      this.animationInProgress = true;
      this.animateSvgs();
    }
  }

  private animateSvgs(index = 0) {
    if (index < this.arrowSvgs.length) {
      setTimeout(() => {
        this.currentSvg = this.arrowSvgs[index];
        this.animateSvgs(index + 1);
      }, 250);
    } else {
      this.animationInProgress = false;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.currentSvg = this.arrowSvgs[0];
    this.animationInProgress = false;
  }
}
