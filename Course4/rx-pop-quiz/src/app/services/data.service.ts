import { Injectable } from "@angular/core";
import { PopQuiz } from "../models/popQuiz";
import { ALL_QUESTIONS } from "../models/allQuiz";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getAllQuestion(): Promise<PopQuiz[]> {
    await this.delay(500);
    const questions = [...ALL_QUESTIONS];

    return questions;
  }

  async getCurrentQuestion(index: number): Promise<PopQuiz> {
    await this.delay(500);
    const questions = [...ALL_QUESTIONS];
    return questions.length === index ? null : questions[index];
  }
}
