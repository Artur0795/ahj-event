import { Scoreboard } from './Scoreboard';
import { Goblin } from './Goblin';  // Добавлен импорт класса Goblin

class Game {
    constructor(updateScoreCallback) {
        this.goblin = null;
        this.scoreboard = new Scoreboard(updateScoreCallback);  // Предположим, что Scoreboard существует
        this.missedGoblins = 0;
        this.maxMissedGoblins = 5;
        this.fixedPositions = [
            { x: 100, y: 100 },
            { x: 300, y: 150 },
            { x: 500, y: 200 },
            { x: 700, y: 250 },
            { x: 900, y: 300 },
        ];
        this.loadImages();
        this.spawnGoblin();  // Начальный запуск гоблина
    }

    loadImages() {
        const goblinImage = new Image();
        goblinImage.src = 'img/goblin.png';  // Укажите правильный путь к изображению гнома
        goblinImage.id = 'goblin';
        goblinImage.style.display = 'none';
        goblinImage.onerror = () => console.error('Failed to load goblin image');
        document.body.appendChild(goblinImage);

        const hammerCursor = new Image();
        hammerCursor.src = 'img/hammer.png';  // Укажите правильный путь к изображению молота
        hammerCursor.id = 'cursor';
        hammerCursor.style.position = 'absolute';
        hammerCursor.style.pointerEvents = 'none';
        hammerCursor.onerror = () => console.error('Failed to load hammer image');
        document.body.appendChild(hammerCursor);
    }

    spawnGoblin() {
        if (this.goblin && this.goblin.isVisible) {
            // Если гоблин уже видим, не запускаем новый, пока текущий не исчезнет.
            return;
        }
        
        // Создаем новый экземпляр гоблина, передаем callback для обработки клика
        this.goblin = new Goblin(this.goblinClicked.bind(this), this.fixedPositions);
        this.goblin.show();  // Показываем гоблина на экране
        document.getElementById('goblin').style.display = 'block';  // Отображаем изображение гнома
        
        // Устанавливаем таймаут, чтобы проверить, был ли гоблин пропущен (не кликнут в течение времени)
        setTimeout(() => {
            if (this.goblin.isVisible) {
                // Если гоблин все еще видим после таймаута, считаем его пропущенным
                this.missedGoblins++;
                this.checkGameOver();
            }
            // Продолжаем запускать новых гоблинов, независимо от того, был ли предыдущий пропущен или кликнут
            this.spawnGoblin();
        }, 1000);  // 1 секунда для клика по гоблину
    }

    checkGameOver() {
        if (this.missedGoblins >= this.maxMissedGoblins) {
            alert('Игра окончена! Ваш счет: ' + this.scoreboard.score);
            // Перезапуск игры
            this.resetGame();
        }
    }

    resetGame() {
        this.scoreboard.score = 0;
        this.missedGoblins = 0;
        this.scoreboard.updateDisplay();
        this.spawnGoblin();
    }

    goblinClicked() {
        // Увеличиваем счет и скрываем гоблина после клика
        this.scoreboard.incrementScore();
        this.goblin.hide();
        document.getElementById('goblin').style.display = 'none';  // Скрываем изображение гнома
    }
}

document.addEventListener('DOMContentLoaded', () => {
  // ...existing code...
    const element = document.querySelector('.some-class');
  if (element) {
    element.style.display = 'block'; // Убедитесь, что элемент существует
  } else {
    console.error('Element not found');
  }
  // ...existing code...
});

export { Game };
