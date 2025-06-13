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
let activePlayer = 1;
let score = [0, 0];
let playing = true;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
/****************************************** */
// funtion swithcing the active player
function switchPlayer() {
  // Reset current score display
  document.querySelector(`#current-scores-${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Switch active player
  activePlayer = activePlayer === 1 ? 2 : 1;

  // Toggle active class in UI
  player1El.classList.toggle('player-active');
  player2El.classList.toggle('player-active');
}

// // //  // ROLL DICE
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Roll the dice
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    // 2.display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    // 3.0. Check the player
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current-scores-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// // //  // HOLD

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer - 1] += currentScore;
    document.querySelector(`#sum-of-scores-${activePlayer}`).textContent =
      score[activePlayer - 1];
    console.log(score);
    if (score[activePlayer - 1] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
    } else {
      switchPlayer();
    }
  }
});
/*********************** */
//// function restart the game
function init() {
  score = [0, 0];
  playing = true;
  currentScore = 0;
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  currentScore1El.textContent = 0;
  currentScore2El.textContent = 0;
  score1El.textContent = 0;
  score2El.textContent = 0;
  diceEl.classList.toggle('hidden');
  player1El.classList.remove('player-winner');
  player2El.classList.remove('player-winner');
  // Reset active player to 1
  player1El.classList.add('player-active');
  player2El.classList.remove('player-active');
  activePlayer = 1;
}
init();
btnNewGame.addEventListener('click', init);
