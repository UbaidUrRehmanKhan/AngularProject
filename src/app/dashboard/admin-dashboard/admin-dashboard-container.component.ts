import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  // Apparently this dashboard has no data but it may conatin the stuff like total users, active users,
  // total tasks, etc. (other such information)
  constructor() { }

  ngOnInit() {
  }

}
