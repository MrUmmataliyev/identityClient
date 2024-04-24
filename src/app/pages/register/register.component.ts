import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  hide=true;
  form!:FormGroup;
  fb = inject(FormBuilder);
  authService=inject(AuthService)
  decodedToken: any | null;
  tokenKey = 'token'
  roles: string[] = [];
  say!:string[];
  regist(){
    this.authService.register(this.form.value).subscribe(
      {
        next: (response)=>{
          
            

          
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
