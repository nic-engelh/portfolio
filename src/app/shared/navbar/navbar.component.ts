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

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [],
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
  ];

  currentPicture = this.menuImages[0];
  isMenuOpen = false;
  pictureIndex = 0;
  animationInterval: any;
  stopAtIndex = 4;

  toggleMenu() {
    if (!this.isMenuOpen) {
      this.startAnimation();
    } else {
      this.stopAtIndex = 6;
      this.startAnimation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  startAnimation() {
    this.animationInterval = setInterval(() => {
      this.currentPicture = this.menuImages[this.pictureIndex];
      this.pictureIndex++;
      if (this.pictureIndex > this.stopAtIndex) {
        this.pictureIndex = 0;
        this.stopAtIndex = 4;
        if (this.stopAtIndex == 6) this.currentPicture = this.menuImages[this.pictureIndex];
        clearInterval(this.animationInterval); 
      }
    }, 100);
  }
}
