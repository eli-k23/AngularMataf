import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-gender-list",
  templateUrl: "./gender-list.component.html",
  styleUrls: ["./gender-list.component.css"]
})
export class GenderListComponent implements OnInit {
  songGenders: String[] = [];
  constructor(private data: DataService, private route: Router) {}

  async ngOnInit() {
    this.songGenders = await this.data.getGenders();
  }

  showSongByGenders(gender: string) {
    console.log("clicked");
    this.route.navigate(["genders", gender]);
  }
}
