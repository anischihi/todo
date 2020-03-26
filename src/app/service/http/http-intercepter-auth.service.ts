import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../authentication-service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let jwtAuthHeaderString = this.authenticationService.getAuthenticatedToken();
    let username = this.authenticationService.getAuthenticatedUser();

    if (jwtAuthHeaderString && username) {

      request = request.clone({
        setHeaders: {
          Authorization: jwtAuthHeaderString
        }
      })
    }
      return next.handle(request);
  }


}
