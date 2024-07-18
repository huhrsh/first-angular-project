import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoComponent } from "../todo/todo.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[]=[];
  constructor() {    
    if (typeof localStorage !== 'undefined' && localStorage.getItem('todoList')) {
      this.todos = JSON.parse(localStorage.getItem('todoList') || '[]');
    } else {
      // this.todos.push(new Todo('Revise JavaScript', 'Go through the documentation of JavaScript', false));
      // this.todos.push(new Todo('Learn TypeScript', 'Watch a short video on TypeScript', false));
      // this.todos.push(new Todo('Learn Angular', 'Create a small todo list using angular', false));
    }
  }

  deleteTodo(todo:Todo){
    const todoIndex=this.todos.indexOf(todo)
    this.todos.splice(todoIndex,1);
    // this.todos[todoIndex].completed=!this.todos[todoIndex].completed;
    localStorage.setItem('todoList', JSON.stringify(this.todos));

  }

  completeTodo(todo:Todo){
    const todoIndex=this.todos.indexOf(todo)
    this.todos[todoIndex].completed=!this.todos[todoIndex].completed;
    localStorage.setItem('todoList', JSON.stringify(this.todos));
  }

  createTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todos));
  }
}
