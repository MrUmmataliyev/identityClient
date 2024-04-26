import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { provideRouter, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersComponent } from './admin/users/users.component';
import { StudentsComponent } from './admin/students/students.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { TranslocoRootModule } from './transloco-root.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterLink,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
