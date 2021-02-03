import { Game } from './scripts/game_engine/game.js';

import { Ball } from './scripts/game/ball.js';
import { Character } from './scripts/game/character.js';

Game.constructor();

Game.ImageManager.loadAll([
    {
        name: 'background',
        src: './scripts/game/img/background.png'
    },
    {
        name: 'person',
        src: './scripts/game/img/spritesheet.png'
    },
]).then(() => {
    Game.start();
    Game.AnimationManager.add(
        Game.ImageManager.image('person'),
        2, 2
    )
    const ball = new Ball();
    const ball2 = new Ball();
    const character = new Character();
    Game.addObject(ball);
    Game.addObject(ball2);
    Game.addObject(character);

    ball.update = function () {
        this.color = 'white';
        if (this.input.onKey(this.input.getKey().LEFT)) {
            this.goLeft();
        } else if (this.input.onKey(this.input.getKey().RIGHT)) {
            this.goRight();
        }
        if (this.input.onKey(this.input.getKey().UP)) {
            this.goUp();
        } else if (this.input.onKey(this.input.getKey().DOWN)) {
            this.goDown();
        }
    }

    ball2.update = function () {
        this.color = 'blue';
        if (this.input.onKey(this.input.getKey().A)) {
            this.goLeft();
        } else if (this.input.onKey(this.input.getKey().D)) {
            this.goRight();
        }
        if (this.input.onKey(this.input.getKey().W)) {
            this.goUp();
        } else if (this.input.onKey(this.input.getKey().S)) {
            this.goDown();
        }
    }

    ball.onCollision = function (other) {
        this.color = 'red';
    }

});
