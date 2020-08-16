import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DataService } from "./data.service";
import { map } from "rxjs/operators";

import { TodoList } from "../models/TodoList";
import { ALL_TODO_LIST } from "../models/TodoLists";
import { TodoItem } from "../models/TodoItem";
import { ALL_TODO_ITEMS } from "../models/TodoItems";

@Injectable({
  providedIn: "root"
})
export class StateService {
  private todoList: TodoList = null;
  private todoList$ = new BehaviorSubject<TodoList>(this.todoList);

  private todoItem: TodoItem = null;
  private todoItem$ = new BehaviorSubject<TodoItem>(this.todoItem);

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getTodoItem(id: number): Promise<TodoItem> {
    await this.delay(500);
    return ALL_TODO_ITEMS.find(x => x.id === id);
  }

  async getTodoList(id: number): Promise<TodoList> {
    await this.delay(500);
    return ALL_TODO_LIST.find(x => x.id === id);
  }
}
