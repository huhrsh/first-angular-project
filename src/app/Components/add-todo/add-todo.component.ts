import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title:string=''
  description:string=''
  @Output() addTodo:EventEmitter<Todo>=new EventEmitter()

  submitForm(){
    if(this.title=='' || this.description==''){
      alert('Please fill all the fields');
      return;
    }
    const todo=new Todo(this.title, this.description, false)
    this.addTodo.emit(todo)
    this.title=""
    this.description=""
  }
}
