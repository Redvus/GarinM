class Intro {

    introStart() {
        // Элементы для Section 1
        const introBlockTop = document.createElement('div'),
            introMonumentBlock = document.createElement('picture'),
            introStreetBlock = document.createElement('picture'),
            introBuildingsBlock = document.createElement('picture'),
            introBackBlock = document.createElement('picture'),
            introFloorBlock = document.createElement('picture'),
            introContainer_1 = document.getElementById('introSection_1'),
            introContainer_2 = document.getElementById('introSection_2')
        ;

        // Элементы для Section 2
        const introTreeBlock_1 = document.createElement('picture'),
            introTreeBlock_2 = document.createElement('picture'),
            introTreeBlock_3 = document.createElement('picture'),
            introTreeBlock_4 = document.createElement('picture'),
            introHouseBlock = document.createElement('picture')
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
            <img src="assets/projects/garin/images/tema_juchka_2.png" id="introMonumentImage" alt="Тема и Жучка. Памятник">
        `;
        introFloorBlock.innerHTML = `
            <img src="assets/projects/garin/images/g_intro_floor.jpg" id="introFloorImage" alt="Тротуар">
        `;
        introStreetBlock.innerHTML = `
            <img src="assets/projects/garin/images/g_intro_street_2.png" id="introStreetImage" alt="Улица и дома на заднем фоне">
        `;
        introBuildingsBlock.innerHTML = `
            <img src="assets/projects/garin/images/g_intro_buildings.png" id="introBuildingsImage" alt="дома на заднем фоне">
        `;
        introBackBlock.innerHTML = `
            <img src="assets/projects/garin/images/g_intro_back.jpg" id="introBuildingsImage" alt="дома на заднем фоне">
        `;
        introBlockTop.innerHTML = `
            <h1>Гарин-Михайловский</h1>
        `;
        wrapper.appendChild(introMonumentBlock);
        wrapper.appendChild(introFloorBlock);
        wrapper.appendChild(introStreetBlock);
        wrapper.appendChild(introBuildingsBlock);
        wrapper.appendChild(introBackBlock);
        // wrapper.appendChild(introBlockTop);

        // Элементы Section 2
        introTreeBlock_1.id = 'introTree_1';
        introTreeBlock_2.id = 'introTree_2';
        introTreeBlock_3.id = 'introTree_3';
        introTreeBlock_4.id = 'introTree_4';
        introHouseBlock.id = 'introHouse';
        introTreeBlock_1.innerHTML = `
            <img src="assets/projects/garin/images/tree_1.png" alt="Дерево 1">
        `;
        introTreeBlock_2.innerHTML = `
            <img src="assets/projects/garin/images/tree_2.png" alt="Дерево 2">
        `;
        introTreeBlock_3.innerHTML = `
            <img src="assets/projects/garin/images/tree_1.png" alt="Дерево 3">
        `;
        introTreeBlock_4.innerHTML = `
            <img src="assets/projects/garin/images/tree_2.png" alt="Дерево 4">
        `;
        introHouseBlock.innerHTML = `
            <img src="assets/projects/garin/images/houseGarin_1.png" alt="Дом Гарина">
        `;
        wrapper.appendChild(introTreeBlock_1);
        wrapper.appendChild(introTreeBlock_2);
        // wrapper.appendChild(introTreeBlock_3);
        // wrapper.appendChild(introTreeBlock_4);
        wrapper.appendChild(introHouseBlock);

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
                    trigger: introContainer_1,
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
                // },
                onComplete: () => {
                    introHouseAnim();
                }
            });

            tl
                .to(introMonument, {
                    y: "60vh",
                    scale: 3,
                    // autoAlpha: 0
                })
                .to(introFloor, {
                    delay: "-0.5",
                    y: "130vh",
                    scale: 4,
                    // autoAlpha: 0
                })
                .to(introStreet, {
                    delay: "-0.5",
                    y: "90vh",
                    scale: 3,
                    // autoAlpha: 0
                })
                .to(introBuildings, {
                    delay: "-0.5",
                    y: "40vh",
                    scale: 3,
                    // autoAlpha: 0
                })
                .to(introMonument, {
                    delay: "-0.2",
                    y: "80vh",
                    // scale: 4,
                    autoAlpha: 0
                })
                .to(introStreet, {
                    delay: "-0.6",
                    y: "100vh",
                    autoAlpha: 0
                })
                .to(introBuildings, {
                    delay: "-0.6",
                    y: "80vh",
                    scale: 4,
                    autoAlpha: 0
                })
                .to(introBack, {
                    delay: "-0.6",
                    // y: "80vh",
                    scale: 1.2,
                    // autoAlpha: 0
                })
            ;
            ScrollTrigger.refresh();
        }
        introAnim();

        const introHouse = document.getElementById('introHouse'),
            introTree_1 = document.getElementById('introTree_1'),
            introTree_2 = document.getElementById('introTree_2'),
            introTree_3 = document.getElementById('introTree_3'),
            introTree_4 = document.getElementById('introTree_4')
        ;

        function introHouseAnim() {
            // wrapper.removeChild(introMonument);
            // wrapper.removeChild(introBuildings);
            // wrapper.removeChild(introStreet);
            // wrapper.removeChild(introFloor);
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: introContainer_2,
                    scroller: wrapper,
                    scrub: true,
                    // pin: true,
                    start: "top bottom",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                    // markers: {
                    // 	startColor: "#000",
                    // 	endColor: "#000"
                    // }
                },
                onStart: () => {

                }
            });

            tl
                // .set(introHouse, {
                //     opacity: 1
                // })
                .to(introHouse, {
                    delay: "-0.6",
                    scale: 1,
                    y: "-25vh",
                    autoAlpha: 1
                })
                .to(introTree_1, {
                    delay: "-0.6",
                    scale: 3,
                    y: "0",
                    x: "-100%",
                    autoAlpha: 0
                })
                .to(introTree_2, {
                    delay: "-0.6",
                    scale: 3,
                    y: "0",
                    x: "100%",
                    autoAlpha: 0
                })
            ;
            ScrollTrigger.refresh();
        }
        // introHouseAnim();
    }
}