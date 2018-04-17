import { AdminCheckService } from './security/admin-check.service';
import { HomeComponent } from './home/home.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]},
  { path: 'login',
    component: LoginComponent},
  { path: 'tasks',
    component: TasksListComponent,
    canActivate: [AuthGuard]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
