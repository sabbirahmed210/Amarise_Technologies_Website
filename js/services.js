/****************** Intor  ************************/

const intro = new TimelineLite();

intro.add(
        TweenLite.to("#short_des", 1,{
            y:100,
            opacity:0,
            ease: Power1.easeInOut
        })
);
intro.add(
    TweenLite.to(".typewriter", 1,{
        y:100,
        opacity:0,
        delay:-1,
        ease: Power1.easeInOut
    })
);
        

const introCtrl = new ScrollMagic.Controller();

const introScene = new ScrollMagic.Scene({
triggerElement: "#intro",
triggerHook:'onLeave',
duration: "100%"
})
.setTween(intro)
.addIndicators({
name: 'fade introScene',
colorTrigger:'transparent',
indent: 200,
colorStart: 'transparent',
colorEnd: 'transparent'
})
.addTo(introCtrl);

/****************** Section 2  ************************/

const s2 = new TimelineLite();

s2.add(
        TweenLite.from(".vision", 1,{
            x:200,
            opacity:0,
            ease: Power1.easeInOut
        })
);
s2.add(
    TweenLite.from(".mission", 1,{
        x:300,
        opacity:0,
        ease: Power1.easeInOut
    })
);
        

const ctrl2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
triggerElement: ".mission_vision",
triggerHook:1,
duration: "80%"
})
.setTween(s2)
.addIndicators({
name: 'fade scene2',
colorTrigger:'transparent',
indent: 200,
colorStart: 'transparent',
colorEnd: 'transparent'
})
.addTo(ctrl2);

/****************** Section 3  ************************/
const s3 = new TimelineLite();

s3.add(
    TweenLite.from(".services_title", 1,{
        x:-400,
        opacity:0,
        ease: Power1.easeInOut
    })
);
s3.add(
        TweenLite.from("#sem", 1,{
            x:-300,
            opacity:0,
            ease: Power1.easeInOut
        })
);
s3.add(
    TweenLite.from("#smm", 1,{
        x:-300,
        opacity:0,
        ease: Power1.easeInOut
    })
);
        

const ctrl3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
triggerElement: ".section_3",
triggerHook:'1',
duration: "80%"
})
.setTween(s3)
.addIndicators({
name: 'fade scene3',
colorTrigger:'transparent',
indent: 200,
colorStart: 'transparent',
colorEnd: 'transparent'
})
.addTo(ctrl3);

/************************* Section 4  *********************/

const s4 = new TimelineMax();

s4.add(
        TweenLite.from("#graphic", 1,{
            y:-300,
            opacity:0,
            ease: Power1.easeInOut
        })
);
s4.add(
    TweenLite.from("#web_dev", 1,{
        y:-300,
        opacity:0,
        delay:-0.5,
        ease: Power1.easeInOut
    })
);
        

const ctrl4 = new ScrollMagic.Controller();

const scene4 = new ScrollMagic.Scene({
triggerElement: "#services-2",
triggerHook:1,
duration: "100%"
})
.setTween(s4)
.addIndicators({
name: 'fade scene4',
colorTrigger:'transparent',
indent: 200,
colorStart: 'transparent',
colorEnd: 'transparent'
})
.addTo(ctrl4);

/************************* Section 5  *********************/

const s5 = new TimelineMax();

s5.add(
        TweenLite.from("#branding", 2,{
        x:-300,
        opacity:0,
        ease: Power1.easeInOut
    })
);
s5.add(
    TweenLite.from("#photography", 1,{
        x:-300,
        opacity:0,
        ease: Power1.easeInOut
    })
);
        

const ctrl5 = new ScrollMagic.Controller();

const scene5 = new ScrollMagic.Scene({
triggerElement: "#services-3",
triggerHook:1,
duration: "100%"
})
.setTween(s5)
.addIndicators({
name: 'fade scene5',
colorTrigger:'transparent',
indent: 200,
colorStart: 'transparent',
colorEnd: 'transparent'
})
.addTo(ctrl5);

/************************* About us section ********************/

const about = new TimelineMax();

about.add(
        TweenLite.from(".about_des1", 3,{
        y:30,
        opacity:0,
        ease: Power1.easeInOut
    })
);
about.add(
    TweenLite.from(".about_des2", 3,{
        y:30,
        opacity:0,
        ease: Power1.easeInOut
    })
);
about.add(
    TweenLite.from(".about_des3", 3,{
        y:30,
        opacity:0,
        ease: Power1.easeInOut
    })
);
about.add(
    TweenLite.from(".about_des4", 3,{
        y:30,
        opacity:0,
        ease: Power1.easeInOut
    })
);
about.add(
    TweenLite.from(".about_des5", 3,{
        y:30,
        opacity:0,
        ease: Power1.easeInOut
    })
);
        

const aboutCtrl = new ScrollMagic.Controller();

const aboutScene = new ScrollMagic.Scene({
triggerElement: ".about_us",
triggerHook:'onEnter',
duration: "80%"
})
.setTween(about)
.addIndicators({
name: 'fade aboutScene',
colorTrigger:'transparent',
indent: 200,
colorStart: 'transparent',
colorEnd: 'transparent'
})
.addTo(aboutCtrl);