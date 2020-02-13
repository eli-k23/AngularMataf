import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizPresenterComponent } from './components/quiz-presenter/quiz-presenter.component';
import { QuizEndComponent } from './components/quiz-end/quiz-end.component';
import { QuizSummaryComponent } from './components/quiz-summary/quiz-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizPresenterComponent,
    QuizEndComponent,
    QuizSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
