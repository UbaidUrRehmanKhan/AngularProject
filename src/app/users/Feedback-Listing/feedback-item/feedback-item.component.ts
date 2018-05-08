import { FeedbackService } from './../feedback.service';
import { FeedbackModel } from './../feedbackModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() itemDeleted = new EventEmitter<{index: number}>(); // to send the id of deleted item to parent so that it must
                                                              // be removed from the list

  errorMessage = '';
  constructor(private userService: UserService,
    private securityService: SecurityService, private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.securityObject = this.securityService.securityObject;
  }

  // deletion of a feedback
  onDelete(id): void {
    this.errorMessage = '';
    console.log(id);

    this.feedbackService.deleteFeedback(id).subscribe(
      resp => {
        this.itemDeleted.emit(id);
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
