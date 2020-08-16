import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getAllTodoList(): Promise<TodoList[]> {
    await this.delay(1500);
    return ALL_TODO_LIST;
  }

  async getAllTodoItems(): Promise<TodoItem[]> {
    await this.delay(1500);
    return ALL_TODO_ITEMS;
  }
}
