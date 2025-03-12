import './styles/style.css';
import gnomeImage from './img/goblin.png';

const board = document.getElementById('game-board');
const gridSize = 4; 

for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement('div');
  board.appendChild(cell);
}

const getRandomPosition = () => {
  let position;
  do {
    position = Math.floor(Math.random() * gridSize * gridSize);
  } while (document.getElementById(position)); 
  return position;
};

const createGnome = () => {
  const gnome = document.createElement('img');
  gnome.src = gnomeImage;
  gnome.id = getRandomPosition();
  board.children[gnome.id].appendChild(gnome);
};

const moveGnome = () => {
  const currentGnome = document.querySelector('img');
  const newPosition = getRandomPosition();
  if (currentGnome) {
    currentGnome.remove(); 
  }
  board.children[newPosition].appendChild(currentGnome); 
};

createGnome();

setInterval(moveGnome, 2000);
