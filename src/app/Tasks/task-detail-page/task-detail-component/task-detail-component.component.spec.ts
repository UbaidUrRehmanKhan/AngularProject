import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailComponentComponent } from './task-detail-component.component';

describe('TaskDetailComponentComponent', () => {
  let component: TaskDetailComponentComponent;
  let fixture: ComponentFixture<TaskDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
