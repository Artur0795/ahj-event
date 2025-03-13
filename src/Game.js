class Game {
    constructor(updateScoreCallback) {
        this.goblin = null;
        this.scoreboard = new Scoreboard(updateScoreCallback);
        this.missedGoblins = 0;
        this.maxMissedGoblins = 5;
        this.fixedPositions = [
            { x: 100, y: 100 },
            { x: 300, y: 150 },
            { x: 500, y: 200 },
            { x: 700, y: 250 },
            { x: 900, y: 300 },
        ];
        this.spawnGoblin();
    }

    spawnGoblin() {
        this.goblin = new Goblin(this.goblinClicked.bind(this), this.fixedPositions);
        this.goblin.show();
        setTimeout(() => {
            if (this.goblin.isVisible) {
                this.missedGoblins++;
                this.checkGameOver();
            }
            this.spawnGoblin();
        }, 1000);
    }

    checkGameOver() {
        if (this.missedGoblins >= this.maxMissedGoblins) {
            alert('Игра окончена! Ваш счет: ' + this.scoreboard.score);
            // Здесь можно перезапустить игру или выполнить другие действия
        }
    }

    goblinClicked() {
        this.scoreboard.incrementScore();
        this.goblin.hide();
    }
} 