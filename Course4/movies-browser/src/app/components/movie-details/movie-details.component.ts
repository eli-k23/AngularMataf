import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import { Movie } from "src/app/models/movie";
import { DataService } from "src/app/serrvices/data.service";
import { StateService } from "src/app/serrvices/state.service";
import { MovieDesc } from "src/app/models/model";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie$: Observable<MovieDesc>;

  constructor(
    private dataService: DataService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    console.log("in");
    this.selectedMovie$ = this.stateService
      .getSelected()
      .pipe(switchMap(x => this.dataService.getDetails(x)));

    console.log(this.selectedMovie$);
  }
}
