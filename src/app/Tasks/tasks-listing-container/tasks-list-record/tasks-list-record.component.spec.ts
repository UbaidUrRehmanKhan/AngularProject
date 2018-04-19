import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListRecordComponent } from './tasks-list-record.component';

describe('TasksListRecordComponent', () => {
  let component: TasksListRecordComponent;
  let fixture: ComponentFixture<TasksListRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
