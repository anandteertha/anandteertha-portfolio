import { Component } from '@angular/core';
import { EntityProxyMapper } from '@models/entity-proxy-mapper';
import { WorkType } from '@modules/enums/work-type';
import { IContainerTemplate } from '@modules/interfaces/icontainer-template';
import {
    WorkProjectEntityComponent
} from '@modules/work-project-entity/work-project-entity.component';

@Component({
  selector: 'app-work-experience',
  imports: [WorkProjectEntityComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  title: string = WorkType.WorkExperience;
  workExperience: IContainerTemplate[] = [
    EntityProxyMapper.raychemContainer(), EntityProxyMapper.outriderContainer()
  ];

}
