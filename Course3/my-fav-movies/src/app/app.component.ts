import { Component } from "@angular/core";
import { Movie } from "./models/movie";
import { MovieDBService } from "./services/movie-db.service";
import {
  Observable,
  interval,
  ObservedValueOf,
  Observer,
  Subject,
  BehaviorSubject
} from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Movies: Movie[] = [];

  title = "my-fav-movies";

  // createIntevalObservable(): Observable<number> {
  //   return interval(1000);
  // }

  go() {
    let observable = this.CreatSubject();
    let observer1: Observer<number> = {
      next(value: Number) {
        console.log("observer 1 , next " + value);
      },
      error(err) {
        console.log("observable 1 , error");
      },
      complete() {
        console.log("observable 1 , complete");
      }
    };

    let observer2: Observer<number> = {
      next(value: Number) {
        console.log("observer 2 , next " + value);
      },
      error(err) {
        console.log("observable 2 , error");
      },
      complete() {
        console.log("observable 2 , complete");
      }
    };
    observable.subscribe(observer1);
    setTimeout(() => observable.subscribe(observer2), 1500);
  }

  CreatSubject(): Observable<number> {
    // let s = new Subject<number>();
    let s = new BehaviorSubject<number>(42);
    //s.next(42);
    setTimeout(() => s.next(30), 1000);
    setTimeout(() => s.next(40), 2000);
    setTimeout(() => s.next(50), 3000);
    setTimeout(() => s.next(60), 4000);
    setTimeout(() => s.next(70), 5000);

    return s;
  }

  constructor(private movieDB: MovieDBService) {}
}
