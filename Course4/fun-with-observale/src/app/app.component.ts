import { Component } from "@angular/core";
import { Observable, from, interval } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "fun-with-observale";

  createObservable(): Observable<number> {
    return interval(1000);
    from([2, 3, 4, 5]);
  }

  go(): void {
    let ob = this.createObservable();

    ob = ob.pipe(
      map(x => x * 2),
      take(10)
    );

    ob.subscribe({
      next: x => console.log(x),
      error: err => console.log("error"),
      complete: () => console.log("complete")
    });
  }
}
