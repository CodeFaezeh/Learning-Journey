'use strict';
// SELECTIONG ELEMENTS
const score1El = document.querySelector('#sum-of-scores-1');
const score2El = document.querySelector('#sum-of-scores-2');
const currentScore1El = document.querySelector('#current-scores-1');
const currentScore2El = document.getElementById('current-scores-2');
const diceEl = document.querySelector('.dice-img');
const btnNewGame = document.querySelector('.btn-new-game');
const btnRoll = document.querySelector('.btn-roll-dice');
const btnHold = document.querySelector('.btn-hold');
// STARTING CONDITIONS
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

// ROLLING DICE FUNTIONALITY
