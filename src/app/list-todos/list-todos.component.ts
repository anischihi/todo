import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


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


  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void { 
    this.refreshTodos()
   }


  readTodosFrom(response: Todo[]): void {
    this.todos = response;
  }

  deleteTodoById(id: number,username: string){
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
  updateTodoById(id: number,username: string){
    this.router.navigate(['todos',id])
    }

}
