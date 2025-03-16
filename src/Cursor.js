class Cursor {
    constructor() {
        this.cursorElement = document.createElement('div');
        this.cursorElement.className = 'custom-cursor';
        document.body.appendChild(this.cursorElement);
        
        this.updateCursorPosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
        
        document.addEventListener('mousemove', (e) => this.updateCursorPosition(e));
    }

    updateCursorPosition(e) {
        if (e) {
            this.cursorElement.style.left = e.clientX + 'px';
            this.cursorElement.style.top = e.clientY + 'px';
        }
    }
}

export default Cursor;