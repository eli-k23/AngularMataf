import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Question } from "src/app/models/question/question";

@Component({
  selector: "app-question-presenter",
  templateUrl: "./question-presenter.component.html",
  styleUrls: ["./question-presenter.component.css"]
})
export class QuestionPresenterComponent implements OnInit {
  constructor() {}

  letters: string[] = ["A", "B", "C", "D"];

  @Input()
  quiz: Question;

  @Output()
  userAnsweredQuestion = new EventEmitter<number>();

  onSelect(index: number) {
    this.userAnsweredQuestion.emit(index);
  }
  ngOnInit() {}
}
