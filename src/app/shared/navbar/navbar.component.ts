import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

const hidden = {transform: 'translateY(100%)'};
const visible = {transform: 'translateY(0)'};
const timing = '150ms ease-in-out';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style(hidden),
        animate(timing, style(visible))
      ]),
      transition(':leave', [
        style(visible),
        animate(timing, style(hidden))
      ])
    ]),


  ]
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
  isOpen = false;


  toggleMenuButton() {
    if (!this.isMenuOpen) {
      this.startAnimation();
      this.isMenuOpen = !this.isMenuOpen;
      setTimeout(()=> {
        this.isOpen = !this.isOpen;
      },500)

      ;
    } else {
      this.stopAtIndex = 7;
      this.startAnimation();
      this.isOpen = !this.isOpen;
      setTimeout(()=> {
        this.isMenuOpen = !this.isMenuOpen;
      },500)
    }
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
