'use strict';
let num = Math.ceil(Math.random() * 20);

// let document.querySelector('.message').textContent = document.querySelector('.message').textContent;

let score = 20;
let highScore = 0;
const dispMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};
const scoreCalc = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  console.log(guess);
  if (!guess) dispMsg('⛔ No number');
  else if (score == 0) {
    dispMsg('😓 You lost the game');
  } else if (guess == num) {
    dispMsg('🎉  Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = num;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (guess != num) {
    dispMsg(guess > num ? '📈  Too high !' : '📉  Too low !');
    scoreCalc();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  num = Math.ceil(Math.random() * 20);
  // document.querySelector('.number').textContent = num;
  document.querySelector('.guess').value = '';
  dispMsg('Start guessing...');
});
