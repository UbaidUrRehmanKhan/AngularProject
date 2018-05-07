import { FeedbackService } from './../feedback.service';
import { FeedbackModel } from './../feedbackModel';
import { Component, OnInit, Input } from '@angular/core';
import { AppUserAuth } from '../../../auth/login/appUserAuth';
import { UserService } from '../../user-service.service';
import { SecurityService } from '../../../Security/security.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit {
  securityObject: AppUserAuth = null;
  @Input() feedback: FeedbackModel;
  errorMessage = '';
  constructor(private userService: UserService,
    private securityService: SecurityService, private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.securityObject = this.securityService.securityObject;
  }

  onDelete(id): void {
    this.errorMessage = '';
    console.log(id);

    this.feedbackService.deleteFeedback(id).subscribe(
      resp => {
        console.log(resp);
      },
      (err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.errorMessage =  'No Data is found';

        } else {
          this.errorMessage = 'There is something wrong in deleting the data.';
        }
      }
    );

  }

}
