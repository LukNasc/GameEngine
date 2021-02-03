import { GameObject } from '../game_engine/game_object.js';
export class Ball extends GameObject {
    constructor(size = 20) {
        super(50, 50, size, size);
        this.size = size;
        this.speed = 5;
        this.color = 'white';
    }

    goRight() {
        if (this.right < this.game.canvas.right) {
            this.x += this.speed;
        }
    }

    goLeft() {
        if (this.left > this.game.canvas.left) {
            this.x -= this.speed;
        }
    }
    goUp() {
        if (this.top > this.game.canvas.top) {
            this.y -= this.speed;
        }
    }
    goDown() {
        if (this.bottom < this.game.canvas.bottom) {
            this.y += this.speed;
        }
    }
    draw() {
        this.drawing.drawCircle(this.x, this.y, this.size, this.color);
    }

}