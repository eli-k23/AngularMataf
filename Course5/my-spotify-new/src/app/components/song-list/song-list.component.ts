import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/core/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-song-list",
  templateUrl: "./song-list.component.html",
  styleUrls: ["./song-list.component.css"]
})
export class SongListComponent implements OnInit {
  songTitles: String[] = [];
  constructor(private data: DataService, private route: Router) {}

  async ngOnInit() {
    this.songTitles = await this.data.getAllSongs();
  }

  showSongLyrics(title: string) {
    console.log("clicked");
    this.route.navigate(["songs", title]);
  }
}
