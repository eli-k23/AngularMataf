import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "fun-with-promises";
  createPromise(): Promise<number> {
    let p = new Promise<number>((resolve, reject) => {
      console.log("hello promise");
      setTimeout(() => resolve(42), 3000);
    });
    return p;
  }

  go() {
    let p = this.createPromise();
    p.then(res => console.log("res" + res)).catch(err =>
      console.log("err" + err)
    );
  }
}
