class Intro {

    introStart() {
        const introBlockTop = document.createElement('div'),
            introMonumentBlock = document.createElement('picture'),
            introStreetBlock = document.createElement('picture'),
            introBuildingsBlock = document.createElement('picture'),
            introBackBlock = document.createElement('picture'),
            introFloorBlock = document.createElement('picture'),
            introContainer = document.querySelector('.wrapper__intro_container')
        ;
        introBlockTop.className = 'wrapper__top';
        wrapper.className += ' wrapper__intro';
        // introContainer.className = 'wrapper__intro_container';
        // introContainer.setAttribute('data-scroll-section', '');

        //Элементы на первой
        introMonumentBlock.id = 'introMonument';
        introFloorBlock.id = 'introFloor';
        introStreetBlock.id = 'introStreet';
        introBuildingsBlock.id = 'introBuildings';
        introBackBlock.id = 'introBack';
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
        // wrapper.appendChild(introContainer);
        wrapper.appendChild(introMonumentBlock);
        wrapper.appendChild(introFloorBlock);
        wrapper.appendChild(introStreetBlock);
        wrapper.appendChild(introBuildingsBlock);
        // wrapper.appendChild(introBackBlock);
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

        const introMonument = document.getElementById('introMonument'),
            introFloor = document.getElementById('introFloor'),
            introStreet = document.getElementById('introStreet'),
            introBuildings = document.getElementById('introBuildings'),
            introBack = document.getElementById('introBack')
        ;

        function introAnim() {
            let tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: introContainer,
                    scroller: wrapper,
                    scrub: true,
                    // pin: true,
                    start: "top top",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                    // markers: {
                    // 	startColor: "#000",
                    // 	endColor: "#000"
                    // }
                },
                // onStart: () => {
                //     tl.set(scrollMarkerTop, {
                //         backgroundColor: '#f2a07c'
                //     })
                // }
            });

            tl
                .to(introMonument, {
                    y: "60vh",
                    scale: 3,
                    // autoAlpha: 0
                })
                .to(introFloor, {
                    delay: "-0.5",
                    y: "100vh",
                    scale: 4,
                    // autoAlpha: 0
                })
                .to(introStreet, {
                    delay: "-0.5",
                    y: "50vh",
                    scale: 3,
                    // autoAlpha: 0
                })
                .to(introBuildings, {
                    delay: "-0.5",
                    y: "50vh",
                    scale: 3,
                    // autoAlpha: 0
                })
                .to(introMonument, {
                    delay: "-0.2",
                    y: "80vh",
                    autoAlpha: 0
                })
                .to(introStreet, {
                    delay: "-0.6",
                    y: "70vh",
                    autoAlpha: 0
                })
                .to(introBuildings, {
                    delay: "-0.6",
                    y: "90vh",
                    autoAlpha: 0
                })
            ;
            ScrollTrigger.refresh();
        }
        introAnim();
    }
}