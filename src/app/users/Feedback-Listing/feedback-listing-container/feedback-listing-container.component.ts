import { FeedbackModel } from './../feedbackModel';
import { Component, OnInit, Input } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-listing-container',
  templateUrl: './feedback-listing-container.component.html',
  styleUrls: ['./feedback-listing-container.component.css']
})
export class FeedbackListingContainerComponent implements OnInit {
  feedbacksList: FeedbackModel[];
  constructor(private feedbackSerivce: FeedbackService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFeedbacks();
  }


  getFeedbacks(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    const userId = +this.route.snapshot.paramMap.get('userId');
    console.log(userId);
    this.feedbackSerivce.veiwFeedbacks(userId, id).subscribe(
      resp => {
            console.log(resp);
            this.feedbacksList = resp;
            console.log('fetching all feedbacks');
          },
          () => {
            console.log('error in displaying feedbacks list');
          }
    );
  }

  onItemDeleted(index) {
    this.feedbacksList.splice(index, 1);
  }
}


