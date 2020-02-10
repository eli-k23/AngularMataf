import { Injectable, OnInit } from "@angular/core";
import { Movie } from "../models/movie";
import { BehaviorSubject, Observable } from "rxjs";
import { Search } from "../models/model";

@Injectable({
  providedIn: "root"
})
export class StateService implements OnInit {
  private selectedMovie: Search = null;
  private selectedMovie$ = new BehaviorSubject<Search>(this.selectedMovie);

  ngOnInit(): void {}

  getSelected(): Observable<Search> {
    return this.selectedMovie$.asObservable();
  }

  setSelectedMovie(newMovie: Search) {
    this.selectedMovie = newMovie;
    this.selectedMovie$.next(this.selectedMovie);
  }
}
