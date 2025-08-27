import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContainerTemplate } from '@modules/interfaces/icontainer-template';

@Component({
  selector: 'app-work-project-template',
  imports: [CommonModule],
  templateUrl: './work-project-template.component.html',
  styleUrl: './work-project-template.component.scss'
})
export class WorkProjectTemplateComponent {
  @Input() entity!: IContainerTemplate;
  @Input() description: string[] = [];
  @Input() isDetailed: boolean = false;
  @Output() redirectToEvent: EventEmitter<IContainerTemplate> = new EventEmitter<IContainerTemplate>();

  redirectTo(entity: IContainerTemplate): void {
    this.redirectToEvent.emit(entity);
  }

}
