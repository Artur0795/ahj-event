class Goblin {
    constructor(goblinClickedCallback, fixedPositions) {
        this.isVisible = false;
        this.element = document.createElement('div');
        this.element.className = 'goblin';
        const container = document.getElementById('goblin-container');
        if (container) {
            container.appendChild(this.element);
        } else {
            document.body.appendChild(this.element); 
        }
        this.fixedPositions = fixedPositions;
        this.element.addEventListener('click', goblinClickedCallback);
        this.missCount = 0;
        this.maxMisses = 5;
    }

    show() {
        if (this.missCount >= this.maxMisses) {
            alert('Игра окончена! Вы пропустили слишком много гоблинов.');
            return;
        }
        this.isVisible = true;
        this.moveToRandomPosition();
        this.element.style.display = 'block';
        this.renderGoblin();
        this.startHideTimer();
    }

    hide() {
        if (this.isVisible) {
            this.missCount++;
            document.querySelector('.miss').textContent = this.missCount;
        }
        this.isVisible = false;
        this.element.style.display = 'none';
    }

    getRandomPosition() {
        const randomIndex = Math.floor(Math.random() * this.fixedPositions.length);
        return this.fixedPositions[randomIndex];
    }

    moveToRandomPosition() {
        const position = this.getRandomPosition();
        this.element.style.left = position.x + 'px';
        this.element.style.top = position.y + 'px';
    }

    isGoblinVisible() {
        return this.isVisible;
    }

    renderGoblin() {
        this.element.innerHTML = '<img src="path/to/goblin-image.png" alt="Goblin">';
    }

    startHideTimer() {
        setTimeout(() => {
            if (this.isVisible) {
                this.hide();
                this.show();
            }
        }, 1000);
    }
}

export { Goblin };
