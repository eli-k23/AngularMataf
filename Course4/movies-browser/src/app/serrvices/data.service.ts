import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";
import { Observable } from "rxjs/internal/Observable";
import { promise } from "protractor";
import { observable } from "rxjs";
import { Search, MovieDesc } from "../models/model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  apikey: string = "d2286d0d";
  private _jsonURL =
    "http://www.omdbapi.com/?s=iron%20man&apikey=" + this.apikey;
  private _jsonInfoURL =
    "http://www.omdbapi.com/?plot=full&apikey=" + this.apikey + "&i=";

  async getDetails(movie: Search): Promise<MovieDesc> {
    let item: MovieDesc;
    if (!movie) return;

    let url = this._jsonInfoURL + movie.imdbID;
    console.log(movie, url);

    item = (await this.http.get(url).toPromise()) as MovieDesc;

    return item;
  }

  async getAll(): Promise<Search[]> {
    let movieList = [];
    let res = await this.http.get(this._jsonURL).toPromise();
    return res.Search as Search[];
  }

  private getJSON(): Observable<object> {
    return this.http.get(this._jsonURL);
  }

  private getJSONImdb(imdb: string): Observable<object> {
    return this.http.get(this._jsonInfoURL + imdb);
  }
}
