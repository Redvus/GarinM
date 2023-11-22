class Intro {

    introStart() {
        const introBlockTop = document.createElement('div'),
            introMonumentBlock = document.createElement('picture'),
            introStreetBlock = document.createElement('picture'),
            introFloorBlock = document.createElement('picture')
        ;
        introBlockTop.className = 'wrapper__top';

        //Элементы на первой
        introMonumentBlock.id = 'introMonument';
        introFloorBlock.id = 'introFloor';
        introStreetBlock.id = 'introStreet';
        introMonumentBlock.innerHTML = `
            <img src="images/tema_juchka.png" id="introMonumentImage" alt="Тема и Жучка. Памятник">
        `;
        // introFloorBlock.innerHTML = `
        //     <img src="images/" id="introFloorImage" alt="Тротуар">
        // `;
        // introStreetBlock.innerHTML = `
        //     <img src="images/" id="introStreetImage" alt="Улица и дома на заднем фоне">
        // `;
        introBlockTop.innerHTML = `
            <h1>Гарин-Михайловский</h1>
        `;
        container.appendChild(introMonumentBlock);
        container.appendChild(introFloorBlock);
        container.appendChild(introStreetBlock);
        // wrapper.appendChild(introBlockTop);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__intro';
        // wrapper.appendChild(introBlockBack);

        // Кнопки
        const introBlockButtons = document.createElement('div');
        introBlockButtons.className = 'wrapper__bottom';
        introBlockButtons.innerHTML = `
            <ul class="wrapper__bottom_menu">
                <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
                <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
                <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
            </ul>
        `;
        // wrapper.appendChild(introBlockButtons);

        const wrapperTop = document.querySelector('.wrapper__top'),
            wrapperTitle = document.querySelector('.wrapper__title'),
            wrapperBottom = document.querySelector('.wrapper__bottom'),
            wrapperBack = document.querySelector('.wrapper__intro')
        ;

        function introAnim() {
            let tl = gsap.timeline();
            tl
                .to(wrapperBack, {
                    duration: 0.6,
                    autoAlpha: 1
                })
                .to(wrapperTop, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
                .to(wrapperBottom, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
            ;
        }
        // introAnim();
    }
}