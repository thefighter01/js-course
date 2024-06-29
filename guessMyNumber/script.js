'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// // what we do here is the dom manipulation , we manipulated the textContent for one of the dom nodes

// // i need to select the elements with class = number and class = score

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; // give me a random secretNumber from zero to one

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//document.querySelector(".number").textContent = "secretNumber";

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(`the value of guess is ${guess}`);
  //   console.log(typeof guess);

  // when there is no input
  if (!guess) {
    // falsy value like zero and null and undefined
    displayMessage('No Number!');
  } // when a player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    ++score;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highscore = Math.max(highscore, score);
    document.querySelector('.highscore').textContent = highscore;
  } //when guess is wrong
  // else if (guess !== secretNumber) {
  else {
    // when guess !== secretNumber
    if (score > 1) {
      const str = guess > secretNumber ? 'too high!' : 'too low!';
      displayMessage(str);
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    }
  }

  // // when a player loses
  // else if (score <= 1) {
  // } // when guess is too high
  // else if (guess > secretNumber) {
  // } // when guess is too low
  // else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'too low!';
  //   --score;

  //   document.querySelector('.score').textContent = score;
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // anonymous functions
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
