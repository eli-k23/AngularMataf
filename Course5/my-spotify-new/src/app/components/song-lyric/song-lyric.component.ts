import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Song } from "src/app/core/models/song";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-song-lyric",
  templateUrl: "./song-lyric.component.html",
  styleUrls: ["./song-lyric.component.css"]
})
export class SongLyricComponent implements OnInit {
  selectedSong$: Observable<Song>;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.selectedSong$ = this.route.params.pipe(
      map(prm => prm["title"]),
      switchMap(ord => this.data.getSongLyric(ord))
    );
  }
}
