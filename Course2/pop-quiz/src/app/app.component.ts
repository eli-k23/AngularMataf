import { Component } from "@angular/core";
import { Question } from "./models/question/question";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pop-quiz";

  currentQuiz: Question = null;
  quizData: Question[] = [];
  indexQuiz: number = 0;

  constructor() {
    this.setQuizData();
  }

  setQuizData() {
    this.quizData.push(
      new Question("how much is 3+3 ?", ["5", "6", "7", "33"], 1, null)
    );
    this.quizData.push(
      new Question("how much is 4+3 ?", ["5", "6", "7", "33"], 2, null)
    );
    this.quizData.push(
      new Question("how much is 30+3 ?", ["5", "6", "7", "33"], 3, null)
    );
    this.quizData.push(
      new Question("how much is '30'+3 ?", ["303", "30", "7", "33"], 0, null)
    );
    this.quizData.push(
      new Question(
        "who is the champion ?",
        ["M.T.A", "HTA", "M.H.", "BJR f.c.", "H.B.S"],
        0,
        null
      )
    );

    this.currentQuiz = this.quizData[this.indexQuiz];
  }

  saveUserAnswer(userAnswer: number) {
    this.quizData[this.indexQuiz].userAnswer = userAnswer;
    this.indexQuiz += 1;
    if (this.indexQuiz < this.quizData.length)
      this.currentQuiz = this.quizData[this.indexQuiz];
    else this.currentQuiz = null;
  }
}
