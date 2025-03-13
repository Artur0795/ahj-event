class Scoreboard {
    constructor(updateScoreCallback) {
        this.score = 0;
        this.updateScoreCallback = updateScoreCallback;
        this.display = document.createElement('div');
        this.display.className = 'scoreboard';
        document.body.appendChild(this.display);
        this.updateDisplay();
    }

    incrementScore() {
        this.score++;
        this.updateDisplay();
        this.updateScoreCallback(this.score);
    }

    updateDisplay() {
        this.display.innerText = 'Счет: ' + this.score;
    }
} 