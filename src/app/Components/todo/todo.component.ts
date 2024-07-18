import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  @Input() todo!:Todo;
  @Output() changeTodoStatus: EventEmitter<Todo>=new EventEmitter()
  todoClicked(todo:Todo){
    // console.log(todo);
    this.changeTodoStatus.emit(todo)
  }

  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter()
  deleteTodoClicked(todo:Todo){
    this.deleteTodo.emit(todo)
  }

}
