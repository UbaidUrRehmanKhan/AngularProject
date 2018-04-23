import { Component, OnInit } from '@angular/core';
import { TASKS } from './mockTasks';

@Component({
  selector: 'app-tasks-listing-container',
  templateUrl: './tasks-listing-container.component.html',
  styleUrls: ['./tasks-listing-container.component.css']
})
export class TasksListingContainerComponent implements OnInit {

  constructor() { }
  tasks = TASKS;
  ngOnInit() {
  }

}
