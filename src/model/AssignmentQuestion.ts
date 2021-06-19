import {Question, Answer} from '../types';
import {AssignmentQuestionAnswer} from './AssignmentQuestionAnswer';

class AssignmentQuestion {
  questionIndex: number;
  question: Question;
  answers: AssignmentQuestionAnswer[];
  selectedAnswerIndex: number;

  constructor(questionIndex: number, question: Question) {
    this.questionIndex = questionIndex;
    this.question = question;
    this.answers = this.initAnswers(question);
    this.selectedAnswerIndex = null;
  }

  initAnswers(question: Question): AssignmentQuestionAnswer[] {
    let answers = [];

    for (let i = 0; i < question.answers.length; i++) {
      let assignmentAnswer = new AssignmentQuestionAnswer(
        i,
        this.question.answers[i]
      );
      answers.push(assignmentAnswer);
    }

    return answers;
  }

  setSelectedAnswer(selectedAnswerIndex: number) {
    this.selectedAnswerIndex = selectedAnswerIndex;
  }

  getComponentFormat(submitted: boolean) {
    let answers = [];

    for (let i = 0; i < this.answers.length; i++) {
      answers.push(
        this.answers[i].getComponentFormat(this.selectedAnswerIndex, submitted)
      );
    }

    return {
      id: this.question.id,
      assignmentIndex: this.questionIndex,
      body: this.question.body,
      bodyFormat: this.question.bodyFormat,
      answers: answers
    };
  }

  isCorrect() {
    if (this.selectedAnswerIndex != null) {
      return this.question.answers[this.selectedAnswerIndex].correct;
    }
    return false;
  }
}

export {AssignmentQuestion};
