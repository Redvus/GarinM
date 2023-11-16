const container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

const soundsLoad = new Sounds();

/* Develop */
function introDev() {
    const introDevLoad = new Intro();
    introDevLoad.introStart();

    const clickLoadGame = document.getElementById('clickLoadGame'),
        clickAuthors = document.getElementById('clickAboutAuthors'),
        clickAbout = document.getElementById('clickAboutLibrary'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTitle = document.querySelector('.wrapper__title'),
        wrapperBottom = document.querySelector('.wrapper__bottom'),
        wrapperBack = document.querySelector('.wrapper__intro'),
        backgroundMusicID = document.getElementById('backgroundMusicID'),
        choiceCatLoad = new ChoiceCategory()
    ;

    clickLoadGame.addEventListener('click', () => {
        soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_progressClear.ogg');

        // Music Background
        if (backgroundMusicID === null) {
            soundsLoad.backgroundMusicLoad('assets/games/cosmicpuzzles/sounds/cp_ambientSpace.ogg');
            localStorage.setItem('backgroundMusic', JSON.stringify(1));
        } else if (backgroundMusicID.paused || localStorage.getItem('backgroundMusic') === '0') {
            backgroundMusicID.pause();
            localStorage.setItem('backgroundMusic', JSON.stringify(0));
        }

        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                categoryDev();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.7,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperTitle, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0
            })
        ;
    });

    clickAuthors.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                authorsStart();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.7,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperTitle, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0
            })
        ;
    });

    clickAbout.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                aboutStart();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.7,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperTitle, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0
            })
        ;
    });
}

/* Запускаем категории */
function categoryDev() {
    const categoryLoad = new Category(),
        arrowBackLoad = new ArrowsAll(),
        settingsLoad = new Settings()
    ;
    categoryLoad.categoryMain();
    categoryLoad.categoryProgress('progressChoiceValue', 'progressChoiceAll');
    categoryLoad.categoryProgress('progressPrepareValue', 'progressPrepareAll');
    categoryLoad.categoryProgress('progressFlightValue', 'progressFlightAll');

    const containerCategory = document.querySelector('.container__category'),
        introAboutBack = document.querySelector('.wrapper__game'),
        categoryChoice = document.getElementById('categoryChoice'),
        categoryPrepare = document.getElementById('categoryPrepare'),
        categoryFlight = document.getElementById('categoryFlight')
    ;

    let progressChoiceQuestSum = JSON.parse(localStorage.getItem('progressChoiceAll')),
        progressPrepareQuestSum = JSON.parse(localStorage.getItem('progressPrepareAll')),
        progressFlightQuestSum = JSON.parse(localStorage.getItem('progressFlightAll'))
    ;

    if (localStorage.getItem('progressChoiceAll') === null ||
        localStorage.getItem('progressPrepareAll') === null ||
        localStorage.getItem('progressFlightAll') === null) {
        localStorage.setItem('progressChoiceAll', JSON.stringify(0));
        localStorage.setItem('progressPrepareAll', JSON.stringify(0));
        localStorage.setItem('progressFlightAll', JSON.stringify(0));
    }

    //Settings
    arrowBackLoad.clearStorage();
    const settingButton = document.getElementById('settingsClick'),
        setProgressChoice = document.getElementById('progressChoiceValue'),
        setProgressPrepare = document.getElementById('progressPrepareValue'),
        setProgressFlight = document.getElementById('progressFlightValue')
    ;
    settingButton.addEventListener('click', () => {
        settingsLoad.settingsBlock();
        const settingsClearButton = document.getElementById('clearProgressButton'),
            settingsBack = document.querySelector('.wrapper__lightbox'),
            settingsBlock = document.querySelector('.wrapper__lightbox_block'),
            settingsClose = document.getElementById('settingsCloseButton'),
            settingsText = document.getElementById('settingsText'),
            settingsToggleMusic = document.getElementById('turnOfSoundButton'),
            settingsToggleMusicID = document.getElementById('backgroundMusicID'),
            settingsMusicValue = JSON.parse(localStorage.getItem('backgroundMusic'));

        settingsClearButton.addEventListener('click', () => {
            localStorage.clear();
            localStorage.setItem('progressChoiceAll', JSON.stringify(0));
            localStorage.setItem('progressPrepareAll', JSON.stringify(0));
            localStorage.setItem('progressFlightAll', JSON.stringify(0));
            setProgressChoice.textContent = JSON.parse(localStorage.getItem('progressChoiceAll'));
            setProgressPrepare.textContent = JSON.parse(localStorage.getItem('progressPrepareAll'));
            setProgressFlight.textContent = JSON.parse(localStorage.getItem('progressFlightAll'));
            soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_progressClear.ogg');
            categoryChoice.className = 'category__main';
            categoryPrepare.className = 'category__main';
            categoryFlight.className = 'category__main';
        });

        settingsClearButton.addEventListener('mouseover', () => {
            settingsText.textContent = 'Вы уверены?';
            settingsClearButton.textContent = 'Да';
        });

        settingsClearButton.addEventListener('mouseleave', () => {
            settingsText.textContent = 'Весь игровой процесс будет сброшен и вы начнете игру с начала';
            settingsClearButton.textContent = 'Сбросить прогресс';
        });

        if (localStorage.getItem('backgroundMusic') === '0') {
            settingsToggleMusic.textContent = 'Включить музыку';
        }

        settingsToggleMusic.addEventListener('click', () => {
            if (settingsToggleMusicID.paused || settingsMusicValue === '0') {
                settingsToggleMusicID.play();
                settingsToggleMusic.textContent = 'Выключить музыку';
                localStorage.setItem('backgroundMusic', JSON.stringify(1));
            } else if (settingsToggleMusicID.play || settingsMusicValue === '1'){
                settingsToggleMusicID.pause();
                settingsToggleMusic.textContent = 'Включить музыку';
                localStorage.setItem('backgroundMusic', JSON.stringify(0));
            }
        });

        settingsClose.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapper.removeChild(settingsBack);
                }
            });
            tl
                .to(settingsBlock, {
                    duration: 0.3,
                    y: '5%',
                    autoAlpha: 0
                })
                .to(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
            ;
        });
    });

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(settingButton);
                container.removeChild(containerCategory);
                wrapper.removeChild(introAboutBack);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to(containerCategory, {
                autoAlpha: 0,
                duration: 0.6
            })
            .to([settingButton, arrowBackClick], {
                autoAlpha: 0,
                duration: 0.6,
                delay: '-0.6'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                duration: 0.6,
                delay: '-0.4'
            })
        ;
    });

    //Category load
    categoryChoice.addEventListener('click', () => {
        soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryLoad.ogg');
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(settingButton);
                container.removeChild(containerCategory);
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
        tl
            .to([categoryChoice, categoryPrepare, categoryFlight], {
                autoAlpha: 0,
                duration: "0.6",
                delay: "-0.3",
                y: "0.5rem",
                stagger: 0.2
            })
        ;
    });

    categoryPrepare.addEventListener('click', () => {
        soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryLoad.ogg');
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(settingButton);
                container.removeChild(containerCategory);
                prepareCategory();
                lockSubQuestPrepare();
            }
        });
        tl
            .to([categoryChoice, categoryPrepare, categoryFlight], {
                autoAlpha: 0,
                duration: "0.6",
                delay: "-0.3",
                y: "0.5rem",
                stagger: 0.2
            })
        ;
    });

    categoryFlight.addEventListener('click', () => {
        soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryLoad.ogg');
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(settingButton);
                container.removeChild(containerCategory);
                flightCategory();
                lockSubQuestFlight();
            }
        });
        tl
            .to([categoryChoice, categoryPrepare, categoryFlight], {
                autoAlpha: 0,
                duration: "0.6",
                delay: "-0.3",
                y: "0.5rem",
                stagger: 0.2
            })
        ;
    });

    if (progressChoiceQuestSum === 24) {
        categoryChoice.className += ' category__main--hidden';
    }

    if (progressPrepareQuestSum === 24) {
        categoryPrepare.className += ' category__main--hidden';
    }

    if (progressFlightQuestSum === 24) {
        categoryFlight.className += ' category__main--hidden';
    }
}

