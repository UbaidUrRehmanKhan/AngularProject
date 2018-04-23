import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../Tasks/tasks-listing-container/mockTasks';

@Component({
  selector: 'app-assigned-tasks-container',
  templateUrl: './assigned-tasks-container.component.html',
  styleUrls: ['./assigned-tasks-container.component.css']
})
export class AssignedTasksContainerComponent implements OnInit {

  constructor() { }
  tasks = TASKS;
  ngOnInit() {
  }

}
