
const choices = ['rock', 'paper', 'scissors'];

const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
};

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function getWinner(player, computer) {
  if (player === computer) return 'draw';

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }

  return 'lose';
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  // Update emoji display
  document.getElementById('player-pick').textContent = emojis[playerChoice];
  document.getElementById('computer-pick').textContent = emojis[computerChoice];

  // Update result text
  const resultText = document.getElementById('result-text');
  resultText.classList.remove('win', 'lose', 'draw');

  if (result === 'win') {
    playerScore++;
    resultText.textContent = '🎉 You Win!';
    resultText.classList.add('win');
  } else if (result === 'lose') {
    computerScore++;
    resultText.textContent = '😢 You Lose!';
    resultText.classList.add('lose');
  } else {
    drawScore++;
    resultText.textContent = "🤝 It's a Draw!";
    resultText.classList.add('draw');
  }

  // Update scores
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('draw-score').textContent = drawScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;

  document.getElementById('player-score').textContent = '0';
  document.getElementById('computer-score').textContent = '0';
  document.getElementById('draw-score').textContent = '0';

  document.getElementById('player-pick').textContent = '❓';
  document.getElementById('computer-pick').textContent = '❓';

  const resultText = document.getElementById('result-text');
  resultText.textContent = 'Make your move!';
  resultText.classList.remove('win', 'lose', 'draw');
}