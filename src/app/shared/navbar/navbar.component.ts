import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [

    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      state('out', style({
        transform: 'translateY(100%)',
        opacity: 0,
      })),
      transition('out => in', animate('150ms ease-in')),
      transition('in => out', animate('150ms ease-out'))
    ])

  ],
})
export class NavbarComponent {
  menuImages = [
    '../../../assets/img/animation/menu/menu-1.svg',
    '../../../assets/img/animation/menu/menu-2.svg',
    '../../../assets/img/animation/menu/menu-3.svg',
    '../../../assets/img/animation/menu/menu-4.svg',
    '../../../assets/img/animation/menu/menu-5.svg',
    '../../../assets/img/animation/menu/menu-6.svg',
    '../../../assets/img/animation/menu/menu-7.svg',
    '../../../assets/img/animation/menu/menu-8.svg',
  ];

  currentPicture = this.menuImages[0];
  isMenuOpen = false;
  pictureIndex = 0;
  animationInterval: any;
  stopAtIndex = 4;

  constructor (private router: Router) {}

  toggleMenu() {
    if (!this.isMenuOpen) {
      this.router.navigate(['nav-menu']);
      this.startAnimation();
    } else {
      this.stopAtIndex = 7;
      this.router.navigate(['']);
      this.startAnimation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  startAnimation() {
    this.animationInterval = setInterval(() => {
      this.currentPicture = this.menuImages[this.pictureIndex];
      this.pictureIndex++;
      if (this.pictureIndex > this.stopAtIndex) {
        if (this.stopAtIndex == 7) 
          {
            this.pictureIndex = 0;
            this.currentPicture = this.menuImages[this.pictureIndex];
          }
        clearInterval(this.animationInterval); 
        this.stopAtIndex = 4;
      }
    }, 125);
  }
}
