import { Component, OnInit, OnDestroy } from "@angular/core";
import { CounterService } from "src/app/services/counter.service";
import { Subscribable, Subscription, Observer, Observable } from "rxjs";

@Component({
  selector: "app-class2",
  templateUrl: "./class2.component.html",
  styleUrls: ["./class2.component.css"]
})
export class Class2Component implements OnInit, OnDestroy {
  value: number = 0;
  sub: Subscription;

  value$: Observable<number>;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.counter.getValue().subscribe(x => (this.value = x));
    // or
    this.value$ = this.counter.getValue();
  }

  constructor(private counter: CounterService) {}
}
