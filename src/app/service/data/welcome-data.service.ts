import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  executeHelloWorldServiceWithPathVariable(name: string){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}


export class HelloWorldBean{
  
  constructor(public message: string){

  }
    
}

