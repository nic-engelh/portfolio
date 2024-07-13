import { Component } from '@angular/core';
import { TranslateService,TranslateModule} from '@ngx-translate/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor (public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

}
