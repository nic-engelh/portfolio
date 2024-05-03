import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('imageAnimation', [
      state('animate', style({
        transform: 'scale(1.0)',
        opacity: 1
      })),
      state('stop', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('animate => stop', [
        animate('0.5s')
      ]),
      transition('stop => animate', [
        animate('0s')
      ]),
    ]),
  ]
})
export class NavbarComponent {

  menuImages = [
    { path: '../../../assets/img/animation/menu/menu-1.svg', display: 'block' },
    { path: '../../../assets/img/animation/menu/menu-2.svg', display: 'none' },
    { path: '../../../assets/img/animation/menu/menu-3.svg', display: 'none' },
    { path: '../../../assets/img/animation/menu/menu-4.svg', display: 'none' },
    { path: '../../../assets/img/animation/menu/menu-5.svg', display: 'none' },
    { path: '../../../assets/img/animation/menu/menu-6.svg', display: 'none' },
    { path: '../../../assets/img/animation/menu/menu-7.svg', display: 'none' }
  ];

  animationState: 'animate' | 'stop' = 'animate';
  currentIndex = 0;
  clicked = false;

  toggleAnimation() {
    if (!this.clicked) {
      this.clicked = true;
      this.startAutomaticChange();
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.menuImages.length;
    }

    if (this.currentIndex === 7) {
      this.currentIndex = 0;
      this.animationState = 'stop';
      this.clicked = false;
      return;
    }

    if (this.currentIndex === 5) {
      this.animationState = 'stop';
      this.clicked = false;
      return;
    }

    if (this.animationState === 'animate') {
      this.menuImages[this.currentIndex - 1 < 0 ? this.menuImages.length - 1 : this.currentIndex - 1].display = 'none';
      this.menuImages[this.currentIndex].display = 'block';
    } else {
      this.animationState = 'animate';
    }
  }

  startAutomaticChange() {
    setTimeout(() => {
      if (this.animationState === 'animate') {
        this.toggleAnimation();
        this.startAutomaticChange();
      }
    }, 100);
  }

}
