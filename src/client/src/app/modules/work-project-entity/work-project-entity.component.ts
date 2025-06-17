import { camelCase } from 'lodash';

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WorkType } from '@modules/enums/work-type';
import { IContainerTemplate } from '@modules/interfaces/icontainer-template';

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

  isDisplaySeperator(): boolean {
    return this.title == WorkType.WorkExperience;
  }
}
