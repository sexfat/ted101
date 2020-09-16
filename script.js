TweenMax.to('.b1', .8, {
    //x: 400,
    ease: Power0.easeNone,
    // repeat: -1,//重複
    //yoyo: true //方向
    // scale: 2, //放大
    //scaleX: 2, //放大
    //scaleY: 2, //放大
    // opacity: 0 //透明度
    // rotation : 360, //旋轉
    // rotationX : 360, //旋轉
    // rotationY : 360, //旋轉
    transformOrigin: 'left top', // top  right left bottom  10% 20% 
    backgroundColor: '#999',
    // border : '1px solid #f20' ,
    width: 900,
    borderRadius: '10px 10px'
});

TweenMax.to('.b2', 1, {
    y: 200,
    ease: Bounce.easeOut,
});

TweenMax.fromTo('.b3', 1, {
    x: 100
}, {
    x: 400
});


//
TweenMax.to('.b4', 10, {
    bezier: {
        curviness: 1.25,
        values: [{
                x: 100,
                y: 400
            },
            {
                x: 250,
                y: 400
            },
            {
                x: 300,
                y: 500
            },
            {
                x: 500,
                y: 500
            },
            {
                x: 0,
                y: 0
            }
        ]
    }
});

// TweenMax.staggerTo('.b5', 1, {
//     x: 200
// })

TweenMax.to('.b5', 1, {
    x: 200,
    // onComplete : alerts //callback
})


function alerts(){
   alert('finish');
}

//第二個場景

var t1 = new TimelineMax({
    repeat : 2,
    yoyo: true
});

//原本
// TweenMax.to('.c1' , 1, {
//     x: 100
// });
// TweenMax.to('.c2' , 1, {
//     y: 100
// })
//

t1.to('.c1' , 1, {
    x: 100,
    rotation : 360,
    // repeat: 2
}).to('.c2' , 1, {
    y: 100
}).to('.c3' , 1 , {
    x: 300,
    y: 400
});

t1.stop();

document.getElementById('play').onclick = function() {
   t1.play();
}

document.getElementById('pause').onclick = function() {
    t1.pause();
 }













