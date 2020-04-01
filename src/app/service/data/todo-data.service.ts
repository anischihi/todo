import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string){
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`)
  }

  retrieveTodo(id: number, username: string){
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`)
  }


  deleteTodo(id: number, username: string){
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(id: number, username: string, todo){
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`,
    todo)
  }
  createTodo(username: string, todo){
    return this.http.post(`${JPA_API_URL}/users/${username}/todos/`,
    todo)
  }
}

