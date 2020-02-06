import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Movie } from "../models/movie";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieDBService {
  constructor(private http: HttpClient) {}

  movieDB: Movie[] = [];
  private _jsonURL = "http://www.omdbapi.com/?s=iron%20man&apikey=d2286d0d";

  private selectedMovie: Movie | null = null;
  private selectedMovie$ = new BehaviorSubject(this.selectedMovie);

  selectMovie(index: number) {
    this.selectedMovie$.next(this.movieDB[index]);
  }

  getMovie(): Observable<Movie | null> {
    //return this.value$ as Observable<number>; // not good , user can cast
    return this.selectedMovie$.asObservable(); // much better , user cannot changen nothings
  }

  private async createDB() {
    await this.getJSON().subscribe(data => {
      console.log(data);
      data.Search.map(item =>
        this.movieDB.push(new Movie(item.Title, item.imdbID, item.Poster))
      );
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  private delay(): Promise<void> {
    return new Promise<void>(res => setTimeout(res, 2000));
  }

  async getAll(): Promise<Movie[]> {
    this.delay();
    this.createDB();
    return this.movieDB;
  }

  async getByID(id: number): Promise<Movie> {
    this.delay();
    let p = this.movieDB[id];

    return p;
  }
}
