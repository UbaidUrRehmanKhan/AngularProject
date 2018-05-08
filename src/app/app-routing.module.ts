import { AssignedTaskDetailsPageComponent } from './users/assigned-task-details-page/assigned-task-details-page.component';
import { EditTaskPageComponent } from './Tasks/edit-task-page/edit-task-page.component';
import { TaskDetailPageComponent } from './Tasks/task-detail-page/task-detail-page.component';
import { TasksListingComponent } from './Tasks/tasks-listing-page/tasksListing-page.component';
import { EditUserPageComponent } from './users/edit-user-page/edit-user-page.component';
import { RegisterComponent } from './auth/register/register-page.component';
import { HomeComponent } from './home/home-page.component';
import { LoginComponent } from './auth/login/login-page.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './Security/auth.guard';
import { UserDetailComponent } from './users/users-detail-page/user-detail-page.component';
import { TaskDetailComponentComponent } from './Tasks/task-detail-page/task-detail-component/task-detail-component.component';
import { NewTaskPageComponent } from './Tasks/new-task-page/new-task-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'users',
    component: UsersComponent,
    canActivate: [ AuthGuard]},
    { path: 'tasks',
    component: TasksListingComponent,
    canActivate: [ AuthGuard]},
  { path: 'login',
    component: LoginComponent},
  { path: 'user', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'users/:id/edit', component: EditUserPageComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard ] },
  { path: 'users/:userId/userTasks/:id', component: AssignedTaskDetailsPageComponent, canActivate: [AuthGuard ] },
  { path: 'tasks/:id', component: TaskDetailPageComponent, canActivate: [AuthGuard ] },
  { path: 'dashboard/userTasks/:id', component: AssignedTaskDetailsPageComponent, canActivate: [AuthGuard ] },
  { path: 'task', component: EditTaskPageComponent, canActivate: [AuthGuard ] },
  { path: 'tasks/:id/edit', component: EditTaskPageComponent, canActivate: [AuthGuard ] },
  // { path: 'users/:id/userTasks/:id', component: AssignedTaskDetailsPageComponent, canActivate: [AuthGuard ] },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
