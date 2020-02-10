import { Injectable } from "@angular/core";
import { PopQuiz } from "../models/popQuiz";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StateService {
  constructor() {}

  private selectedQuestionIndex: number = 0;
  private selectedQuestionIndex$ = new BehaviorSubject<number>(
    this.selectedQuestionIndex
  );

  setNextQuestion() {
    this.selectedQuestionIndex++;
    this.selectedQuestionIndex$.next(this.selectedQuestionIndex);
  }

  getCurrtQuestion(): Observable<number> {
    return this.selectedQuestionIndex$.asObservable();
  }

  private userAnswers: number[] = [];
  private userAnswers$ = new BehaviorSubject<number[]>(this.userAnswers);

  setUserAnswer(answer: number) {
    this.userAnswers.push(answer);
    this.userAnswers$.next(this.userAnswers);
  }

  getUserAnswers(): Observable<number[]> {
    return this.userAnswers$.asObservable();
  }
}
