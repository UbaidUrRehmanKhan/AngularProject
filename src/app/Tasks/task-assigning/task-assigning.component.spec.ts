import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssigningComponent } from './task-assigning.component';

describe('TaskAssigningComponent', () => {
  let component: TaskAssigningComponent;
  let fixture: ComponentFixture<TaskAssigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAssigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAssigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
