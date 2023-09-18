import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from 'src/app/ToDo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})

export class ToDosComponent {
  localItem !: string;
  todos!: Todo[];

  constructor() { 
    if(localStorage.getItem("todos") == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(localStorage.getItem("todos")!);
    }
  }

  // Delete Todo function
  deleteTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    // console.log(index);
  }
  
  // Add Todo function
  addTodo(todo: Todo) {
    console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }


}
