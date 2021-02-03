const soundList = {};

export const SoundManager = {
    play(name) {
        soundList[name].element.play();
    },
    load({ name, src }) {
        return new Promise((resolve, reject) => {
            const audio = new Audio(src);
            audio.oncanplaythrough = () => {
                soundList[name] = { name, src, element: audio }
                resolve(soundList[name]);
            }
        })
    },

    loadAll(sounds) {
        Promise.all(
            sounds.map(sound => SoundManager.load(sound))
        );
    }
}