'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(
        `${this.question} \n${this.options.join('\n')}\n(write options number)`
      ) || -1
    );
    console.log(userInput);
    typeof userInput === 'number' &&
      userInput >= 0 &&
      userInput < this.answers.length &&
      this.answers[userInput]++;

    //console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if ('string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll question and array of question from which people can choose and an array of answers from which people can choose too

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
