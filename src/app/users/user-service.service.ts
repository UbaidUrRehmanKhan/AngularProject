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
            console.log('users after assigning' + this.users);
        }));
  }


  // Getting users with Mock Data

  // getUsers(): Observable<UserModel[]> {
  //   console.log(localStorage.getItem('bearerToken'));
  //   return Observable.of(USERS).delay(100);
  // }



  // get single user data

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(API_URL + 'user/' + id, httpOptions)
    .pipe(
        tap(resp => {
            console.log('Fetched User Data ' + resp);
        }));
  }


  getColumns(): string[] {
    return ['id', 'name', 'isActive'];
  }




  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
