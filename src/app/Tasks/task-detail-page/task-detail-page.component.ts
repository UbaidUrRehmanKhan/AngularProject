import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../Security/security.service';
import { UserService } from '../../users/user-service.service';
import { AppUserAuth } from '../../auth/login/appUserAuth';
import { ActivatedRoute } from '@angular/router';
import { TaskModel } from '../taskModel';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-detail-page',
  templateUrl: './task-detail-page.component.html',
  styleUrls: ['./task-detail-page.component.css']
})
export class TaskDetailPageComponent implements OnInit {
  securityObject: AppUserAuth = null;
  achievedTask: TaskModel;
  errorMessage = '';
  successMessage = '';
  constructor(private userService: UserService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
  private securityService: SecurityService) { }

  ngOnInit() {
    this.securityObject = this.securityService.securityObject;
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.taskService.getTask(id).subscribe(
      resp => {
        console.log(resp);
        this.achievedTask = resp;
        console.log('fetching Task: ' + this.achievedTask);
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

}
