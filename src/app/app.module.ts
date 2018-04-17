import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskItemComponent } from './tasks/tasks-list/task-item/task-item.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TaskDetailComponent } from './tasks/tasks-list/task-item/task-detail/task-detail.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SecurityService } from './security/security.service';
import { AuthGuard } from './security/auth.guard';
import { HomeComponent } from './home/home.component';
import { AdminCheckService } from './security/admin-check.service';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardDirective } from './dashboard/dashboard.directive';

export function tokenGetter() {
  return localStorage.getItem('bearerToken');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TasksListComponent,
    TaskItemComponent,
    AuthComponent,
    DashboardComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    TaskDetailComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    HomeComponent,
    DashboardDirective,

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
  providers: [SecurityService, AuthGuard, AdminCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
