import { LoginResponse } from './../interfaces/login-response';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environmnet';
import { Router } from '@angular/router';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, map } from 'rxjs';
import { Register } from '../interfaces/registerDTO';
import { RegisterResponse } from '../interfaces/registerResponse';

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
          localStorage.setItem(this.tokenKey, response.token)
        }
        this.router.navigate(['/register'])
        return response
      })
    );
  }
  register(data:Register): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(`${this.apiUrl}Users/Register`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
           this.router.navigate(['/login'])
           
           return response;
        }
        this.router.navigate(['/register'])
        return response;
      })
    );
  }
}
