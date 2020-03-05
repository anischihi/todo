import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'; 
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})




export class WelcomeComponent implements OnInit {
 message: string = "Hello This is a String";
 name: string ="AnisChihi"; 
 responseMessage: string;
 errorMessage: string;

  constructor(private route: ActivatedRoute, private welcomeService: WelcomeDataService) { }

  ngOnInit(){
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.welcomeService.executeHelloWorldService());
    this.welcomeService.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response) ,
      error => this.handleErrorResponse(error));

  }

  getWelcomeMessageWithPathVariable(){
    console.log(this.welcomeService.executeHelloWorldServiceWithPathVariable(this.name));
    this.welcomeService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response) ,
      error => this.handleErrorResponse(error));
  }


  handleErrorResponse(error: any): void {
    this.errorMessage = error.error.message;
  }

  handleSuccessfulResponse(response: any): void {
    this.responseMessage = response.message;
    console.log(response.message);
  }

}
