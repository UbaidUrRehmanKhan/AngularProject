import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTaskDetailsPageComponent } from './assigned-task-details-page.component';

describe('AssignedTaskDetailsPageComponent', () => {
  let component: AssignedTaskDetailsPageComponent;
  let fixture: ComponentFixture<AssignedTaskDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedTaskDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTaskDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
