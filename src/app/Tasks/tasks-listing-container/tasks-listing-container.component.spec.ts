import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListingContainerComponent } from './tasks-listing-container.component';

describe('TasksListingContainerComponent', () => {
  let component: TasksListingContainerComponent;
  let fixture: ComponentFixture<TasksListingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
