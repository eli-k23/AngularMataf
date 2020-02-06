import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieDetailesComponent } from "./components/movie-detailes/movie-detailes.component";
import { MovieDBService } from "./services/movie-db.service";
import { Class1Component } from "./components/class1/class1.component";
import { Class2Component } from "./components/class2/class2.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailesComponent,
    Class1Component,
    Class2Component
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [MovieDBService],
  bootstrap: [AppComponent]
})
export class AppModule {}
