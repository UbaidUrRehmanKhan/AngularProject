import { FeedbackModelToRegister } from './feedbackModelToRegister';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://example.com/api/';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem('bearerToken')}),

};

@Injectable()
export class FeedbackService {

  constructor(private http: HttpClient) { }


  newFeedbackItem(entity: FeedbackModelToRegister, userId, id): Observable<any> {
    return this.http.post(API_URL + 'registerFeedback/' + userId + '/' + id,
    entity, httpOptions).pipe(
        tap(resp => {
          console.log( resp);
        }));


  }
}
