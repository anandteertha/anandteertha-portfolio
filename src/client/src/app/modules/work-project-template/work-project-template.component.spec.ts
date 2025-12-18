import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProjectTemplateComponent } from './work-project-template.component';

describe('WorkProjectTemplateComponent', () => {
  let component: WorkProjectTemplateComponent;
  let fixture: ComponentFixture<WorkProjectTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProjectTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProjectTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
