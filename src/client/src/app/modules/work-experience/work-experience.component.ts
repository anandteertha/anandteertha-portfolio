import { Component } from '@angular/core';
import { IContainerTemplate } from '../interfaces/icontainer-template';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {

  workExperience: IContainerTemplate[] = [
    {
      name: 'Raychem (Chemelex)',
      description: ["Led the development of a smart Python code editor, allowing users to run custom scripts securely.", "Worked on a 3D piping system renderer."],
      from: '5th July 2022',
      to: '1st April 2025',
      skills: ["TypeScript", "JavaScript", "Angular", "Three.Js", "Python", ".NET", "HTML", "CSS", "AWS", "GIT", "Gitlab", "JIRA"],
      logoPath: 'assets/chemelex.png',
      role: 'Full Stack Developer'
    }
  ];

}
