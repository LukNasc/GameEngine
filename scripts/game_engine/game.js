import { Draw } from './draw.js';
import { ImageManager } from './image_manager.js';
import { SoundManager } from './sound_manager.js';
import { AnimationManager } from './animation_manager.js';
import { Input } from './input.js';

const canvas = document.querySelector("#canvas");


export const Game = {
    gameObjectList: [],
    isRunning: false,
    AnimationManager,
    ImageManager,
    SoundManager,
    Input,
    constructor() {
        Game.canvas = {
            element: canvas,
            ctx: canvas.getContext('2d'),
            width: canvas.width,
            height: canvas.height,
            top: 0,
            bottom: canvas.height,
            left: 0,
            right: canvas.width,
            center: {
                x: canvas.width / 2,
                y: canvas.height / 2
            }
        }
        Game.Drawing = new Draw(Game.canvas.ctx, Game.canvas.width, Game.canvas.height);
    },
    addObject(gameObject) {
        Game.gameObjectList.push(gameObject);
        gameObject.start();
    },
    removeObject(gameObject) {
        const objectIndex = Game.gameObjectList.indexOf(gameObject);
        Game.gameObjectList.splice(objectIndex, 1);
        gameObject.onDestroy();
    },
    start() {
        if (!Game.isRunning) {
            Game.isRunning = true;
            Game.run();
        }
    },
    stop() {
        if (Game.isRunning) {
            Game.isRunning = false;
        }
    },
    checkCollisions() {
        for (let i = 0; i < Game.gameObjectList.length; i++) {
            let obj1 = Game.gameObjectList[i];
            if (obj1.canCollide) {
                for (let j = i + 1; j < Game.gameObjectList.length; j++) {
                    let obj2 = Game.gameObjectList[j];
                    if (obj2.canCollide && isRectsColliding(obj1, obj2)) {
                        obj1.onCollision(obj2);
                        obj2.onCollision(obj1);
                    }
                }
            }
        }
    },
    run() {
        if (Game.isRunning) {
            Game.update();
            if (Game.gameObjectList.length > 1)
                Game.checkCollisions();
            Game.draw();
            window.requestAnimationFrame(Game.run)
        }

    },

    update() {
        Game.gameObjectList.forEach(gameObject => gameObject.update());
    },
    draw() {
        Game.Drawing.clearCanvas();
        Game.Drawing.drawImage(Game.ImageManager.image("background"), 0, 0, 600, 400);
        Game.gameObjectList.forEach(gameObject => gameObject.draw());
    }
}

function isRectsColliding(rect1, rect2) {
    if (
        rect1.left > rect2.right ||
        rect2.left > rect1.right ||
        rect1.top > rect2.bottom ||
        rect2.top > rect1.bottom
    ) {
        return false;
    } else {
        return true;
    }
}