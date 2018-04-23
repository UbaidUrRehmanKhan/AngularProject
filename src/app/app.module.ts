import { UserDetailItemComponent } from './users/users-detail-page/user-detail-item/user-detail-item.component';
import { TasksListingComponent } from './Tasks/tasks-listing-page/tasksListing-page.component';

import { UserService } from './users/user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.page';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login-page.component';
import { RegisterComponent } from './auth/register/register-page.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard-container.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard-container.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SecurityService } from './Security/security.service';
import { AuthGuard } from './Security/auth.guard';
import { HomeComponent } from './home/home-page.component';
import { AdminCheckService } from './Security/admin-check.service';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardDirective } from './dashboard/dashboard.directive';
import { TableComponent } from './users/users-listing-page/users-listing-page.component';
import { UserDetailComponent } from './users/users-detail-page/user-detail-page.component';
import { TasksListingContainerComponent } from './Tasks/tasks-listing-container/tasks-listing-container.component';

import { EditUserPageComponent } from './users/edit-user-page/edit-user-page.component';
import { TaskDetailComponentComponent } from './Tasks/task-detail-page/task-detail-component/task-detail-component.component';
import { TaskDetailPageComponent } from './Tasks/task-detail-page/task-detail-page.component';
import { AssignedTasksContainerComponent } from './users/assigned-tasks-container/assigned-tasks-container.component';
import { FeedbackItemComponent } from './users/Feedback-Listing/feedback-item/feedback-item.component';
import { FeedbackListingContainerComponent } from './users/Feedback-Listing/feedback-listing-container/feedback-listing-container.component';
import { NewfFeedbackItemComponent } from './users/Feedback-Listing/newf-feedback-item/newf-feedback-item.component';

export function tokenGetter() {
  return localStorage.getItem('bearerToken');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DashboardComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    HomeComponent,
    DashboardDirective,
    TableComponent,
    UserDetailComponent,
    TasksListingContainerComponent,
    EditUserPageComponent,
    TasksListingComponent,
    TaskDetailComponentComponent,
    UserDetailItemComponent,
    TaskDetailPageComponent,
    TaskDetailComponentComponent,
    AssignedTasksContainerComponent,
    FeedbackItemComponent,
    FeedbackListingContainerComponent,
    NewfFeedbackItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['']
      }
    })
  ],
  providers: [SecurityService, AuthGuard, AdminCheckService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
