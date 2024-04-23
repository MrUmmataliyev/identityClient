import { AuthService } from './../../services/auth.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

matSnackBar = inject(MatSnackBar);
router = inject(Router);
hide=true;
form!:FormGroup;
fb = inject(FormBuilder);
authService=inject(AuthService)
decodedToken: any | null;
tokenKey = 'token'
roles: string[] = [];
login(){
  this.authService.login(this.form.value).subscribe(
    {
      next: (response)=>{
        this.decodedToken = jwtDecode(localStorage.getItem(this.tokenKey)!)


          if(this.decodedToken.role=='Admin'){
            console.log("EEEEEEE")
            this.router.navigate(['/users'])
          }
          else if(this.decodedToken.role=='Student'){
            console.log("dsfdsfsdfsd")
            this.router.navigate(['/student-profile'])
          }
        
        this.matSnackBar.open(response.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center'
        })
      },
      error: (err)=>{
        this.matSnackBar.open(err.error.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center'
        })
      }
    }
  )
}
ngOnInit(): void {
  this.form = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  })
}
}
