import { SecurityService } from './../Security/security.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskModelToRegister } from './taskModelToRegister';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { TaskModel } from './taskModel';
import { AppUserAuth } from '../auth/login/appUserAuth';


const API_URL = 'http://example.com/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem('bearerToken')}),

};

@Injectable()
export class TaskService {
  securityObject: AppUserAuth = null;

  tasks: TaskModel[];
  task: TaskModel;
  constructor(private http: HttpClient,
    private securityService: SecurityService) {
      this.securityObject = this.securityService.securityObject;

     }


  registerTask(entity: TaskModelToRegister): Observable<any> {
    return this.http.post(API_URL + 'registerTask',
    entity, httpOptions).pipe(
        tap(resp => {
          console.log('Response of Task Creation in Security Service ' + resp);
        }));


  }

  assigningUsers(entity, id: any): Observable<any> {
    console.log(entity);
    return this.http.post(API_URL + 'assigningUsers/' + id,
    JSON.stringify({'ids': entity}), httpOptions).pipe(
        tap(resp => {
          // console.log('Response of User Assignment in Task Service ' + resp);
        }));


  }


  detachingUser(userId, taskId): Observable<any> {
    return this.http.get(API_URL + 'detachingUser/' + userId + '/' + taskId, httpOptions).pipe(
        tap(resp => {
          // console.log('Response of User Assignment in Task Service ' + resp);
        }));


  }

  updateTask(entity: TaskModel): Observable<any> {
    return this.http.put(API_URL + 'updateTask',
    entity, httpOptions).pipe(
        tap(resp => {
          console.log('Response of Task updation in Task Service ' + resp);
        }));


  }

  // Getting Tasks with API

  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(API_URL + 'getTasks', httpOptions)
    .pipe(
        tap(resp => {
            this.tasks = resp;
            console.log('Tasks after assigning' + this.tasks);
        }));
  }


  getUserTask(userId, taskId): Observable<TaskModel> {
    console.log(this.securityObject.id);
    return this.http.get<TaskModel>(API_URL + 'user/'  + userId + '/tasks/' + taskId, httpOptions)
    .pipe(
        tap(resp => {
            this.task = resp;
            console.log('Task after assigning' + this.task);
        }));
  }


  updateTaskStatus(userId, taskId): Observable<any> {
    return this.http.put<any>(API_URL + 'user/'  + userId + '/tasks/' + taskId, httpOptions)
    .pipe(
        tap(resp => {
            console.log( resp);
        }));
  }

  getUserTasks(): Observable<TaskModel[]> {
    console.log(this.securityObject.id);
    return this.http.get<TaskModel[]>(API_URL + 'user/'  + this.securityObject.id + '/tasks' , httpOptions)
    .pipe(
        tap(resp => {
            this.tasks = resp;
            console.log('Tasks after assigning' + this.tasks);
        }));
  }


  getTask(id: number): Observable<TaskModel> {
    return this.http.get<TaskModel>(API_URL + 'getTask/' + id, httpOptions)
    .pipe(
        tap(resp => {
            console.log('Fetched Task Data ' + resp);
        }));
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'deleteTask/' + id, httpOptions)
    .pipe(
        tap(resp => {
            console.log('Task is Deleted. ');
        }));
  }





}
