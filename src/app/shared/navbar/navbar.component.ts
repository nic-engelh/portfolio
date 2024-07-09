import { Component} from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Overlay, OverlayModule} from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal'
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';


const hidden = {transform: 'translateY(100%)'};
const visible = {transform: 'translateY(0)'};
const timing = '150ms ease-in-out';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent, CommonModule, OverlayModule, PortalModule],
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
  protected menuOpen = false;

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


  constructor(private overlay: Overlay, private translate: TranslateService) {
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  toggleMenuButton() {
    if (!this.isMenuOpen) {
      this.startAnimation();
    } else {
      this.stopAtIndex = 7;
      this.startAnimation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }


  startAnimation() {
    this.animationInterval = setInterval(() => {
      this.currentPicture = this.menuImages[this.pictureIndex];
      if (++this.pictureIndex > this.stopAtIndex) {
        clearInterval(this.animationInterval);
        [this.pictureIndex, this.currentPicture] = this.stopAtIndex === 7 ? [0, this.menuImages[0]] : [this.pictureIndex, this.currentPicture];
        this.stopAtIndex = 4;
      }
    }, 125);
  }

}
