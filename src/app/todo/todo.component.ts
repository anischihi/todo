import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  viewUsername: string;
  viewId: number;

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.viewId = this.route.snapshot.params['id']
    this.viewUsername = sessionStorage.getItem('authenticatedUser');
    this.todo = Todo.getDummyTodo(this.viewId,this.viewUsername);
    if(this.viewId!=-1){
    this.retrieveTodoFromServer();
    }  
  }
  
  saveTodo(id: number, username: string, newTodo: Todo) {
    
    if(this.viewId!=-1){
      this.updateTodo(id, username, newTodo);
    }
    else{
      this.createTodo(username, newTodo);
    }
  }
  
   private createTodo(username: string, newTodo: Todo) {
    this.todoDataService.createTodo(username, newTodo).subscribe(response => {
      console.log(response);
      this.router.navigate(['todos']);
    });
  }
  
  private updateTodo(id: number, username: string, newTodo: Todo) {
    this.todoDataService.updateTodo(id, username, newTodo).subscribe(response => {
      console.log(response);
      this.router.navigate(['todos']);
    });
  }
  
    private retrieveTodoFromServer() {
      this.todoDataService.retrieveTodo(this.viewId, this.viewUsername).subscribe(response => {
        this.todo = response;
      });
    }
}
