import { Component, input, output } from '@angular/core';
import { CommonModule} from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll'
import { TranslateService,TranslateModule} from '@ngx-translate/core';



const hidden = {transform: 'translateY(100%)'};
const visible = {transform: 'translateY(0)'};
const timing = '150ms ease-in-out';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxPageScrollModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: []


})
export class MenuComponent {

  onMenuChange = output<boolean>();

  constructor (public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  updateMenu(menuOpen: boolean) {
    setTimeout(() => {
      this.onMenuChange.emit(menuOpen);
    }, 1800);
  }

}
