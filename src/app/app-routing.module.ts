import { AdminCheckService } from './Security/admin-check.service';
import { HomeComponent } from './home/home-page.component';
import { LoginComponent } from './auth/login/login-page.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Security/auth.guard';
import { UserDetailComponent } from './users/users-detail-page/user-detail-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'users',
    component: UsersComponent,
    canActivate: [AdminCheckService]},
  { path: 'login',
    component: LoginComponent},

  { path: 'detail/:id', component: UserDetailComponent, canActivate: [AuthGuard , AdminCheckService] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
