/* Testimonial Carousel */
$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
});

/* Search Engine Marketing popup Script */
$(".Click-here").on('click', function() {
$(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
$(".custom-model-main").removeClass('model-open');
});

/* Social Media Marketing popup Script */
$(".Click-here2").on('click', function() {
$(".custom-model-main2").addClass('model-open2');
}); 
$(".close-btn2, .bg-overlay2").click(function(){
$(".custom-model-main2").removeClass('model-open2');
});

/* Graphics Design popup Script */
$(".Click-here3").on('click', function() {
$(".custom-model-main3").addClass('model-open3');
}); 
$(".close-btn3, .bg-overlay3").click(function(){
$(".custom-model-main3").removeClass('model-open3');
});

/* Graphics Design popup Script */
$(".Click-here4").on('click', function() {
$(".custom-model-main4").addClass('model-open4');
}); 
$(".close-btn4, .bg-overlay4").click(function(){
$(".custom-model-main4").removeClass('model-open4');
});

/* Branding popup Script */
$(".Click-here5").on('click', function() {
$(".custom-model-main5").addClass('model-open5');
}); 
$(".close-btn5, .bg-overlay5").click(function(){
$(".custom-model-main5").removeClass('model-open5');
});

/* Branding popup Script */
$(".Click-here6").on('click', function() {
$(".custom-model-main6").addClass('model-open6');
}); 
$(".close-btn6, .bg-overlay6").click(function(){
$(".custom-model-main6").removeClass('model-open6');
});

/******************* moving austronut *******************************/

var s7 = new TimelineLite();
            
s7.add(
    TweenLite.from(".autronut",1,{
        x:0,
        y:1050,
        opacity:1,
        ease: Power1.easeInOut
    })
);

const controller_s7 = new ScrollMagic.Controller();

const scene_s7 = new ScrollMagic.Scene({
    triggerElement: "#Motion",
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