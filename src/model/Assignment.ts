import {Question} from '../types';
import {AssignmentQuestion} from './AssignmentQuestion';
import {subscribe} from 'svelte/internal';

class Assignment {
  input: Question[];
  state: AssignmentQuestion[];
  submitted: boolean;
  subscribers: any[];

  constructor(assignment: Question[]) {
    this.input = assignment;
    this.state = this.initState(assignment);
    this.subscribers = [];
    this.submitted = false;
  }

  // initializes an AssignmentQuestion for each question present on the input
  initState(assignment: Question[]): AssignmentQuestion[] {
    let state = [];

    for (let i = 0; i < assignment.length; i++) {
      let assignmentQuestion = new AssignmentQuestion(i, this.input[i]);
      state.push(assignmentQuestion);
    }

    return state;
  }

  // subscribe is required for svelte stores
  subscribe(subscriber) {
    subscriber(this);
    this.subscribers.push(subscriber);
    return () => {};
  }

  // setter for updating submitted
  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  // notify subscribers of state change
  notify() {
    this.subscribers.forEach(subscriber => {
      subscriber(this);
    });
  }

  submit() {
    this.setSubmitted(true);
    this.notify();
  }

  // returns the object that should be based to the ui components
  getComponentFormat() {
    let questions = [];

    for (let i = 0; i < this.input.length; i++) {
      questions.push(this.state[i].getComponentFormat(this.submitted));
    }

    return {
      questions: questions
    };
  }

  setSelectedAnswer(questionIndex: number, selectedAnswerIndex: number) {
    this.state[questionIndex].setSelectedAnswer(selectedAnswerIndex);
    this.notify();
  }

  getScore(): number {
    let score = 0;
    this.state.forEach(question => {
      if (question.isCorrect()) {
        score += 1;
      }
    });
    return score;
  }

  getDisplayScore(): string {
    return this.getScore() + '/' + this.state.length;
  }

  isPassingScore(): boolean {
    return this.getScore() === this.state.length;
  }
}

export {Assignment};
