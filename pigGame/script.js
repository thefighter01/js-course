'use strict';

const getRandomNumber = () => Math.trunc(Math.random() * 6) + 1;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// define them once at the begining of the application instead of writing the same code again and again and again

// selecting elements
const score0El = document.querySelector('#score--0'); // dom element
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const currentScoreEl = document.querySelectorAll('.current-score');
const scoreEl = document.querySelectorAll('.score');

const scores = [];
let activePlayer;
let currentScore;
let playing;

// starting Conditions
const init = function () {
  currentScore = scores[0] = scores[1] = 0;
  activePlayer = 0;
  playing = true;
  for (let i = 0; i < scoreEl.length; ++i) {
    scoreEl[i].textContent = 0;
    currentScoreEl[i].textContent = 0;
  }
  diceEl.classList.add('hidden');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

btnRoll.addEventListener('click', function (e) {
  if (playing) {
    let randomNumber = getRandomNumber();
    diceEl.src = `dice-${randomNumber}.png`;
    // i need to change the attribute here for the image
    // i need to know who is the player
    // if the randomNumber was one
    diceEl.classList.remove('hidden');
    console.log(e);
    if (randomNumber !== 1) {
      // add the random number to the current score
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the next player
      currentScore = 0;
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    currentScore = 0;
    if (scores[activePlayer] >= 100) {
      playing = false;
      // winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.querySelector('.dice').classList.add('hidden');
    } else {
      // switch the player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
