import { Component } from '@angular/core';
import { BackgroundComponent } from "./modules/background/background.component";
import { AboutComponent } from "./modules/about/about.component";
import { NavBarComponent } from "./modules/nav-bar/nav-bar.component";
import { WorkExperienceComponent } from "./modules/work-experience/work-experience.component";

@Component({
  selector: 'app-root',
  imports: [BackgroundComponent, AboutComponent, NavBarComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
