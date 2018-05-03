import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TaskModel } from '../taskModel';

import { ActivatedRoute, Router } from '@angular/router';
import { TaskModelToRegister } from '../taskModelToRegister';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.css']
})
export class NewTaskPageComponent implements OnInit {

  task: TaskModelToRegister = new TaskModelToRegister();
  errorMessage = null;
  successMessage = null;
  tasks: TaskModel;

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }



  registerTask(f: NgForm): void {
    this.errorMessage = null;
    this.successMessage = null;
    console.log(f.value);
    this.taskService.registerTask(this.task).subscribe(
      resp => {
        console.log('Response in Task creation ' + resp);
        this.successMessage = 'Task is added successfully.';
        f.resetForm();
      },
      (err: HttpErrorResponse) => {
        if (err.status === 422) {
          console.log(err.error);
          this.errorMessage =  'Whoops! Error in creating Task...';
        } else {
          this.errorMessage = 'Woops! There is something wrong.';
        }
      }
    );
  }

}
