import { Component } from '@angular/core';

// One Module can contain many classes
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}<h1>',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
