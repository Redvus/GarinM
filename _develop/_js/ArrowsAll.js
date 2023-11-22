class ArrowsAll {

    arrowBack() {
        const containerArrowBack = document.createElement('a');
        containerArrowBack.className = 'wrapper__service_arrow';
        containerArrowBack.id = 'arrowBack';
        containerArrowBack.innerHTML = `
            <img src="assets/games/kraevedia/images/kraevedia_arrowBack.png" alt="Стрелка назад">
        `;
        wrapper.appendChild(containerArrowBack);
    }

    clearStorage() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__service_clear';
        containerClear.id = 'settingsClick';
        containerClear.innerHTML = `
            <img src="assets/games/kraevedia/images/kraevedia_settings.png" alt="Настройки">
        `;
        wrapper.appendChild(containerClear);
    }

    arrowNext() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__service_next';
        containerClear.id = 'answerNext';
        containerClear.innerHTML = `
            <img src="assets/games/kraevedia/images/kraevedia_arrowNext.png" alt="Следующий вопрос">
        `;
        wrapper.appendChild(containerClear);
    }
}