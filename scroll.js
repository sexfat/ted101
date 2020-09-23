//場景
var controller = new ScrollMagic.Controller();

//動畫
var mv01 = TweenMax.fromTo('.mg', 1, {
    x: -300,
    opacity: 0
}, {
    x: 400,
    opacity: 1
})

//觸發事件
var scene01 = new ScrollMagic.Scene({
    triggerElement: '#point1',
    triggerHook: 0
}).setTween(mv01).addIndicators().addTo(controller);

var t1 = new TimelineMax();

t1.to('.mv01', 1, {
    x: 100
}).to('.mv02', 1, {
    x: 200
})


var scene02 = new ScrollMagic.Scene({
    triggerElement: '#point2',
}).setTween(t1).addIndicators().addTo(controller);