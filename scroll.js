//場景
var controller = new ScrollMagic.Controller();

//動畫
var mv01 = TweenMax.to('.mg', 1, {
    x: 400,
    y: 300
})

//觸發事件
new ScrollMagic.Scene({
    triggerElement: '#point1',
}).setTween(mv01).addIndicators().addTo(controller);