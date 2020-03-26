import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { utf8Encode } from '@angular/compiler/src/util';
import { API_URL, AUTHENTICATED_USER, TOKEN } from '../app.constants';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  executeBasicAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let authHeader = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers: authHeader }).pipe(map(
      data=>{
        sessionStorage.setItem(AUTHENTICATED_USER,username);
        sessionStorage.setItem(TOKEN,basicAuthHeaderString);
        return data;
      }
    ))
  }

  executeJwtAuthenticationService(username: string, password: string) {

    return this.http.post<any>(`${API_URL}/authenticate`,{
      username: username,
      password:password
    }).pipe(map(
      response=>{
        sessionStorage.setItem(AUTHENTICATED_USER,username);
        sessionStorage.setItem(TOKEN,`Bearer ${response.token}`);
        return response;
      }
    ))
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN);
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}


export class AuthenticationBean {
  constructor(
    public message: string
  ) { }

}
