import { Component, OnInit } from '@angular/core';
import { TASKS } from './mockTasks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-listing-container',
  templateUrl: './tasks-listing-container.component.html',
  styleUrls: ['./tasks-listing-container.component.css']
})
export class TasksListingContainerComponent implements OnInit {

  constructor(private router: Router) { }
  tasks = TASKS;
  ngOnInit() {
  }


  getUrl(): void {

    console.log(this.router.url);
  }
}
