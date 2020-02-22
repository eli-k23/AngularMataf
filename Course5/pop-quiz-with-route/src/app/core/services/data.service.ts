import { Injectable } from "@angular/core";
import { Question } from "../model/question";
import { ALL_QUESTION } from "../model/all-questions";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  // async getAllQuestions(): Promise<Question[]> {
  //   await this.delay(1000);
  //   return ALL_QUESTION;
  // }

  async getQuestionByIndex(index: number): Promise<Question | null> {
    await this.delay(1000);
    if (ALL_QUESTION.length <= index) return null;
    return ALL_QUESTION[index];
  }

  async isLastIndex(currIndex: number): Promise<boolean> {
    await this.delay(2000);
    return ALL_QUESTION.length === currIndex;
  }
}
