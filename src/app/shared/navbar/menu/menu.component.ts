import { Component, Inject, output, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll'
import { TranslateService,TranslateModule} from '@ngx-translate/core';
import { Router } from '@angular/router';


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
  isImprintActive: boolean = false;
  public href: string = "";
  onMenuChange = output<boolean>();

  constructor (public translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.href = this.router.url;
    this.checkRoute();
  }

  async updateMenu(menuOpen: boolean) {
    if (this.isImprintActive) {
     this.goToHomeRoute();
    }
    setTimeout(() => {
      this.onMenuChange.emit(menuOpen);
    }, 1800);
  }

  goToHomeRoute() {
    this.router.navigate(['/']);
  }

  checkRoute() {
    if (this.href === "/imprint") {
      this.isImprintActive = true;
    }
  }
}
