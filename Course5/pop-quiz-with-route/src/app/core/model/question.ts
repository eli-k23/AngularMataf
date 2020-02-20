export interface Question {
  caption: string;
  answers: string[];
  correctAnswer: number;
  userAnswer: number | null;
}
