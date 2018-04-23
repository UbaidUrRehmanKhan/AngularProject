import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfFeedbackItemComponent } from './newf-feedback-item.component';

describe('NewfFeedbackItemComponent', () => {
  let component: NewfFeedbackItemComponent;
  let fixture: ComponentFixture<NewfFeedbackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfFeedbackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfFeedbackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
