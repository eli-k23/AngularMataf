import { Question } from "./question";

export const ALL_QUESTION: Question[] = [
  {
    caption: "how much is 2 + 2 ",
    answers: ["4", "5", "6", "3"],
    correctAnswer: 0,
    userAnswer: null
  },
  {
    caption: "how much is 3 + 3 ",
    answers: ["4", "5", "6", "3"],
    correctAnswer: 2,
    userAnswer: null
  },
  {
    caption: "how much is 2 + '2' ",
    answers: ["4", "2+'2'", "6", "22"],
    correctAnswer: 3,
    userAnswer: null
  },
  {
    caption: "how much is 5 - 2 ",
    answers: ["4", "5", "6", "3"],
    correctAnswer: 3,
    userAnswer: null
  },
  {
    caption: "how much is ' ' + 2 ",
    answers: ["2 ", " 2", "6", "3"],
    correctAnswer: 1,
    userAnswer: null
  }
];
