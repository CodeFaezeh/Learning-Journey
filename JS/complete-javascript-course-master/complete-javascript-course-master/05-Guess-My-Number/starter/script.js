'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number! ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🔴 NO number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🟢 Correct';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //when guess is not correct
  else if (guess !== secretNumber) {
    if (score > 1) score -= 1;
    document.querySelector('.score').textContent = score;
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = `↗️ Too high`;
    } else {
      document.querySelector('.message').textContent = ` Too Low`;
    }
  }
  // راه حل دوم، وقتی که
  // score > 0
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = '😢 You lost the game';
  //   }
  // باگ:راه حل اول،من
  //   while (score <= 0) {
  //     document.querySelector('.message').textContent = '😒 You lose the game!';
  //     score = 1;
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// دکمه دوباره، راه حل من
// document.querySelector('.again').addEventListener('click', function () {
//   location.reload(true);
// });
