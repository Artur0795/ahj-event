class Goblin {
    constructor(goblinClickedCallback, fixedPositions) {
        this.isVisible = false;
        this.element = document.createElement('div');
        this.element.className = 'goblin';
        document.body.appendChild(this.element);
        this.fixedPositions = fixedPositions;
        this.element.addEventListener('click', goblinClickedCallback);
    }

    show() {
        this.isVisible = true;
        const position = this.getRandomPosition();
        this.element.style.left = position.x + 'px';
        this.element.style.top = position.y + 'px';
        this.element.style.display = 'block';
    }

    hide() {
        this.isVisible = false;
        this.element.style.display = 'none';
    }

    getRandomPosition() {
        const randomIndex = Math.floor(Math.random() * this.fixedPositions.length);
        return this.fixedPositions[randomIndex];
    }
} 