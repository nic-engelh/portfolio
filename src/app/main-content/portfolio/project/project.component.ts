import { Component, Input, OnInit } from '@angular/core';
import { TranslateService,TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() projectName?: string;

  projects: {name: string, stack: string, info: string, href: string, github: string}[] = [
    {name: "Pokedex", stack: "HTML | CSS | JavaScript | API", info:"PORTFOLIO-POKEDEX", href:"https://www.niklas-engelhardt.de/pokedex", github:"https://github.com/nic-engelh/pokedex"},
    {name: "Join", stack: "HTML | CSS | JavaScript", info:"PORTFOLIO-JOIN", href:"https://www.niklas-engelhardt.de/join", github:"https://github.com/nic-engelh/join"},
    {name: "Sharky", stack: "HTML | CSS | JavaScript", info:"PORTFOLIO-SHARKY", href:"https://www.niklas-engelhardt.de/sharky", github:"https://github.com/nic-engelh/sharky"},
  ]

  constructor (public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }



}
