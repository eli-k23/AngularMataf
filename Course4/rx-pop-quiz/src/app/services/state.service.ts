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

  private isBusy: boolean[] = [];
  private isBusy$ = new BehaviorSubject<boolean[]>(this.isBusy);

  // setUserAnswer(answer: number) {
  //   this.userAnswers.push(answer);
  //   this.userAnswers$.next(this.userAnswers);
  // }

  // getUserAnswers(): Observable<number[]> {
  //   return this.userAnswers$.asObservable();
  // }

  private completedQuestions: PopQuiz[] = [];
  private completedQuestions$ = new BehaviorSubject<PopQuiz[]>(
    this.completedQuestions
  );

  setNextCompletedQuestions(answer: PopQuiz) {
    this.completedQuestions.push(answer);
    this.completedQuestions$.next(this.completedQuestions);
  }

  getCompletedQuestions(): Observable<PopQuiz[]> {
    return this.completedQuestions$.asObservable();
  }
}
