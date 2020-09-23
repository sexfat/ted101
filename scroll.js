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
// var t1 = new TimelineMax();

// t1.to('.mv01', 1, {
//     x: 100,
    
// }).to('.mv01', 1, {
//     y: 200,
//     className:"+=aa"
// }).to('.mv01', 1, {
//     x: 500,
//     className:"-=aa"
// }).to('.mv01', 1, {
//     y: 800,
//     className:"+=bb"
// })



var t1 = new TimelineMax();

t1.to(['.mv01' , '.mv03'], 1, {
    x: 100,
}).to(['.mv02' , '.mv04'], 1, {
    y: 200,
})


//場景二觸發事件
var scene02 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    // duration : 600,
    // offset : -100
    // reverse: false
}).setTween(t1).addIndicators().addTo(controller);

//場景三觸發事件
var box  = TweenMax.to('.box-x' , 1 , {
    x: 500
}) 

var scene03 = new ScrollMagic.Scene({
    triggerElement: '#point3',
    // duration : 600,
    // offset : -100
    // reverse: false
}).setClassToggle('.section04','on').setTween(box).addIndicators().addTo(controller);

var tl05 = new TimelineMax();

tl05.to('.mg2' , 1 , {
    x: 100,
    scale: 2
}).to('.mg3' , 1 , {
    y: 100,
    scale: 2
}).to('.mg4' , 1 , {
    x: 200,
    scale: 2
})

var scene04 = new ScrollMagic.Scene({
    triggerElement: '#point4',
     triggerHook :0,
     duration : '300%'
}).setPin('.section05').setTween(tl05).addIndicators().addTo(controller);






