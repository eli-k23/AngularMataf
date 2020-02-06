import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieDBService } from "src/app/services/movie-db.service";
import { Movie } from "src/app/models/movie";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movie-detailes",
  templateUrl: "./movie-detailes.component.html",
  styleUrls: ["./movie-detailes.component.css"]
})
export class MovieDetailesComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  sub: Subscription;

  constructor(private movieDB: MovieDBService) {}
  ngOnInit(): void {
    this.sub = this.movieDB.getMovie().subscribe(x => (this.movie = x));
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // async indexChange(index: number) {
  //   console.log("222");
  //   this.Movie = await this.movieDB.getByID(index);
  // }
}
