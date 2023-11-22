class Sounds {
    stopSound() {
        let sound = new Audio();
        sound.pause();
    }

    rightAnswer(soundRight) {
        soundRight = new Audio(soundRight);
        soundRight.oncanplaythrough = () => {
            soundRight.play();
        }
    }

    backgroundMusicLoad(musicLoad) {
        const backgroundMusic = document.createElement('audio');
        backgroundMusic.id = 'backgroundMusicID';
        backgroundMusic.setAttribute('autoplay', 'autoplay');
        backgroundMusic.volume = 0.3;
        backgroundMusic.innerHTML = `
            <source src="${musicLoad}" />
        `;
        wrapper.appendChild(backgroundMusic);
    }
}