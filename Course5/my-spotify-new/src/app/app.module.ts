import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongLyricComponent } from './components/song-lyric/song-lyric.component';
import { GenderListComponent } from './components/gender-list/gender-list.component';
import { SongsByGenderComponent } from './components/songs-by-gender/songs-by-gender.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongLyricComponent,
    GenderListComponent,
    SongsByGenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
