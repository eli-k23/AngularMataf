import { Injectable } from "@angular/core";
import { ALL_SONGS } from "../models/all-songs";
import { Song } from "../models/song";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getAllSongs(): Promise<string[]> {
    await this.delay(1000);
    return ALL_SONGS.map(m => m.title);
  }

  async getSongLyric(title: string): Promise<Song> {
    await this.delay(1000);
    return ALL_SONGS.find(m => m.title === title);
  }

  async getGenders(): Promise<String[]> {
    await this.delay(1000);
    let allGenders: string[] = [];
    ALL_SONGS.forEach(element => {
      element.genders.forEach(item => {
        if (!allGenders.find(x => x == item)) allGenders.push(item);
      });
    });
    return allGenders;
  }

  async getSongsByGender(gender: String): Promise<String[]> {
    let allSongByGender: String[] = [];
    await this.delay(1000);
    allSongByGender = ALL_SONGS.filter(x =>
      x.genders.find(y => y === gender)
    ).map(x => x.title);
    return allSongByGender;
  }
}
