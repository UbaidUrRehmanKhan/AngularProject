import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTasksContainerComponent } from './assigned-tasks-container.component';

describe('AssignedTasksContainerComponent', () => {
  let component: AssignedTasksContainerComponent;
  let fixture: ComponentFixture<AssignedTasksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedTasksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTasksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
