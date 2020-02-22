import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuizDisplayComponent } from "./components/quiz-display/quiz-display.component";
import { QuizEndComponent } from "./components/quiz-end/quiz-end.component";
import { QuizSummaryComponent } from "./components/quiz-summary/quiz-summary.component";
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizDisplayComponent,
    QuizEndComponent,
    QuizSummaryComponent,
    SpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
