const key = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    SPACE: 'Space',
    ENTER: 'Enter',
    A: 'KeyA',
    W: 'KeyW',
    S: 'KeyS',
    D: 'KeyD'
}

const keyState = {

}

export const Input = {
    getKey() { return key },
    onKey(keycode) {
        return keyState[keycode];
    }


}

window.addEventListener('keydown', event => {
    keyState[event.code] = true;
});

window.addEventListener('keyup', event => {
    delete keyState[event.code];
});