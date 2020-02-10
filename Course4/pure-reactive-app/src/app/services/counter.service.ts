import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject<number>(this.value);

  getValue(): Observable<number> {
    return this.value$.asObservable(); // not use this.value$ becoze it can be cast by user
    // Operator - takes 1or more observable and return
  }

  increment() {
    this.value++;
    this.value$.next(this.value); // notify all observers
  }

  decrement() {
    this.value--;
    this.value$.next(this.value); // notify all observers
  }
}
