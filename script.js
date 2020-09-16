TweenMax.to('.b1', 2, {
    x: 400,
    //ease:  Bounce.easeOut, 
    //repeat: -1,//重複
    //yoyo: true //方向
    //scale: 2, //放大
    // opacity: 0 //透明度
});

TweenMax.to('.b2', 1, {
    y: 100,
    ease:  Bounce.easeOut, 
});

TweenMax.fromTo('.b3', 1,{x: 100},{x:400});



