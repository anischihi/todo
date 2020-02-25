import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = 'Wrong Credentials';
  invalidLogin: boolean = false;

  constructor(private router: Router, private authenticationService: HardCodedAuthenticationService) { }

  ngOnInit(): void { }

  handleLogin() {
    //console.log(this.username)
    if (this.authenticationService.authenticate(this.username,this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['/welcome',this.username])
    }
    else this.invalidLogin = true;

  }

}
