import { Component } from '@angular/core';
import { OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const hidden = {transform: 'translateY(100%)'};
const visible = {transform: 'translateY(0)'};
const timing = '500ms ease-in-out';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
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
    ])
  ]
})
export class MenuComponent implements OnDestroy, OnInit {

  animationState: 'enter' | 'leave' = 'leave';

  ngOnInit() {
    // Set animationState to 'enter' initially
    this.animationState = 'enter';
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.animationState = 'leave';
  }

}
