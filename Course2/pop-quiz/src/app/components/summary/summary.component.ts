import { Component, OnInit, Input } from "@angular/core";
import { Question } from "src/app/models/question/question";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"]
})
export class SummaryComponent implements OnInit {
  @Input()
  allQuiz: Question[];

  filter(itemList: Question[]): Question[] {
    return itemList.filter(x => x.userAnswer !== null);
  }

  ngOnInit() {}
}
