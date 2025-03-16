import './styles/style.css';
import gnomeImage from './img/goblin.png';
import hammerImage from './img/hammer.png';
import { Game } from './Game';
import Cursor from './Cursor.js';  

const board = document.getElementById('game-board');
const gridSize = 4; 

const scoreboard = document.createElement('div');
scoreboard.className = 'scoreboard';
document.body.appendChild(scoreboard);

const updateScoreCallback = (score) => {
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
  return gnome;
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
  board.children[newPosition].appendChild(createGnome()); 
};

board.appendChild(createGnome());
setInterval(moveGnome, 2000);

const cursor = new Cursor();
const game = new Game(updateScoreCallback);

const hammerCursor = document.createElement('div');
hammerCursor.id = 'hammer-cursor';
document.body.appendChild(hammerCursor);

document.addEventListener('mousemove', (e) => {
  const hammerCursor = document.getElementById('hammer-cursor');
  hammerCursor.style.left = `${e.clientX}px`;
  hammerCursor.style.top = `${e.clientY}px`;
  hammerCursor.style.backgroundImage = `url(${hammerImage})`;
  hammerCursor.style.width = '32px';
  hammerCursor.style.height = '32px';
  hammerCursor.style.position = 'absolute';
  hammerCursor.style.pointerEvents = 'none';
});

