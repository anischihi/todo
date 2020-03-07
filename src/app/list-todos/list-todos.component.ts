import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public username: string,
    public done: boolean,
    public targetDate: Date 
  ){
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  name: string = "anis";
  infoMessage: string;


  constructor(private todoService: TodoDataService) { }

  ngOnInit(): void { 
    this.refreshTodos()
   }


  readTodosFrom(response: Todo[]): void {
    this.todos = response;
  }

  deleteToDoById(id: number,username: string){
    this.todoService.deleteTodo(id,username).subscribe(
      response=>{
        this.infoMessage=`Todo ${id} of ${username} was deleted successfully`;
        console.log(response);
        this.refreshTodos();
      }
      )
    }
  refreshTodos(){
    this.todoService.retrieveAllTodos(this.name).subscribe(
      response => this.readTodosFrom(response));
  }  

}
