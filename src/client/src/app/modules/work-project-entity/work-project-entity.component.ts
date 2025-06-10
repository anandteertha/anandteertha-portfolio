import { Component, Input } from '@angular/core';
import { IContainerTemplate } from '../interfaces/icontainer-template';
import { CommonModule } from '@angular/common';
import { camelCase } from 'lodash';

@Component({
  selector: 'app-work-project-entity',
  imports: [CommonModule],
  templateUrl: './work-project-entity.component.html',
  styleUrl: './work-project-entity.component.scss'
})
export class WorkProjectEntityComponent {

  @Input() title: string = "";
  @Input() entities: IContainerTemplate[] = [];

  get id(): string {
    return camelCase(this.title);
  }

}
