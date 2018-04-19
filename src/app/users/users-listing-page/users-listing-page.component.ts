import { UserModel } from './../userModel';
import { UserService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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

  onSelect(user: UserModel): void {
    this.selectedUser = user;
    console.log('selected User' + this.selectedUser);
  }

}
