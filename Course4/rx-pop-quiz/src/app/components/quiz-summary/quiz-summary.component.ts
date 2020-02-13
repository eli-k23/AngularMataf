import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { StateService } from "src/app/services/state.service";
import { Observable, combineLatest } from "rxjs";
import { map } from "rxjs/operators";

import { PopQuiz } from "src/app/models/popQuiz";

@Component({
  selector: "app-quiz-summary",
  templateUrl: "./quiz-summary.component.html",
  styleUrls: ["./quiz-summary.component.css"]
})
export class QuizSummaryComponent implements OnInit {
  userAnswers$: Observable<PopQuiz[]>;

  constructor(private data: DataService, private state: StateService) {}

  ngOnInit() {
    this.userAnswers$ = this.state.getCompletedQuestions();
  }
}
