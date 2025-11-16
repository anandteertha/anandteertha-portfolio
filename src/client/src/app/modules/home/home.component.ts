import { Component } from '@angular/core';
import { TimelineComponent } from '@modules/timeline/timeline.component';

@Component({
  selector: 'app-home',
  imports: [TimelineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
