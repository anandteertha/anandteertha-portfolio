import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProjectEntityComponent } from './work-project-entity.component';

describe('WorkProjectEntityComponent', () => {
  let component: WorkProjectEntityComponent;
  let fixture: ComponentFixture<WorkProjectEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProjectEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProjectEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
