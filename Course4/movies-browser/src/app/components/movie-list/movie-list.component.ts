import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/serrvices/data.service";
import { StateService } from "src/app/serrvices/state.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Movie } from "src/app/models/movie";
import { Search } from "src/app/models/model";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: Search[];
  selectedMovie$: Observable<Search>;

  constructor(
    private dataService: DataService,
    private stateService: StateService
  ) {}

  async ngOnInit() {
    this.movies = await this.dataService.getAll();
    this.selectedMovie$ = this.stateService.getSelected();
    console.log(this.movies);
  }

  selectMovie(movie: Search) {
    console.log(movie);
    this.stateService.setSelectedMovie(movie);
  }
}
