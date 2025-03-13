import './styles/style.css';
import gnomeImage from './img/goblin.png';
import { Game } from './Game';
import { Cursor } from './Cursor';

const board = document.getElementById('game-board');
const gridSize = 4; 

// Создаем счетчик
const scoreboard = document.createElement('div');
scoreboard.className = 'scoreboard';
document.body.appendChild(scoreboard);

const updateScoreboard = (score) => {
    scoreboard.innerText = 'Счет: ' + score;
};

for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement('div');
  board.appendChild(cell);
}

const createGnome = () => {
  const gnome = document.createElement('img');
  gnome.src = gnomeImage;
  gnome.id = 'gnome';
  board.children[getRandomPosition()].appendChild(gnome);
};

const getRandomPosition = () => {
  return Math.floor(Math.random() * gridSize * gridSize);
};

const moveGnome = () => {
  const currentGnome = document.getElementById('gnome');
  const newPosition = getRandomPosition();
  if (currentGnome) {
    currentGnome.remove(); 
  }
  board.children[newPosition].appendChild(currentGnome); 
};

createGnome();
setInterval(moveGnome, 2000);

const cursor = new Cursor();
const game = new Game(updateScoreboard); // Передаем функцию обновления счета
