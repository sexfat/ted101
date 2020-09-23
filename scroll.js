//場景
var controller = new ScrollMagic.Controller();

//動畫
var mv01 = TweenMax.to('.mg' , 1 , {
    x: 400
})

new ScrollMagic.Scene({
}).setTween(mv01).addTo(controller); 