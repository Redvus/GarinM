class About {

    aboutAuthors(peronFirstTitle, peronFirstName, peronSecondTitle, peronSecondName, peronThirdTitle, peronThirdName) {
        const containerWrapper = document.createElement('div'),
            containerTitle = document.createElement('div'),
            wrapperTitleAuthors = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_about';
        containerTitle.className = 'container__title container__title_category';
        wrapperTitleAuthors.className = 'wrapper__top';
        container.className = 'container container--wide';

        wrapperTitleAuthors.innerHTML = `
            <picture id="authorsTitle" class="wrapper__top_title">
                <img src="assets/games/kraevedia/images/kraevedia_titleAuthors.png" alt="Краеведия. Об авторах">
            </picture>
        `;
        containerWrapper.innerHTML = `
            <div class="container__about container__about_back">
                <div class="container__about_person">
                    <h4>${peronFirstTitle}</h4>
                    <p>${peronFirstName}</p>
                </div>
                <div class="container__about_person">
                    <h4>${peronSecondTitle}</h4>
                    <p class="container__about_person--gone">${peronSecondName}</p>
                </div>
                <div class="container__about_person">
                    <h4>${peronThirdTitle}</h4>
                    <p>${peronThirdName}</p>
                </div>
            </div>
        `;
        wrapper.appendChild(wrapperTitleAuthors);
        container.appendChild(containerWrapper);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__service';
        wrapper.appendChild(introBlockBack);

        // const wrapperAboutBack = document.createElement('div');
        // wrapperAboutBack.className = 'wrapper__back_about';
        // wrapper.appendChild(wrapperAboutBack);

        let titleAuthors = document.querySelector('.wrapper__top'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            aboutBack = document.querySelector('.wrapper__back_about'),
            containerAbout = document.querySelector('.container__about')
        ;

        function aboutAuthorsAnim() {
            let tl = new gsap.timeline();

            tl
                .from(introBlockBack, {
                    autoAlpha: 0,
                    duration: 0.4,
                    scale: 0.98
                })
                .to(titleAuthors, {
                    autoAlpha: 1,
                    duration: 0.4,
                    delay: '-0.2'
                })
                .from(containerAbout, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.3'
                })
                .from(containerAboutPerson, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
                    y: "-0.5rem",
                    stagger: 0.07
                })
            ;
        }
        aboutAuthorsAnim();
    }

    aboutLibrary(libraryTitle, libraryLeftText, libraryRightText) {
        const containerWrapper = document.createElement('div'),
            containerTitle = document.createElement('div'),
            wrapperTitleAbout = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_about';
        containerTitle.className = 'container__title container__title_category';
        wrapperTitleAbout.className = 'wrapper__top';
        container.className = 'container container--wide';

        wrapperTitleAbout.innerHTML = `
            <picture id="aboutTitle" class="wrapper__top_title">
                <img src="assets/games/kraevedia/images/kraevedia_titleAbout.png" alt="Краеведия. О библиотеке">
            </picture>
        `;
        containerWrapper.innerHTML = `
            <div class="container__about container__about_text">
                <div class="container__about_left">
                    <p>${libraryLeftText}</p>
                </div>
                <div class="container__about_right">
                    <p>${libraryRightText}</p>
                </div>
            </div>
        `;
        wrapper.appendChild(wrapperTitleAbout);
        container.appendChild(containerWrapper);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__service';
        wrapper.appendChild(introBlockBack);

        let titleAbout = document.querySelector('.wrapper__top'),
            containerAboutLeft = document.querySelectorAll('.container__about_left'),
            containerAboutRight = document.querySelectorAll('.container__about_right'),
            aboutBack = document.querySelector('.wrapper__back_about')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .from(introBlockBack, {
                    autoAlpha: 0,
                    duration: 0.4,
                    scale: 0.98
                })
                .from(aboutBack, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.4'
                })
                .to(titleAbout, {
                    autoAlpha: 1,
                    duration: 0.4,
                    delay: '-0.2'
                })
                .from([containerAboutLeft, containerAboutRight], {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
                    stagger: 0.07
                })
            ;
        }
        aboutLibraryAnim();
    }
}