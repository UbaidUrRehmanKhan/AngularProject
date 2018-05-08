import { TaskModel } from './../taskModel';
import { TaskService } from './../task.service';
import { UserModel } from './../../users/userModel';
import { Component, OnInit, Input } from '@angular/core';
import { USERS } from '../../users/mock-users';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppUserAuth } from '../../auth/login/appUserAuth';
import { SecurityService } from '../../Security/security.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../users/user-service.service';
@Component({
  selector: 'app-task-assigning',
  templateUrl: './task-assigning.component.html',
  styleUrls: ['./task-assigning.component.css']
})
export class TaskAssigningComponent implements OnInit {
  @Input() task: TaskModel; // received the task from parent
  successMessage = '';
  errorMessage = '';
  users: UserModel[];
  selectedUsers = [];
  usersArray = [];
  constructor(
    private userDataService: UserService,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getUsers();
  }


  // getting all the users so that we will be able to assigne task to them.
  getUsers(): void {

    this.userDataService.getUsers().subscribe(
      resp => {
        console.log(resp);
        this.users = resp;
        console.log('fetching all users in users list' + this.users);
      },
      () => {
        console.log('error in displaying users list');
      }
    );
  }


  // final submission of task assignment to user
  onSubmit(): void {
    console.log(this.task);
    for (let i = 0; i < this.selectedUsers.length; i++) {
      this.usersArray.push(this.selectedUsers[i].id);
    }
    this.selectedUsers = [];
    console.log(this.usersArray);
    console.log(this.task.id);
    this.taskService.assigningUsers(this.usersArray, this.task.id).subscribe(

      resp => {
        console.log(resp);
        this.successMessage = 'Task is successfully assigned to User(s).';
        this.usersArray = [];
      },
      (err: HttpErrorResponse) => {
        if (err.status === 422 || err.status === 500) {
          console.log(err.error);
          this.errorMessage =  'Whoops! There is a problem in assigning task to user(s)...';
        }  else {
          this.errorMessage = 'Woops! There is something wrong.';
        }
      }
    );
    this.usersArray = [];

  }
}
