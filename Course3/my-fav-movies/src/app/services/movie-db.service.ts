import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Movie } from "../models/movie";
import { BehaviorSubject, Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieDBService {
  constructor(private http: HttpClient) {}

  movieDB: Movie[] = [];
  apikey: string = "d2286d0d";
  private _jsonURL =
    "http://www.omdbapi.com/?s=iron%20man&apikey=" + this.apikey;
  private _jsonInfoURL =
    "http://www.omdbapi.com/?plot=full&apikey=" + this.apikey + "&i=";

  private selectedMovie: Movie | null = null;
  private selectedMovie$ = new BehaviorSubject(this.selectedMovie);

  private selectedIMDB: object | null = null;
  private selectedIMDB$ = new BehaviorSubject(this.selectedIMDB);

  selectMovie(index: number) {
    this.selectedMovie$.next(this.movieDB[index]);
    this.getMovieFromDB(this.movieDB[index].destination);
    //this.selectedIMDB$.next()
  }

  async getMovieFromDB(imdb: string) {
    console.log(imdb);
    let value = await this.getJSONImdb(imdb).subscribe(data => {
      console.log(data);
      this.selectedIMDB$.next(data);
    });
  }

  getMovie(): Observable<Movie | null> {
    //return this.value$ as Observable<number>; // not good , user can cast
    return this.selectedMovie$.asObservable(); // much better , user cannot changen nothings
  }

  getSelectedMovie(): Observable<object | null> {
    return this.selectedIMDB$.asObservable();
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

  public getJSONImdb(imdb: string): Observable<any> {
    return this.http.get(this._jsonInfoURL + imdb);
  }

  private delay(): Promise<void> {
    return new Promise<void>(res => setTimeout(res, 2000));
  }

  async getAll(): Promise<Movie[]> {
    this.delay();
    this.createDB();
    return this.movieDB;
  }
}
