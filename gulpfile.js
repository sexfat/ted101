const { 
    src,
    dest,
    series,
    parallel,
    watch}  = require('gulp');

// 第一個任務


function p01(cb) {
    console.log('任務一');
    cb();
}


function p02(cb) {
     console.log('任務二');
     cb();
}

exports.one = p01;  // exports 輸出指令 do 
exports.two = p02;  // exports 輸出指令 do 


exports.all = series(p01 , p02); //依序執行
exports.all2 = parallel(p01 , p02); //並行

// 搬家任務
exports.move = function movefile() {
    return src('index.html')
    .pipe(dest('app/'))
}







