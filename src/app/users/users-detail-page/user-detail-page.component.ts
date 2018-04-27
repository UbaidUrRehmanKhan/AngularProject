import { UserDetailItemComponent } from './user-detail-item/user-detail-item.component';
import { UserService } from './../user-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from './../userModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppUserAuth } from '../../auth/login/appUserAuth';
import { SecurityService } from '../../Security/security.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  user: UserModel;
  securityObject: AppUserAuth = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private securityService: SecurityService
  ) {
      this.securityObject = securityService.securityObject;

    }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);

  }

  // getUser(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.userService.getUsers().subscribe(
  //     resp => {this.users = resp;
  //       console.log('Users List in user-detail' + this.users);
  //       this.user = this.users.find(x => x.id === id);
  //       console.log('Required User in user detail' + this.user);
  //     },
  //     () => {
  //       console.log('error');
  //     }
  //   );
  // }

}
