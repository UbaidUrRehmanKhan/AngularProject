import { UserModel } from './../userModel';
import { UserService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  status = false;
  selectedUser: UserModel;
  users: UserModel[];
  columns: string[];
  constructor(private userDataService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void {
    this.columns = this.userDataService.getColumns();
    this.userDataService.getUsers().subscribe(
      resp => {
        console.log(resp);
        this.users = resp;
        console.log('fetching all users in users list' + this.users);
      },
      () => {
        console.log('error in displaying users list');
      }
    );
  }

  onSelect(user: UserModel, roleStatus: number): void {
    this.selectedUser = user;
    console.log(status);
    console.log('selected User' + this.selectedUser.id);

    this.userDataService.updateUserStatus(this.selectedUser.id, roleStatus).subscribe(
      resp => {
        console.log('Response in user updation ' + resp);
        this.status = !this.status;
      },
      (err: HttpErrorResponse) => {
        if (err.status === 304) {
          console.log(err.error);

        } else if (err.status === 500) {
          console.log(err.error);

        } else {
          console.log(err.error);
        }

      }
    );
  }



}
