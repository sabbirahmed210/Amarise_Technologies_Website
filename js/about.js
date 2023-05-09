/************* Stones animation ********************/
var s7 = new TimelineLite();
            
s7.add(
    TweenLite.to(".rouge",1,{
        x:-150,
        y:-150,
        opacity:1,
        rotation:"-360deg",
        delay:0.5,
        ease: Power1.easeInOut
    })
);
s7.add(
    TweenLite.to(".vert",1,{
        x:300,
        y:-170,
        opacity:1,
        rotation:"60deg",
        delay:-1,
        ease: Power1.easeInOut
    })
);
s7.add(
    TweenLite.to(".creme",1,{
        x:200,
        y:-50,
        opacity:1,
        rotation:"-360deg",
        delay:-1,
        ease: Power1.easeInOut
    })
);
s7.add(
    TweenLite.to(".verre",1,{
        x:350,
        y:0,
        opacity:1,
        delay:-1,
        ease: Power1.easeInOut
    })
);


const controller_s7 = new ScrollMagic.Controller();

const scene_s7 = new ScrollMagic.Scene({
    triggerElement: "#section_7",
    triggerHook:"onEnter",
    duration:'100%'
})
.setTween(s7)
.addIndicators({
    name: 'scene_s7',
    colorTrigger:'transparent',
    colorStart: 'transparent',
    colorEnd: 'transparent'
})
.addTo(controller_s7);

/************* Why Choose Us ********************/
var s12 = new TimelineLite();
            
s12.add(
    TweenLite.from(".why_chose_us_title",1,{
        y:-150,
        opacity:0,
        ease: Power1.easeInOut
    })
);
s12.add(
    TweenLite.from("#content_row1",1,{
        y:-150,
        opacity:0,
        ease: Power1.easeInOut
    })
);
s12.add(
    TweenLite.from("#content_row2",1,{
        y:-150,
        opacity:0,
        ease: Power1.easeInOut
    })
);


const controller_s12 = new ScrollMagic.Controller();

const scene_s12 = new ScrollMagic.Scene({
    triggerElement: ".section_12",
    triggerHook:"onEnter",
    duration:'100%'
})
.setTween(s12)
.addIndicators({
    name: 'scene_s12',
    colorTrigger:'transparent',
    colorStart: 'transparent',
    colorEnd: 'transparent'
})
.addTo(controller_s12);


