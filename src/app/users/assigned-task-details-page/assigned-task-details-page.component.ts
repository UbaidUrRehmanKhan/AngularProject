import { FeedbackListingContainerComponent } from './../Feedback-Listing/feedback-listing-container/feedback-listing-container.component';
import { FeedbackModel } from './../Feedback-Listing/feedbackModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskModel } from '../../Tasks/taskModel';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskService } from '../../Tasks/task.service';
import { Location } from '@angular/common';
import { UserService } from '../user-service.service';
import { SecurityService } from '../../Security/security.service';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assigned-task-details-page',
  templateUrl: './assigned-task-details-page.component.html',
  styleUrls: ['./assigned-task-details-page.component.css']
})
export class AssignedTaskDetailsPageComponent implements OnInit {

  // it is the parent most component so it will be responsible to pass the manipulate the data in child
  @ViewChild(FeedbackListingContainerComponent)
  private feedbackContainer: FeedbackListingContainerComponent;
  achievedTask: TaskModel;
  errorMessage = '';
  successMessage = '';

  constructor(private userService: UserService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
  private securityService: SecurityService) { }

  ngOnInit() {
    this.getUserTask();
  }


  // back button
  goBack(): void {
    this.location.back();
  }


  // fetching the details of single task that was assigned to a user
  getUserTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    const userId = +this.route.snapshot.paramMap.get('userId');
    console.log(userId);
    this.taskService.getUserTask(userId, id).subscribe(
      resp => {
        console.log(resp);
        this.achievedTask = resp;
        console.log(this.achievedTask);
      },
      (err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.errorMessage =  'No Data is found';

        } else {
          this.errorMessage = 'There is something wrong in fetching the data.';
        }
      }
    );

  }



  // after entering of new feedback comment, that comment will be added to already retrieved tasks
  fetchingFeedback(feedbackObj: FeedbackModel): void {
    console.log(feedbackObj);
    this.feedbackContainer.feedbacksList.push(feedbackObj);
  }

}
