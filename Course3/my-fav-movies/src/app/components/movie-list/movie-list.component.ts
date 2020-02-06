import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Movie } from "src/app/models/movie";
import { MovieDBService } from "src/app/services/movie-db.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  Movies: Movie[] = [];
  async ngOnInit() {
    this.Movies = await this.movieDB.getAll();
    console.log(this.Movies);
  }

  constructor(private movieDB: MovieDBService) {}

  async setIndex(index: number) {
    this.movieDB.selectMovie(index);
    console.log("indexChanged");
  }
}
