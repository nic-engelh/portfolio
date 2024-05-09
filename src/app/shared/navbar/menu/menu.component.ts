import { Component, Input, OnInit } from '@angular/core';
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
export class MenuComponent {
 @Input() animationState: string = 'enter';

 ngOnInit(): void {
  this.logMessageEvery1Seconds();
}

logMessageEvery1Seconds(): void {
  setInterval(() => {
    console.log(this.animationState);
  }, 1000);
}

}
