import { Component, Inject, output, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll'
import { PageScrollService } from 'ngx-page-scroll-core';


import { TranslateService,TranslateModule} from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';


const hidden = {transform: 'translateY(100%)'};
const visible = {transform: 'translateY(0)'};
const timing = '150ms ease-in-out';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxPageScrollModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: []


})
export class MenuComponent {
  isImprintActive: boolean = false;
  public href: string = "";
  onMenuChange = output<boolean>();

  constructor (public translate: TranslateService, private router: Router,private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.href = this.router.url;
    this.checkRoute();
    console.log(this.isImprintActive)
  }

  async updateMenu(menuOpen: boolean, target: string) {
    if (this.isImprintActive) {
     await this.goToHomeRoute();
     setTimeout(() => {
      this.scrollToTarget(target);
    }, 150);

    }
    setTimeout(() => {
      this.onMenuChange.emit(menuOpen);
    }, 150);
  }

  goToHomeRoute() {
    this.router.navigate(['/']);
  }

  checkRoute() {
    if (this.href === "/imprint") {
      this.isImprintActive = true;
    }
  }

  scrollToTarget (target: string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: target,
    });
   }

  }
