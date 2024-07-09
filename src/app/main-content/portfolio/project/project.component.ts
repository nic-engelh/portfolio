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
    {name: "Pokedex", stack: "HTML | CSS | JavaScript | API", info:"Based on the PokéAPI a simple library that provides and catalogues pokemon information."},
    {name: "Join", stack: "HTML | CSS | JavaScript", info:"Taskmanager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."},
    {name: "Sharky", stack: "HTML | CSS | JavaScript", info:"A simple Jump-and-Run game based on a object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale."},
  ]

  constructor (public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

}
