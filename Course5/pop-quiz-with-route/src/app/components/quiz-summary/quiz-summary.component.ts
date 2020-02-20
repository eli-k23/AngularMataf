import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "src/app/core/model/question";
import { DataService } from "src/app/core/services/data.service";
import { StateService } from "src/app/core/services/state.service";

@Component({
  selector: "app-quiz-summary",
  templateUrl: "./quiz-summary.component.html",
  styleUrls: ["./quiz-summary.component.css"]
})
export class QuizSummaryComponent implements OnInit {
  questionsAnswer$: Observable<Question[]>;
  constructor(private data: DataService, private state: StateService) {}

  async ngOnInit() {
    this.questionsAnswer$ = this.state.getAnsweredQuestions();
  }
}
