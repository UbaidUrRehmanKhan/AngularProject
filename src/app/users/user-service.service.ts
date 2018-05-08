import { UserModelToRegister } from './../auth/register/UserModelToRegister';
import { UsersComponent } from './users.component';
import { USERS } from './mock-users';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { UserModel } from './userModel';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { UrlSegment } from '@angular/router';
import { TaskModel } from '../Tasks/taskModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem('bearerToken')}),

};
const API_URL = 'http://example.com/api/';

@Injectable()
export class UserService {

  users: UserModel[];

  constructor(private http: HttpClient) { }

  // Getting users with API

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(API_URL + 'getUsers', httpOptions)
    .pipe(
        tap(resp => {
            this.users = resp;
            console.log('users after retrieving: ' + this.users);
        }));
  }


  // Getting users with Mock Data

  // getUsers(): Observable<UserModel[]> {
  //   console.log(localStorage.getItem('bearerToken'));
  //   return Observable.of(USERS).delay(100);
  // }



  // get single user data
  getUser(id: number): Observable<UserModelToRegister> {
    return this.http.get<UserModelToRegister>(API_URL + 'user/' + id, httpOptions)
    .pipe(
        tap(resp => {
            console.log('Fetched User Data ' + resp);
        }));
  }


  getColumns(): string[] {
    return ['id', 'name', 'isActive'];
  }


  // updating the data of a user
  updateUser(entity: UserModelToRegister): Observable<any> {
    return this.http.put(API_URL + 'updateUser',
    entity, httpOptions).pipe(
        tap(resp => {
          console.log('Response of User updation in user Service ' + resp);
        }));


  }

  // changing the status of a user
  updateUserStatus(id: number, status: number): Observable<any> {
    return this.http.put(API_URL + 'updateStatus/'  + id + '/' + status, httpOptions).pipe(
        tap(resp => {
          console.log('Response of User updation in user Service ' + resp.errorCode);
        }));


  }


  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


  // getting all the tasks of a single user
  getUserTasks($id): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(API_URL + 'user/' + $id + '/tasks', httpOptions)
    .pipe(
        tap(resp => {
            console.log('Tasks after assigning' + resp);
        }));
  }

}
