import { Component } from '@angular/core';
import { AboutComponent } from '@modules/about/about.component';
import { ProjectsComponent } from '@modules/projects/projects.component';
import { WorkExperienceComponent } from '@modules/work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent, WorkExperienceComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
