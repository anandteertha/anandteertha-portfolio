import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./modules/background/background.component";
import { AboutComponent } from "./modules/about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
