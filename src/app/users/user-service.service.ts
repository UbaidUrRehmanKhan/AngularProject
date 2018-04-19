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
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

  user: UserModel;
  users: UserModel[]
;  private usersUrl = 'users';  // URL to web api

  constructor(private http: HttpClient) { }


  getUsers(): Observable<UserModel[]> {
    return Observable.of(USERS).delay(100);
  }
  getColumns(): string[] {
    return ['id', 'name', 'isActive'];
  }
}
