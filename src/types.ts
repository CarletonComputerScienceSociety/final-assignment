export interface Answer {
  letter: string;
  body: string;
  bodyFormat: string;
  correct: boolean;
}

export interface Question {
  id: number;
  body: string;
  bodyFormat: string;
  answers: Answer[];
}
