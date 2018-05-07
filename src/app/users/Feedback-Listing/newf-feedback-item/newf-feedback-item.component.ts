import { FeedbackService } from './../feedback.service';
import { FeedbackModelToRegister } from './../feedbackModelToRegister';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { SecurityService } from '../../../Security/security.service';
import { AppUserAuth } from '../../../auth/login/appUserAuth';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newf-feedback-item',
  templateUrl: './newf-feedback-item.component.html',
  styleUrls: ['./newf-feedback-item.component.css']
})
export class NewfFeedbackItemComponent implements OnInit {
  securityObject: AppUserAuth = null;
  successMessage = '';
  errorMessage = '';
  feedbackItem: FeedbackModelToRegister = new FeedbackModelToRegister();
  constructor(private userService: UserService,
    private securityService: SecurityService,
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,

) {this.securityObject = securityService.securityObject; }

  ngOnInit() {
  }



  newFeedback(f: NgForm): void {
    console.log(f.value);
    this.errorMessage = null;
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    const userId = +this.route.snapshot.paramMap.get('userId');
    console.log(userId);
    this.feedbackService.newFeedbackItem(this.feedbackItem, userId, id).subscribe(
      resp => {
        console.log('Response in feedback creation ' + resp);
        this.successMessage = 'Thank you for your Feedback.';
        f.resetForm();
      },
      (err: HttpErrorResponse) => {
        if (err.status === 422) {
          console.log(err.error);
          this.errorMessage =  'Whoops! Error in adding feedback...';
        } else {
          this.errorMessage = 'Woops! There is something wrong.';
        }
      }
    );


  }
}
