import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Question } from "src/app/core/model/question";
import { map, switchMap } from "rxjs/operators";
import { StateService } from "src/app/core/services/state.service";

@Component({
  selector: "app-quiz-display",
  templateUrl: "./quiz-display.component.html",
  styleUrls: ["./quiz-display.component.css"]
})
export class QuizDisplayComponent implements OnInit {
  question$: Observable<Question>;
  isLastQuestion$: Observable<boolean>;
  userAnswer: number | null = null;

  constructor(
    private state: StateService,
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    let index$: Observable<number> = this.route.params.pipe(
      map(prm => Number(prm["index"]))
    );

    this.question$ = index$.pipe(
      switchMap(index => this.data.getQuestionByIndex(index))
    );

    this.isLastQuestion$ = index$.pipe(
      switchMap(currIndex => this.data.isLastIndex(currIndex))
    );
  }

  selectAnswer(currentQuestion: Question, userAnswer: number) {
    if (currentQuestion.userAnswer === null) {
      currentQuestion.userAnswer = userAnswer;
      this.state.saveNextQuestion(currentQuestion);
      let currIndex: number = Number(this.route.snapshot.params["index"]) + 1;

      this.router.navigate([currIndex]);
    }
  }
}
