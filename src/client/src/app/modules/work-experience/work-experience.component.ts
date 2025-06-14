import { Component } from '@angular/core';
import { WorkProjectEntityComponent } from "../work-project-entity/work-project-entity.component";
import { IContainerTemplate } from '../interfaces/icontainer-template';
import { WorkType } from '../enums/work-type';

@Component({
  selector: 'app-work-experience',
  imports: [WorkProjectEntityComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  title: string = WorkType.WorkExperience;
  workExperience: IContainerTemplate[] = [
    {
      name: 'Raychem (Chemelex)',
      description: ["Led the development of a smart Python code editor, allowing users to run custom scripts securely.", "Worked on a 3D piping system renderer."],
      from: '5th July 2022',
      to: '1st April 2025',
      skills: ["TypeScript", "JavaScript", "Angular", "Three.Js", "Python", ".NET", "HTML", "CSS", "AWS", "GIT", "Gitlab", "JIRA", "Py-Test", "Jasmine/Karma", "Jest", "Cypress", "XUnit Test"],
      logoPath: 'assets/chemelex.png',
      role: 'Full Stack Developer'
    },
    {
      name: 'Outrider.live',
      description: ["Integrated Google Maps Drawing API to display live salesman locations and building backend APIs for seamless data exchange.", "Oversaw task assignments, conducted code reviews, and coordinated directly with stakeholders to translate business requirements into technical solutions."],
      from: '3rd September 2020',
      to: '19th June 2021',
      skills: ["NodeJS", "JavaScript", "Socket.io", "SQL", "HTML", "CSS", "Github", "Scrum Master", "Leadership"],
      logoPath: 'assets/outrider.png',
      role: 'Software developer Intern',
      id: 'fitImage'
    }
  ];

}
