import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent} from './todos/todos.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'add-todo', component: TodoAddComponent},
  {path: 'edit-todo', component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
