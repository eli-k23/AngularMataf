import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-songs-by-gender",
  templateUrl: "./songs-by-gender.component.html",
  styleUrls: ["./songs-by-gender.component.css"]
})
export class SongsByGenderComponent implements OnInit {
  selectedSongs$: Observable<String[]>;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.selectedSongs$ = this.route.params.pipe(
      map(prm => prm["gender"]),
      switchMap(ord => this.data.getSongsByGender(ord))
    );
  }
}
