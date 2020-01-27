import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "american-q";
  question: string = "best soccer team in the world? ";
  answers: { code: number; desc: string }[] = [
    { code: 1, desc: "Maccabi tel aviv" },
    { code: 2, desc: "M.Haifa" },
    { code: 3, desc: "HTA" },
    { code: 4, desc: "Beitar" }
  ];

  selectedAnswer: number = 0;
  correctAnswer: number = 1;
  userClicked: boolean = false;

  constructor() {
    this.setQ();
  }

  setQ() {
    this.answers.push({ code: 5, desc: "Others" });
  }

  setAnswer(value: number) {
    console.log("in function");
    if (!this.userClicked) {
      this.selectedAnswer = value;
      this.userClicked = true;
    }
  }
}
