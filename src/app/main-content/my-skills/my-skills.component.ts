import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {


  skillList: {name: string, imagePath: string}[] = [
    {name: "Angular", imagePath: "src/assets/img/skills/Angular.svg"},
    {name: "TypeScript", imagePath: "src/assets/img/skills/TypeScript.svg"},
    {name: "JavaScript", imagePath: "src/assets/img/skills/JavaScript.svg"},
    {name: "HTML", imagePath: "src/assets/img/skills/html.svg"},
    {name: "CSS", imagePath: "src/assets/img/skills/css.svg"},
    {name: "Firebase", imagePath: "src/assets/img/skills/Firebase.svg"},
    {name: "Rest-Api", imagePath: "src/assets/img/skills/Api.svg"},
    {name: "Git", imagePath: "src/assets/img/skills/git.svg"},
    {name: "Scrum", imagePath: "src/assets/img/skills/scrum.svg"},
    {name: "Materil design", imagePath: "src/assets/img/skills/TestAutomation.svg"}
  ]


}
