import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListingContainerComponent } from './feedback-listing-container.component';

describe('FeedbackListingContainerComponent', () => {
  let component: FeedbackListingContainerComponent;
  let fixture: ComponentFixture<FeedbackListingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackListingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
