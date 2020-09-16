TweenMax.to('.b1', .8, {
    //x: 400,
    ease:  Power0.easeNone,
    // repeat: -1,//重複
    //yoyo: true //方向
    // scale: 2, //放大
    //scaleX: 2, //放大
    //scaleY: 2, //放大
    // opacity: 0 //透明度
    // rotation : 360, //旋轉
    // rotationX : 360, //旋轉
    // rotationY : 360, //旋轉
    transformOrigin : 'left top', // top  right left bottom  10% 20% 
    backgroundColor  : '#999',
    // border : '1px solid #f20' ,
    width : 900,
    borderRadius : '10px 10px'
});

TweenMax.to('.b2', 1, {
    y: 100,
    ease:  Bounce.easeOut, 
});

TweenMax.fromTo('.b3', 1,{x: 100},{x:400});



