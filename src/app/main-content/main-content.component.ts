import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { Router } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavbarComponent, LandingPageComponent, AboutMeComponent, ContactComponent, MySkillsComponent, PortfolioComponent, RouterOutlet, RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
