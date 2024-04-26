import { LoginResponse } from './../interfaces/login-response';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environmnet';
import { Router } from '@angular/router';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, map } from 'rxjs';
import { RegisterRequest } from '../interfaces/register-request';
import { RegisterResponse } from '../interfaces/register-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  tokenKey:string ='token';
  router = inject(Router)
  
  login(data: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}Users/Login`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          console.log("Keldi")
          console.log(response.token)
          localStorage.setItem(this.tokenKey, response.token)
        }
        this.router.navigate(['/register'])
        return response
      })
    );
  };
  register(data1:RegisterRequest): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.apiUrl+'Users/Regsiter', data1);
  }
  logout(){
    localStorage.setItem(this.tokenKey, '');
  }

  
  }

