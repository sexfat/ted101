new fullpage('#fullpage', {
    //options here
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
    autoScrolling: true,
    scrollHorizontally: true,
    afterLoad: function (origin, destination, direction) {
        if (origin.index == 0 && direction == 'down') {
            //section2
            TweenMax.fromTo('.box', 1, {
                opacity: 0,
                x: -100
            }, {
                opacity: 1,
                x: 100
            })
        }
    }
});