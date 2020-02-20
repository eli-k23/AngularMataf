import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GenderListComponent } from "./components/gender-list/gender-list.component";
import { SongsByGenderComponent } from "./components/songs-by-gender/songs-by-gender.component";
import { SongListComponent } from "./components/song-list/song-list.component";
import { SongLyricComponent } from "./components/song-lyric/song-lyric.component";

const routes: Routes = [
  { path: "", redirectTo: "songs", pathMatch: "full" },
  { path: "genders", component: GenderListComponent },
  { path: "genders/:gender", component: SongsByGenderComponent },
  { path: "songs", component: SongListComponent },
  { path: "songs/:title", component: SongLyricComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
