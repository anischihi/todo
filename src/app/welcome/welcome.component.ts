import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})




export class WelcomeComponent implements OnInit {
 message: string = "Hello This is a String";
 name: string; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.name = this.route.snapshot.params['name'];
  }

}
