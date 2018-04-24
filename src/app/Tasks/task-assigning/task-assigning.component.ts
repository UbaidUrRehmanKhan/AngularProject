import { Component, OnInit } from '@angular/core';
import { USERS } from '../../users/mock-users';

@Component({
  selector: 'app-task-assigning',
  templateUrl: './task-assigning.component.html',
  styleUrls: ['./task-assigning.component.css']
})
export class TaskAssigningComponent implements OnInit {

  users = USERS;
  selectedUsers = [];
  constructor() { }

  ngOnInit() {
  }

}
