
import { AppUserAuth } from './../auth/login/appUserAuth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../auth/login/appUser';
import { LOGIN_MOCKS } from '../auth/login/loginMocks';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helper = new JwtHelperService();
const API_URL = 'http://example.com/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};





@Injectable()
export class SecurityService {


  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient, private router: Router) { }

  resetSecurityObject(): void {
    this.securityObject.email = '';
    this.securityObject.bearerToken = '';
    this.securityObject.isAuthenticated = false;
    this.securityObject.isAdmin = false;
    localStorage.removeItem('bearerToken');
  }


  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();

    return this.http.post<AppUserAuth>(API_URL + 'login',
    entity, httpOptions).pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);
          localStorage.setItem('bearerToken',
            this.securityObject.bearerToken);

        }));


  }

  logout(): void {
    this.resetSecurityObject();
    this.router.navigate(['']);  }


  getUserData(): Observable<AppUserAuth> {
    console.log('inside getUser data function');
    return this.http.post<AppUserAuth>(API_URL + 'me', httpOptions).pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);
          localStorage.setItem('bearerToken',
            this.securityObject.bearerToken);
        }));
  }



  tokenGetter(): string {
    return localStorage.getItem('bearerToken');
  }


  isLoggedIn() {
    console.log('inside isLoggedIn function');

    const token = this.tokenGetter();

    if (!token) {
      console.log('No toekn');
      this.resetSecurityObject();
      return false;
    }


    const isExpired = helper.isTokenExpired(token);
    if (isExpired) {
      console.log('Token is expired');
      this.logout();
    }

    if (!isExpired && !this.securityObject.isAuthenticated) {
      this.getUserData().subscribe(
        resp => {
          console.log(resp);
        },
        () => {
          console.log('getUserData error');
          this.logout();
        }
      );
    }

    return !isExpired;
  }



}



