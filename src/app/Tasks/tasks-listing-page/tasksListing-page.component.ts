import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../taskModel';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tasks-listing',
  templateUrl: './tasks-listing.component.html',
  styleUrls: ['./tasks-listing.component.css']
})
export class TasksListingComponent implements OnInit {

  tasks: TaskModel[];
  constructor(private taskService: TaskService, private location: Location) { }
  remove: boolean;
  ngOnInit() {
    this.getTasks();

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
    console.log('clicked');
    this.location.back();
  }

}
