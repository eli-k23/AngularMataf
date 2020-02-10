import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { StateService } from "./services/state.service";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { PopQuiz } from "./models/popQuiz";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "rx-pop-quiz";

  currentQuestionIndex$: Observable<number>;
  questions: PopQuiz[] = [];
  question$: Observable<PopQuiz>;
  userAnswers$: Observable<number[]>;

  constructor(private data: DataService, private state: StateService) {}

  async getQuestionData(index: number): Promise<PopQuiz> {
    let item = this.data.getCurrentQuestion(index);
    return item;
  }

  async ngOnInit() {
    this.questions = await this.data.getAllQuestion();
    this.question$ = this.state
      .getCurrtQuestion()
      .pipe(switchMap(index => this.data.getCurrentQuestion(index)));

    this.userAnswers$ = this.state.getUserAnswers();
  }

  setUserAnswer(userAnswer: number) {
    this.state.setUserAnswer(userAnswer);
    this.state.setNextQuestion();
  }
}
