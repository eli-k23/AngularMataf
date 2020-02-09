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
  imdb: object | null = null;
  sub: Subscription;
  sub2: Subscription;

  constructor(private movieDB: MovieDBService) {}
  ngOnInit(): void {
    this.sub = this.movieDB.getMovie().subscribe(x => (this.movie = x));
    this.sub2 = this.movieDB.getSelectedMovie().subscribe(x => {
      this.imdb = x;
      console.log(this.imdb);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  // async indexChange(index: number) {
  //   console.log("222");
  //   this.Movie = await this.movieDB.getByID(index);
  // }
}
