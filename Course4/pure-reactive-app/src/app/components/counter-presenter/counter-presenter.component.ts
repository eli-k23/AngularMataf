import { Component, OnInit, OnDestroy } from "@angular/core";
import { CounterService } from "src/app/services/counter.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-counter-presenter",
  templateUrl: "./counter-presenter.component.html",
  styleUrls: ["./counter-presenter.component.css"]
})
export class CounterPresenterComponent implements OnInit, OnDestroy {
  sub: Subscription;
  value: number;
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.sub = this.counterService.getValue().subscribe(x => (this.value = x));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
