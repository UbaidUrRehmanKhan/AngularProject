import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskModelToRegister } from './taskModelToRegister';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { TaskModel } from './taskModel';


const API_URL = 'http://example.com/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem('bearerToken')}),

};

@Injectable()
export class TaskService {

  tasks: TaskModel[];
  constructor(private http: HttpClient) { }


  registerTask(entity: TaskModelToRegister): Observable<any> {
    return this.http.post(API_URL + 'registerTask',
    entity, httpOptions).pipe(
        tap(resp => {
          console.log('Response of Task Creation in Security Service ' + resp);
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

  getTask(id: number): Observable<TaskModel> {
    return this.http.get<TaskModel>(API_URL + 'getTask/' + id, httpOptions)
    .pipe(
        tap(resp => {
            console.log('Fetched Task Data ' + resp);
        }));
  }

}
