import {Answer} from '../types';

class AssignmentQuestionAnswer {
  answerIndex;
  answer: Answer;

  constructor(answerIndex: number, answer: Answer) {
    this.answerIndex = answerIndex;
    this.answer = answer;
  }

  getComponentFormat(selectedQuestionAnswerIndex: number, submitted: boolean) {
    return {
      letter: this.answer.letter,
      body: this.answer.body,
      bodyForamt: this.answer.bodyFormat,
      assignmentIndex: this.answerIndex,
      state: this.getState(selectedQuestionAnswerIndex, submitted)
    };
  }

  getState(selectedQuestionAnswerIndex: number, submitted: boolean) {
    if (
      submitted &&
      this.answer.correct &&
      this.isSelected(selectedQuestionAnswerIndex)
    ) {
      return 'correct';
    } else if (
      submitted &&
      this.answer.correct &&
      !this.isSelected(selectedQuestionAnswerIndex)
    ) {
      return 'solution';
    } else if (
      submitted &&
      !this.answer.correct &&
      this.isSelected(selectedQuestionAnswerIndex)
    ) {
      return 'incorrect';
    } else if (this.isSelected(selectedQuestionAnswerIndex)) {
      return 'selected';
    }

    return 'unselected';
  }

  isSelected(selectedQuestionAnswerIndex: number) {
    return selectedQuestionAnswerIndex === this.answerIndex;
  }

  isCorrect(selectedQuestionAnswerIndex: number) {
    return this.answer.correct && this.isSelected(selectedQuestionAnswerIndex);
  }
}

export {AssignmentQuestionAnswer};
