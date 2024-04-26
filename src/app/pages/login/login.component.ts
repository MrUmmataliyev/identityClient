import { AuthService } from './../../services/auth.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
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
say!:string[];
title = 'identity-cient';

  constructor(private readonly translocoService: TranslocoService){
    this.translocoService.translate('title')
    this.translocoService.translate('form.firstName')
  }

  public languagesList: 
    Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>> = [
    {
      imgUrl: '/assets/images/English.png',
      code: 'en',
      name: 'English',
      shorthand: 'ENG',
    },
    {
      imgUrl: '/assets/images/russia.png',
      code: 'ru',
      name: 'Russian',
      shorthand: 'RU',
    },
    {
      imgUrl: '/assets/images/uzbekistan.png',
      code: 'uz',
      name: 'Uzbekistan',
      shorthand: 'UZB',
    },
  ];
  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    languageCode === 'fl'
      ? (document.body.style.direction = 'rtl')
      : (document.body.style.direction = 'ltr');
  }
login(){
  this.authService.login(this.form.value).subscribe(
    {
      next: (response)=>{
        this.decodedToken = jwtDecode(localStorage.getItem(this.tokenKey)!.toString()!)
        
          
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
  });
  this.decodedToken = jwtDecode(localStorage.getItem(this.tokenKey)!)
  console.log('decoded token');
  console.log(this.decodedToken);
  console.log('data kelyabdi');
    console.log(Date.now());

  if(this.decodedToken.exp * 1000 < Date.now()){
    this.router.navigate(['/register'])
  }
}
}
