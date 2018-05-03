import { UserDetailItemComponent } from './user-detail-item/user-detail-item.component';
import { UserService } from './../user-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from './../userModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppUserAuth } from '../../auth/login/appUserAuth';
import { SecurityService } from '../../Security/security.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskModel } from '../../Tasks/taskModel';
import { TaskService } from '../../Tasks/task.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  tasks: TaskModel[];
  user: UserModel;
  securityObject: AppUserAuth = null;
  errorMessage: string;
  remove: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private securityService: SecurityService,
    private taskService: TaskService
  ) {
      this.securityObject = securityService.securityObject;
      this.getUser();
      this.getTasks();

    }

  ngOnInit() {

  }

  // getUser(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.userService.getUser(id)
  //     .subscribe(user => this.user = user);

  // }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(
      resp => {
        console.log(resp);
        this.user = resp;
        console.log('fetching User: ' + this.user);
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

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      resp => {
        console.log(resp);
        this.tasks = resp;
        console.log('fetching all tasks in tasks list' + this.tasks);
      },
      () => {
        console.log('error in displaying tasks list');
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
