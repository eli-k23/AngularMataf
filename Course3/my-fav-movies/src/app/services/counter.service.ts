import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject(this.value);

  getValue(): Observable<number> {
    //return this.value$ as Observable<number>; // not good , user can cast
    return this.value$.asObservable(); // much better , user cannot changen nothings
  }

  increase() {
    this.value$.next(++this.value);
  }

  decrease() {
    this.value$.next(--this.value);
  }
  constructor() {}
}
