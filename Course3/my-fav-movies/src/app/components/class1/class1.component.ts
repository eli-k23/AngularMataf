import { Component, OnInit } from "@angular/core";
import { CounterService } from "src/app/services/counter.service";

@Component({
  selector: "app-class1",
  templateUrl: "./class1.component.html",
  styleUrls: ["./class1.component.css"]
})
export class Class1Component implements OnInit {
  constructor(private counter: CounterService) {}

  inc() {
    this.counter.increase();
  }

  dec() {
    this.counter.decrease();
  }
  ngOnInit() {}
}
