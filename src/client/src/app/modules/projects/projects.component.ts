import { Component } from '@angular/core';
import { EntityProxyMapper } from '@models/entity-proxy-mapper';
import { EntityName } from '@modules/enums/entity-name';
import { WorkType } from '@modules/enums/work-type';
import { IContainerTemplate } from '@modules/interfaces/icontainer-template';
import {
    WorkProjectEntityComponent
} from '@modules/work-project-entity/work-project-entity.component';

@Component({
  selector: 'app-projects',
  imports: [WorkProjectEntityComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  title: string = WorkType.Projects;
  projects: IContainerTemplate[] = [
    EntityProxyMapper.lungCapacityCheckContainer(),
    EntityProxyMapper.facultyAttendanceContainer(),
    EntityProxyMapper.crowdCountingContainer(),
    EntityProxyMapper.gymManagerApplicationContainer(),
  ];

}
