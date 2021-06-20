import {Question} from '../../types';

const questions: Question[] = [
  {
    id: 1,
    body: 'From which science fiction movie does the idea of teleportation originate from?',
    bodyFormat: '',
    answers: [
      {
        letter: 'a',
        body: 'Star Trek',
        bodyFormat: '',
        correct: true
      },
      {
        letter: 'b',
        body: 'Star Wars',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'c',
        body: 'Lost in Space',
        bodyFormat: '',
        correct: false
      }
    ]
  },
  {
    id: 2,
    body: 'Given a group of N graduating students, how many possible ways or ordered sequences can their names be called in?',
    bodyFormat: '',
    answers: [
      {
        letter: 'a',
        body: '1',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'b',
        body: 'log n',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'c',
        body: 'n',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'd',
        body: 'n!',
        bodyFormat: '',
        correct: true
      }
    ]
  },
  {
    id: 3,
    body: 'Which of the following are programming languages?',
    bodyFormat: '',
    answers: [
      {
        letter: 'a',
        body: 'Chef',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'b',
        body: 'Cow',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'c',
        body: 'Whitespace',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'd',
        body: 'Shakespeare',
        bodyFormat: '',
        correct: false
      }
      {
        letter: 'e',
        body: 'All of the above',
        bodyFormat: '',
        correct: true
      }
    ]
  },
  {
    id: 4,
    body: 'Take the numbers from 1...10 (inclusive) and then shuffle before entering them into an empty binary search tree. What is the maximum possible height of that tree?',
    bodyFormat: '',
    answers: [
      {
        letter: 'a',
        body: '8',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'b',
        body: '9',
        bodyFormat: '',
        correct: true
      },
      {
        letter: 'c',
        body: '10',
        bodyFormat: '',
        correct: false
      }
    ]
  },
  {
    id: 5,
    body: 'How many different foxes were there in the Summer 2021 convocation video?',
    bodyFormat: '',
    answers: [
      {
        letter: 'a',
        body: '4',
        bodyFormat: '',
        correct: true
      },
      {
        letter: 'b',
        body: '5',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'c',
        body: '6',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'd',
        body: '7',
        bodyFormat: '',
        correct: false
      }
    ]
  },
  {
    id: 6,
    body: 'How much compute is required to run the Carleton School of Computer Science?',
    bodyFormat: '',
    answers: [
      {
        letter: 'a',
        body: 'A lot',
        bodyFormat: '',
        correct: true
      },
      {
        letter: 'b',
        body: 'None',
        bodyFormat: '',
        correct: false
      }
    ]
  },
  {
    id: 7,
    body: 'Unfortunately, there is no nobel prize for computer scientists. However, there is a prestige award named after a famous computer scientist. Who is he?',
    bodyFormat: '',
    answers: [
      {
        letter: 'a',
        body: 'Alan Paul',
        bodyFormat: '',
        correct: false
      },
      {
        letter: 'b',
        body: 'Alan Turing',
        bodyFormat: '',
        correct: true
      },
      {
        letter: 'c',
        body: 'Van Halen',
        bodyFormat: '',
        correct: false
      }
    ]
  }
];

export {questions};
