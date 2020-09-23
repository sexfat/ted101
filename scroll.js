//場景
var controller = new ScrollMagic.Controller();

//動畫
var mv01 = TweenMax.fromTo('.mg', 1, {
    x: -300,
    opacity: 0
}, {
    x: 400,
    opacity: 1
});

//場景一觸發事件
var scene01 = new ScrollMagic.Scene({
    triggerElement: '#point1',
    triggerHook: 0
}).setTween(mv01).addIndicators().addTo(controller)


//動畫
var t1 = new TimelineMax();

t1.to('.mv01', 1, {
    x: 100
}).to('.mv02', 1, {
    x: 200
}).to('.mv03', 1, {
    x: 300
}).to('.mv04', 1, {
    x: 500
})


//場景二觸發事件
var scene02 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    // duration : 600,
    // offset : -100
    // reverse: false
}).setTween(t1).addIndicators().addTo(controller);

//場景三觸發事件
var scene03 = new ScrollMagic.Scene({
    triggerElement: '#point3',
    // duration : 600,
    // offset : -100
    // reverse: false
}).setClassToggle('.section04','on').addIndicators().addTo(controller);