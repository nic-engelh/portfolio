import { Component, } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ViewportScroller } from '@angular/common';


const hidden = {transform: 'translateY(100%)'};
const visible = {transform: 'translateY(0)'};
const timing = '150ms ease-in-out';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: []


})
export class MenuComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
