import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './admin/users/users.component';
import { StudentsComponent } from './admin/students/students.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"users", component: UsersComponent},
  {path:"student-profile", component: StudentsComponent},
  {path:"register", component: CreateUserComponent},
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
