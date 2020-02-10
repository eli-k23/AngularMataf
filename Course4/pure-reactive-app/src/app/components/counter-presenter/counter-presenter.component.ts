import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from "@angular/core";
import { CounterService } from "src/app/services/counter.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-counter-presenter",
  templateUrl: "./counter-presenter.component.html",
  styleUrls: ["./counter-presenter.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush // declare to improve running time
})
export class CounterPresenterComponent implements OnInit {
  value$: Observable<number>;
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.value$ = this.counterService.getValue();
  }
}
