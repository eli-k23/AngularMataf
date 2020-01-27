import { Component, OnInit, Input } from "@angular/core";
import { Question } from "src/app/models/question/question";

@Component({
  selector: "app-quiz-over",
  templateUrl: "./quiz-over.component.html",
  styleUrls: ["./quiz-over.component.css"]
})
export class QuizOverComponent implements OnInit {
  @Input()
  allQuiz: Question[] = [];

  finalScore: number = 0;

  ngOnInit() {
    this.finalScore =
      (this.allQuiz.filter(x => x.userAnswer === x.correctAnswer).length /
        this.allQuiz.length) *
      100;
  }
}
