import { Injectable } from "@angular/core";
import { PopQuiz } from "../models/popQuiz";
import { ALL_QUESTIONS } from "../models/allQuiz";

@Injectable({
  providedIn: "root"
})
export class DataService {
  questions: PopQuiz[] = [];

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getAllQuestion(): Promise<PopQuiz[]> {
    await this.delay(500);
    if (this.questions.length === 0) this.questions = [...ALL_QUESTIONS];
    return this.questions;
  }

  async getCurrentQuestion(index: number): Promise<PopQuiz> {
    await this.delay(500);
    return this.questions.length === index ? null : this.questions[index];
  }
}
