import { camelCase } from 'lodash';

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkType } from '@modules/enums/work-type';
import { IContainerTemplate } from '@modules/interfaces/icontainer-template';
import {
    WorkProjectTemplateComponent
} from '@modules/work-project-template/work-project-template.component';

@Component({
  selector: 'app-work-project-entity',
  imports: [CommonModule, WorkProjectTemplateComponent],
  templateUrl: './work-project-entity.component.html',
  styleUrl: './work-project-entity.component.scss'
})
export class WorkProjectEntityComponent {
  @Input() title: string = "";
  @Input() entities: IContainerTemplate[] = [];

  constructor(private router: Router) { }

  get id(): string {
    return camelCase(this.title);
  }

  isDisplaySeperator(): boolean {
    return this.title == WorkType.WorkExperience;
  }

  redirectTo(entity: IContainerTemplate): void {
    this.router.navigate([`/entity`], {
      queryParams: {
        name: entity.name
      }
    })
  }
}
