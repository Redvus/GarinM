'use strict';

gsap.registerPlugin(ScrollTrigger);

const scrollLine = document.getElementById('scrollLine'),
    wrapperScroll = document.querySelector('.wrapper'),
    locoScroll = new LocomotiveScroll({
        el: wrapperScroll,
        smooth: true,
        multiplier: 0.5
    });

function scrollSmooth() {

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(wrapperScroll, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // pinType: document.querySelector(".wrapperScroll-info").style.transform ? "transform" : "fixed"
    });

    // gsap.from(scrollLine, {
    //     scrollTrigger: {
    //         trigger: scrollLine,
    //         scroller: wrapperScroll,
    //         scrub: true,
    //         start: "0 0",
    //         end: () => `+=${wrapperScroll.offsetHeight - window.innerHeight}`,
    //         // markers: {
    //         // 	startColor: "#ccc",
    //         // 	endColor: "#ccc"
    //         // }
    //     },
    //     scaleX: 0,
    //     transformOrigin: "0 0",
    //     ease: "none"
    // });

    ScrollTrigger.addEventListener("refreshInit", () => locoScroll.update());
    ScrollTrigger.refresh();
}