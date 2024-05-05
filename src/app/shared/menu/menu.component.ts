import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100vh)', opacity: 0 }),
        animate('500ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateY(-100vh)', opacity: 0 }))
      ])
    ])
  ]
})
export class MenuComponent {


  showMenu = false;
  animationState = 'enter';

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    // Set animationState to 'enter' initially
    this.animationState = 'enter';
  }

  ngOnDestroy() {
    // Set animationState to 'leave' when the component is destroyed
    this.animationState = 'leave';
  }

}
