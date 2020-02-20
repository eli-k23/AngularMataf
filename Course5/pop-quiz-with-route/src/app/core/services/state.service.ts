import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Question } from "../model/question";

@Injectable({
  providedIn: "root"
})
export class StateService {
  questionsAnswered: Question[] = [];
  questionsAnswered$ = new BehaviorSubject<Question[]>(this.questionsAnswered);

  saveNextQuestion(current: Question) {
    this.questionsAnswered.push(current);
    this.questionsAnswered$.next(this.questionsAnswered);
  }

  getAnsweredQuestions(): Observable<Question[]> {
    return this.questionsAnswered$.asObservable();
  }
}
