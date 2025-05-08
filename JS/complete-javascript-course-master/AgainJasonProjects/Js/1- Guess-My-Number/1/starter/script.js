'use strict';
//0.lucky number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// document.querySelector('.number').textContent = secretNumber;
//0.1.define the variables
let score = 20;
let highScore = 0;
//0.2.message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//00000.check my idea

// 1.click on check button
document.querySelector('.check').addEventListener('click', function () {
  //1.0.define input
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, secretNumber);
  //1.1.when there is no input
  if (!guess) {
    displayMessage('Enter a number,please');
    // document.querySelector('.message').textContent = 'Enter a number plaese!';
    // 1.2. when the guess is true
  } else if (guess === secretNumber) {
    displayMessage(`🎉 You win,hooray`);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '50%';
    //1.2.1.what happend to score? highscore?
    // 1.2.2.bug: highest score = highscore
    if (highScore < score) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    //1.2.3.show the secret number
    document.querySelector('.number').textContent = secretNumber;

    // 1.3. when the guess is false
  } else {
    // 1.3.0. message when guess is high or low
    guess > secretNumber
      ? displayMessage(`🔺It's High`)
      : displayMessage(`🔻 It's Low`);

    //1.2.1.what happend to score? highscore?
    score -= 1;
    document.querySelector('.score').textContent = score;
    //1.2.1.1.solving the bug: score bellow zero
    if (score < 1) {
      displayMessage(` 💣You loose`);
      score = 1;
      //1.2.1.2.solving the bug: enter right answer after loosing the game
      if ((score = 1)) {
        displayMessage(`Start guessing...`);
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = '';
        score = 20;
        document.querySelector('.score').textContent = score;
      }
    }
  }
});
// 2.click on again button
document.querySelector('.again').addEventListener('click', function () {
  displayMessage(`Start guessing...`);
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.number').textContent = secretNumber;
  //2.1.change style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //2.2.change variables
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
});
