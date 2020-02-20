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

  constructor(
    private state: StateService,
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.question$ = this.route.params.pipe(
      map(prm => Number(prm["index"])),
      switchMap(index => this.data.getQuestionByIndex(index))
    );
  }

  selectAnswer(currentQuestion: Question, userAnswer: number) {
    currentQuestion.userAnswer = userAnswer;
    this.state.saveNextQuestion(currentQuestion);
    let currIndex: number = Number(this.route.snapshot.params["index"]) + 1;
    this.router.navigate([currIndex]);
  }
}
