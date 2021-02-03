import { GameObject } from '../game_engine/game_object.js';
export class Character extends GameObject {
    constructor() {
        super(0, 300, 20, 20);
        this.walkAnimation = this.game.AnimationManager.createAnimation(
            [0, 1, 3, 4],40
        );
    }

    update() {
        if (this.left > this.game.canvas.right) {
            this.right = 0;
        }
        this.left += 5;
    }

    draw() {
        const sprite = this.game.AnimationManager.sprite('person');
        const index = this.walkAnimation();
        this.drawing.drawSprite(sprite, index, this.x, this.y, 100, 100);
    }
    
}