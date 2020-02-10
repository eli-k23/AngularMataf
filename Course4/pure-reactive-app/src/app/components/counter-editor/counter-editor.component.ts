import { Component, OnInit } from "@angular/core";
import { CounterService } from "src/app/services/counter.service";

@Component({
  selector: "app-counter-editor",
  templateUrl: "./counter-editor.component.html",
  styleUrls: ["./counter-editor.component.css"]
})
export class CounterEditorComponent implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    // use this instead of ctor
  }

  inc() {
    this.counterService.increment();
  }

  dec() {
    this.counterService.decrement();
  }
}
