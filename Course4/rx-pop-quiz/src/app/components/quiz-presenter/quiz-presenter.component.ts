import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { StateService } from "src/app/services/state.service";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { PopQuiz } from "src/app/models/popQuiz";

@Component({
  selector: "app-quiz-presenter",
  templateUrl: "./quiz-presenter.component.html",
  styleUrls: ["./quiz-presenter.component.css"]
})
export class QuizPresenterComponent implements OnInit {
  constructor(private data: DataService, private state: StateService) {}
  question$: Observable<PopQuiz>;
  isBusy: boolean = false;

  ngOnInit() {
    this.isBusy = true;
    this.question$ = this.state
      .getCurrtQuestion()
      .pipe(switchMap(index => this.data.getCurrentQuestion(index)));
    this.isBusy = false;
  }

  async setUserAnswer(question: PopQuiz, userAnswer: number) {
    this.isBusy = true;
    console.log(question, userAnswer);
    question.userAnswer = userAnswer;
    this.state.setNextCompletedQuestions(question);
    this.state.setNextQuestion();
    this.isBusy = false;
  }
}
