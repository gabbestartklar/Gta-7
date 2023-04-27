const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const rollBtn = document.getElementById('roll-btn');
const betUnder = document.getElementById('bet-under');
const betOver = document.getElementById('bet-over');
const resultDiv = document.getElementById('result');

let dice1 = 0;
let dice2 = 0;
let bet = '';

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
}

function drawDice() {
  // Rita ut resultatet av tärningarna på kanvasen
}

function checkResult() {
  let sum = dice1 + dice2;
  if (bet === 'under' && sum < 7) {
    resultDiv.innerHTML = `Grattis, du vann! Tärningsresultatet blev ${sum}.`;
  } else if (bet === 'over' && sum >= 7) {
    resultDiv.innerHTML = `Grattis, du vann! Tärningsresultatet blev ${sum}.`;
  } else {
    resultDiv.innerHTML = `Tyvärr, du förlorade. Tärningsresultatet blev ${sum}.`;
  }
}

rollBtn.addEventListener('click', function() {
  rollDice();
  drawDice();
  checkResult();
});

betUnder.addEventListener('click', function() {
  bet = 'under';
});

betOver.addEventListener('click', function() {
  bet = 'over';
});
