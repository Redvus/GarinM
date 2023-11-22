const container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

// const soundsLoad = new Sounds();

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
        backgroundMusicID = document.getElementById('backgroundMusicID')
        // choiceCatLoad = new ChoiceCategory()
    ;

    // clickLoadGame.addEventListener('click', () => {
    //     soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_progressClear.ogg');
    //
    //     // Music Background
    //     if (backgroundMusicID === null) {
    //         soundsLoad.backgroundMusicLoad('assets/games/cosmicpuzzles/sounds/cp_ambientSpace.ogg');
    //         localStorage.setItem('backgroundMusic', JSON.stringify(1));
    //     } else if (backgroundMusicID.paused || localStorage.getItem('backgroundMusic') === '0') {
    //         backgroundMusicID.pause();
    //         localStorage.setItem('backgroundMusic', JSON.stringify(0));
    //     }
    //
    //     let tl = gsap.timeline({
    //         onComplete: () => {
    //             wrapper.className = 'wrapper';
    //             wrapper.removeChild(wrapperTop);
    //             wrapper.removeChild(wrapperTitle);
    //             wrapper.removeChild(wrapperBottom);
    //             wrapper.removeChild(wrapperBack);
    //             wrapper.appendChild(container);
    //             categoryDev();
    //         }
    //     });
    //     tl
    //         .to(wrapperTop, {
    //             duration: 0.7,
    //             autoAlpha: 0,
    //             y: '-3%'
    //         })
    //         .to(wrapperTitle, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0,
    //             y: '5%'
    //         })
    //         .to(wrapperBottom, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0,
    //             y: '5%'
    //         })
    //         .to(wrapperBack, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0
    //         })
    //     ;
    // });
    //
    // clickAuthors.addEventListener('click', () => {
    //     let tl = gsap.timeline({
    //         onComplete: () => {
    //             wrapper.className = 'wrapper';
    //             wrapper.removeChild(wrapperTop);
    //             wrapper.removeChild(wrapperTitle);
    //             wrapper.removeChild(wrapperBottom);
    //             wrapper.removeChild(wrapperBack);
    //             wrapper.appendChild(container);
    //             authorsStart();
    //         }
    //     });
    //     tl
    //         .to(wrapperTop, {
    //             duration: 0.7,
    //             autoAlpha: 0,
    //             y: '-3%'
    //         })
    //         .to(wrapperTitle, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0,
    //             y: '5%'
    //         })
    //         .to(wrapperBottom, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0,
    //             y: '5%'
    //         })
    //         .to(wrapperBack, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0
    //         })
    //     ;
    // });
    //
    // clickAbout.addEventListener('click', () => {
    //     let tl = gsap.timeline({
    //         onComplete: () => {
    //             wrapper.className = 'wrapper';
    //             wrapper.removeChild(wrapperTop);
    //             wrapper.removeChild(wrapperTitle);
    //             wrapper.removeChild(wrapperBottom);
    //             wrapper.removeChild(wrapperBack);
    //             wrapper.appendChild(container);
    //             aboutStart();
    //         }
    //     });
    //     tl
    //         .to(wrapperTop, {
    //             duration: 0.7,
    //             autoAlpha: 0,
    //             y: '-3%'
    //         })
    //         .to(wrapperTitle, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0,
    //             y: '5%'
    //         })
    //         .to(wrapperBottom, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0,
    //             y: '5%'
    //         })
    //         .to(wrapperBack, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0
    //         })
    //     ;
    // });
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

function init() {
    introDev();
    // categoryDev();
}

init();