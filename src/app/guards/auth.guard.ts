import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


var userRouter  = false;
var adminRouter  = true;
var tokenKey = 'token';




export const loginGuard: CanActivateFn = (route, state) => {
  console.log('route keldi');
  console.log(route);

  console.log('state keldi');
  console.log(state);

 

  return true;
};

export const registerGuard: CanActivateFn = (route, state) => {
  // logic
  return true;
};

export const usersGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  

 if(localStorage.getItem(tokenKey) != null) {
  const tokenDecoded: any = jwtDecode(localStorage.getItem(tokenKey)!)

  // console.log('users dan kelyabdi');
  // console.log(tokenDecoded.role);
  const data = tokenDecoded.role;
  // console.log(tokenDecoded);

    const element = data;
    if(element == 'Admin') {
      console.log('usersga navigate');
      router.navigateByUrl('/login')
      return true
    } else if(element == 'Student') {
      console.log('student profilega navigate');
      router.navigateByUrl('/student-profile')
      return true
    }
  
 }
  
  console.log('navigate boldi');
  router.navigate(['/login'])
  return false;

};

export const studentProfileGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  

  if(localStorage.getItem(tokenKey) != null) {
   const tokenDecoded: any = jwtDecode(localStorage.getItem(tokenKey)!)
 
   // console.log('users dan kelyabdi');
   // console.log(tokenDecoded.role);
   const data = tokenDecoded.role;
   // console.log(tokenDecoded);
 
     const element = data;
     if(element == 'Admin') {
       console.log('usersga navigate');
       router.navigateByUrl('/login')
       return true
     } else if(element == 'Student') {
       console.log('student profilega navigate');
       router.navigateByUrl('/student-profile')
       return true
     }
   
  }
   
   console.log('navigate boldi');
   router.navigate(['/login'])
   return false;
};