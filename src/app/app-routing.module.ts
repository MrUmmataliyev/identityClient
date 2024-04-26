import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './admin/users/users.component';
import { StudentsComponent } from './admin/students/students.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { loginGuard, registerGuard, studentProfileGuard, usersGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'register', component: CreateUserComponent, canActivate: [registerGuard] },
  { path: 'users', component: UsersComponent, canActivate: [usersGuard] },
  { path: 'student-profile', component: StudentsComponent, canActivate: [studentProfileGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
