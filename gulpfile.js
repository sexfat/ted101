const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');



// 第一個任務


function p01(cb) {
    console.log('任務一');
    cb();
}


function p02(cb) {
    console.log('任務二');
    cb();
}

exports.one = p01; // exports 輸出指令 do 
exports.two = p02; // exports 輸出指令 do 


exports.all = series(p01, p02); //依序執行
exports.all2 = parallel(p01, p02); //並行

// 搬家任務
exports.move = function movefile() {
    return src('index.html')
        .pipe(dest('app/'))
}

// 合併檔案任務

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

exports.concatCSS = function concatcss() {
    return src(['css/*.*', '!css/scripts.js'])
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(rename(function (path) {
            path.basename += "-min";
            path.extname = ".css";
          }))
        .pipe(dest('app/'))
}

// function minicss() {
//     return src('app/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(dest('app/mini'));
// }

//exports.doall = series(concatcss , minicss);


//排除 用!*.js   排除單個檔案
//多個檔案 ['a1.css' , 'a2.css'] 
// https://www.itread01.com/content/1546834502.html
// npm i gulp-rename --save-dev
// 壓縮css 
// https://www.npmjs.com/package/gulp-clean-css

exports.name = function Rename() {
   return src('app/all.css')
   .pipe(rename(function (path) {
    path.basename += "aa";
    path.extname = ".css";
  })).pipe(dest('app/'))
}