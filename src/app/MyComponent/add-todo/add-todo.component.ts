import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/ToDo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title !: string;
  desc !: string;
  
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter(); 

  onSubmit(){
    const todo = {
      sno : 8,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.title = "";
    this.desc = "";
    
    this.todoAdd.emit(todo);
  }

}