function aboutStart() {
    const aboutLoad = new About(),
        arrowBackLoad = new ArrowsAll()
    ;

    aboutLoad.aboutLibrary('О библиотеке', 'МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе - Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы – это информационные, образователь- ные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием;</li><li>сканированием;</li><li>ламинированием документов;</li><li>распечаткой информации на принтере;</li><li>записью на электронные носители.</li></ul>');

    const containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__game')
    ;

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerAbout);
                wrapper.removeChild(introAboutBack);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to([containerAbout, arrowBackClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.3'
            })
        ;
    });
}

function authorsStart() {
    const aboutLoad = new About(),
        arrowBackLoad = new ArrowsAll()
    ;

    aboutLoad.aboutAuthors('сценарист', 'Инна Ямщикова', 'художник', 'Елена Расторгуева', 'Программист', 'Александр Суворов');

    const containerAbout = document.querySelector('.container__wrapper_about'),
        wrapperAboutBack = document.querySelector('.wrapper__back_about'),
        introAboutBack = document.querySelector('.wrapper__game')
    ;

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerAbout);
                wrapper.removeChild(wrapperAboutBack);
                wrapper.removeChild(introAboutBack);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to([containerAbout, arrowBackClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(wrapperAboutBack, {
                autoAlpha: 0,
                delay: '-0.2'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.3'
            })
        ;
    });
}

function questionBlockDev() {
    const question = new Question();

    question.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Кто первым из животных побывал в космосе?', 'Белка', 'Стрелка', 'Тузик');

    question.answerBlock(1, 'Конечно же стрелка, потому как это только и это есть правильный ответ, а не другой');

}

function init() {
    introDev();
    // categoryDev();
}

init();