import { TaskService } from './../../task.service';
import { TaskModel } from './../../taskModel';
import { Component, OnInit, Input } from '@angular/core';
import { AppUserAuth } from '../../../auth/login/appUserAuth';
import { UserService } from '../../../users/user-service.service';
import { SecurityService } from '../../../Security/security.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent implements OnInit {
  @Input() task: TaskModel;
  securityObject: AppUserAuth = null;
  errorMessage = '';
  constructor(private userService: UserService,
    private securityService: SecurityService,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location,
    private router: Router,

  ) {     this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
  }

  onDelete(id): void {
    console.log(id);
    this.taskService.deleteTask(id).subscribe(
      resp => {
        console.log(resp);
        // this.router.navigate(['/tasks']);
        this.location.back();
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


  updateTaskStatus(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    const userId = +this.route.snapshot.paramMap.get('userId');
    console.log(userId);
    this.taskService.updateTaskStatus(userId, id).subscribe(
      resp => {
        console.log(resp);
        this.task.status = 1;
      },
      (err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.errorMessage =  'No Data is found';

        } else {
          this.errorMessage = 'There is something wrong in updating the data.';
        }
      }
    );

  }

}
