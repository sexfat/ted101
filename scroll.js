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
new ScrollMagic.Scene({
    triggerElement: '#point1',
    triggerHook : 0
}).setTween(mv01).addIndicators().addTo(controller);