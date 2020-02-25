import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }
  authenticate(username: string,password: string){
    if (username === 'anischihi' && password === 'pass') {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
    else return false;
  }

  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }
}
