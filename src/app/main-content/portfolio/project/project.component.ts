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

  projects: {name: string, stack: string, info: string}[] = [
    {name: "Pokedex", stack: "HTML | CSS | JavaScript | API", info:"PORTFOLIO-POKEDEX"},
    {name: "Join", stack: "HTML | CSS | JavaScript", info:"PORTFOLIO-JOIN"},
    {name: "Sharky", stack: "HTML | CSS | JavaScript", info:"PORTFOLIO-SHARKY"},
  ]

  constructor (public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }



}
