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
    this.columns = this.userDataService.getColumns();
    this.userDataService.getUsers().subscribe(
      resp => {this.users = resp;
        console.log(resp);
      },
      () => {
        console.log('error');
      }
    );
  }

  onSelect(user: UserModel): void {
    this.selectedUser = user;
  }

}
