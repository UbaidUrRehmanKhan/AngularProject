import { UserService } from './../user-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from './../userModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: UserModel;
  users: UserModel[];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUsers().subscribe(
      resp => {this.users = resp;
        console.log('Users List in user-detail' + this.users);
        this.user = this.users.find(x => x.id === id);
        console.log('Required User in user detail' + this.user);
      },
      () => {
        console.log('error');
      }
    );
  }

}
