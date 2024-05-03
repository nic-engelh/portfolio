import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('imageAnimation', [
      state('initial', style({
        backgroundImage: 'url("../../../assets/img/animation/menu/menu-1.svg")'
      })),
      state('middle', style({
        backgroundImage: 'url("../../../assets/img/animation/menu/menu-2.svg")'
      })),
      state('final', style({
        backgroundImage: 'url("../../../assets/img/animation/menu/menu-5.svg")'
      })),
      transition('* => *', animate('5s'))
    ])
  ]

})
export class NavbarComponent {

  animationState: string = 'initial';

  toggleAnimation() {
    if (this.animationState === 'initial') {
      this.animationState = 'middle';
    } else if (this.animationState === 'middle') {
      this.animationState = 'final';
    } else {
      this.animationState = 'initial';
    }
  }

}
