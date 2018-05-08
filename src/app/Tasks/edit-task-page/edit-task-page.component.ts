import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TaskModel } from '../taskModel';
import { TaskService } from './../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModelToRegister } from '../taskModelToRegister';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.css']
})
export class EditTaskPageComponent implements OnInit {


  errorMessage = null;
  successMessage = null;
  task: TaskModel;
  newTaskMode = false;
  pageHeading = '';

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.getTask();
  }

 // back button
  goBack(): void {
    this.location.back();
  }



  // fetching the task detail via query string
  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id === 0) {
      this.task = new TaskModel();
      this.newTaskMode = true;
      this.pageHeading = 'Task Creation';
    } else {
      this.pageHeading = 'Task Updation';
      this.taskService.getTask(id)
      .subscribe(
        resp => {
          console.log('Response in task retrieval ' + resp);
          this.task = resp;

        },
        (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.errorMessage =  'Whoops! No data is found';
          } else {
            this.errorMessage = 'There is something wrong.';
          }

        }
      );
    }
  }


  // Saving the data of a task (either in the form of updation or newly saved data)
  saveTask(f: NgForm): void {
    if (this.newTaskMode === false) {
      // updating the task
      this.errorMessage = null;
      this.successMessage = null;
      console.log(f.value);
      this.taskService.updateTask(this.task).subscribe(
        resp => {
          console.log('Response in task updation ' + resp);
          this.successMessage = 'User is Updated successfully.';

        },
        (err: HttpErrorResponse) => {
          if (err.status === 304) {
            console.log(err.error);
            this.errorMessage =  'Whoops! Error in updating Task...';
          } else if (err.status === 500) {
            console.log(err.error);
            this.errorMessage =  'This E-mail is already taken.';
          } else {
            this.errorMessage = 'Woops! There is something wrong.';
          }

        }
      );
    } else {
      // creation of a new task
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
}
