import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListingFilteringComponent } from './tasks-listing-filtering.component';

describe('TasksListingFilteringComponent', () => {
  let component: TasksListingFilteringComponent;
  let fixture: ComponentFixture<TasksListingFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListingFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListingFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
