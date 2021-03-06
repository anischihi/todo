import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private authenticationService: HardCodedAuthenticationService) {

  }

  ngOnInit(): void {
  }

  isUserLoggedIn() {
    return this.authenticationService.isUserLoggedIn();
  }

}
