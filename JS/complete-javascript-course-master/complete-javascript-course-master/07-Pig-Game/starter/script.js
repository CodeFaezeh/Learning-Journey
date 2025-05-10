'use strict';
// ELEMENTS
const score1El = document.querySelector('#sum-of-scores-1');
const score2El = document.querySelector('#sum-of-scores-2');
const currentScore1El = document.querySelector('#current-scores-1');
const currentScore2El = document.getElementById('current-scores-2');
const diceEl = document.querySelector('.dice-img');
const btnNewGame = document.querySelector('.btn-new-game');
const btnRoll = document.querySelector('.btn-roll-dice');
const btnHold = document.querySelector('.btn-hold');
/***********************/
const player1El = document.querySelector('.player-1');
const player2El = document.querySelector('.player-2');
/***********************/
// GAME STATE

// STARTING CONDITIONS
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

// // ROLL DICE
btnRoll.addEventListener('click', function () {
  //1. Roll the dice
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  // 2.display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;
  const activePlayerEl = document.querySelector('.player-active');
  // 3.0. Check the player
  if (activePlayerEl.classList.contains('player-1')) {
    // 3. Check for roll
    // if dice = 1 what will happen?(switch) else
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      currentScore1El.textContent = currentScore;
      // 3.1.0. Switch the player
    } else {
      // 3.1.1. player 1 score would be completely set to zero
      currentScore = 0;
      currentScore1El.textContent = currentScore;
      // 3.2. then switching the active player
      player1El.classList.remove('player-active');
      player2El.classList.add('player-active');
    }
    // player 2 is active
  } else {
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      currentScore2El.textContent = currentScore;
    } else {
      currentScore = 0;
      currentScore2El.textContent = currentScore;
      player2El.classList.remove('player-active');
      player1El.classList.add('player-active');
    }
  }
});
