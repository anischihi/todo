import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { AuthenticationService } from '../service/authentication-service';


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

  constructor(private router: Router, private hardCodedAuthenticationService: HardCodedAuthenticationService,private authenticationService: AuthenticationService) { }

  ngOnInit(): void { }

  handleLogin() {
    //console.log(this.username)
    if (this.hardCodedAuthenticationService.authenticate(this.username,this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['/welcome',this.username])
    }
    else this.invalidLogin = true;

  }

  handleBasicAuthLogin(){

  this.authenticationService.executeBasicAuthenticationService(this.username,this.password).subscribe(
    data=>{
      console.log(data);
      this.invalidLogin=false;
      this.router.navigate(['/welcome',this.username]);
    },
    error =>{
      console.log(error);
      this.invalidLogin=true;
    }
  )
}

handleJwtAuthLogin(){

  this.authenticationService.executeJwtAuthenticationService(this.username,this.password).subscribe(
    data=>{
      this.invalidLogin=false;
      this.router.navigate(['/welcome',this.username]);
    },
    error =>{
      console.log(error);
      this.invalidLogin=true;
    }
  )
}

}
