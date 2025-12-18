import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IentityType } from '@modules/interfaces/ientity-type';
import {
    WorkProjectTemplateComponent
} from '@modules/work-project-template/work-project-template.component';

@Component({
  selector: 'app-entity-details',
  imports: [RouterModule, CommonModule, WorkProjectTemplateComponent],
  templateUrl: './entity-details.component.html',
  styleUrl: './entity-details.component.scss'
})
export class EntityDetailsComponent implements OnInit {
  queryDetails!: IentityType;
  imageIndex: number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.queryDetails = this.route.snapshot.data['queryDetails'];
  }

  moveSlide(count: number): void {
    if (count === 1 && this.imageIndex === this.queryDetails.carousel.length) {
      this.imageIndex = 0
    }
    else if (count === -1 && this.imageIndex === 1) {
      this.imageIndex = this.queryDetails.carousel.length + 1;
    }
    this.imageIndex += count;
  }


}
