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
    {name: "Angular", imagePath: "/assets/img/skills/Angular.svg"},
    {name: "TypeScript", imagePath: "/assets/img/skills/TypeScript.svg"},
    {name: "JavaScript", imagePath: "/assets/img/skills/Javascript.svg"},
    {name: "HTML", imagePath: "/assets/img/skills/html.svg"},
    {name: "CSS", imagePath: "/assets/img/skills/css.svg"},
    {name: "Firebase", imagePath: "/assets/img/skills/Firebase.svg"},
    {name: "Rest-Api", imagePath: "/assets/img/skills/Api.svg"},
    {name: "Git", imagePath: "/assets/img/skills/git.svg"},
    {name: "Scrum", imagePath: "/assets/img/skills/scrum.svg"},
    {name: "Material design", imagePath: "/assets/img/skills/TestAutomation.svg"}
  ]

}
