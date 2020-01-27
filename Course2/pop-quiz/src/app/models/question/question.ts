export class Question {
  caption: string = "";
  answers: string[] = [];
  correctAnswer: number = 0;
  userAnswer: number | null = null;

  constructor(
    caption: string,
    answers: string[],
    correctAnswer: number,
    userAnswer: number | null
  ) {
    this.caption = caption;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }
}
