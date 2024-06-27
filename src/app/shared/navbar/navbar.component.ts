import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
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
  private navbarElement: HTMLElement;
  private initialTop: number;

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

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.navbarElement = this.elRef.nativeElement;
    this.initialTop = this.navbarElement.offsetTop;
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleNavbarPosition();
  }

  handleNavbarPosition() {
    if (window.scrollY >= this.initialTop) {
      this.renderer.setStyle(this.navbarElement, 'position', 'fixed');
      this.renderer.setStyle(this.navbarElement, 'top', '0');
      this.renderer.setStyle(this.navbarElement, 'width', '100%');
    } else {
      this.renderer.setStyle(this.navbarElement, 'position', 'static');
      this.renderer.setStyle(this.navbarElement, 'top', 'auto');
      this.renderer.removeStyle(this.navbarElement, 'width');
    }
  }



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
