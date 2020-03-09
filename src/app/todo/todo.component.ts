import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  todoId: number;
  username: string

  constructor(private todoDataService: TodoDataService,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.username =sessionStorage.getItem('authenticatedUser');
    this.todoId = this.route.snapshot.params['id']
    this.todo = new Todo(1,'','',false,new Date)
    this.todoDataService.retrieveTodo(this.todoId,this.username).subscribe(
      response => {
        this.todo =response
        console.log(this.todo.description)
      }

    )
  }

  saveTodo(){
    console.log("save todo")
  }

}
