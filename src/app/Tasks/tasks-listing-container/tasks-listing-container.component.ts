import { TaskModel } from './../taskModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASKS } from './mockTasks';
import { Router } from '@angular/router';
import { SecurityService } from '../../Security/security.service';
import { AppUserAuth } from '../../auth/login/appUserAuth';
import { TaskService } from '../task.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tasks-listing-container',
  templateUrl: './tasks-listing-container.component.html',
  styleUrls: ['./tasks-listing-container.component.css']
})
export class TasksListingContainerComponent implements OnInit {
  errorMessage = '';
  successMessage = '';
  securityObject: AppUserAuth;
  @Input() tasksArray: TaskModel[];
  @Input() remove: boolean;
  @Output() itemDeleted = new EventEmitter<{index: number}>();

  userId: number;
  constructor(
    private router: Router,
    private securityService: SecurityService,
    private taskService: TaskService,
  ) {
    this.securityObject = this.securityService.securityObject;
  }



  ngOnInit() {
    this.userId = +this.router.url.substr(this.router.url.lastIndexOf('/') + 1);

  }


  removeTask(taskId): void {
    console.log(taskId + '' + this.userId);
    this.taskService.detachingUser(this.userId, taskId).subscribe(
      resp => {
        console.log(resp);
        this.itemDeleted.emit(taskId);
        console.log('Task is detached from user.');
      },
      (err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.errorMessage =  'No Data is found';

        } else {
          this.errorMessage = 'There is something wrong in processing the data.';
        }
      }
    );

  }






  getUrl(id): void {
    console.log(id);
    console.log(this.router.url);
    this.userId = +this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    if (this.router.url === '/users/' + this.userId && this.securityObject.isAdmin) {
      this.router.navigate(['users/' + this.userId + '/userTasks/' + id]);
    } else if (this.router.url === '/tasks' && this.securityObject.isAdmin) {
      this.router.navigate(['/tasks/' + id]);
    } else if (!this.securityObject.isAdmin && this.router.url === '/dashboard') {
      this.router.navigate(['users/' + this.securityObject.id + '/userTasks/' + id]);
    }
  }
}
