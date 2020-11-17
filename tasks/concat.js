// 合併檔案任務
const {
    src,
    dest
} = require('gulp');

const concat = require('gulp-concat');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');

//把路徑載入
const config = require('../gulp.config')


module.exports =  function concatcss() {
    return src(config.pathsDev.css + '*.css') //這邊會碰到路徑部隊的時候
        .pipe(concat('style.css')) //
        .pipe(cleanCSS())
        .pipe(rename(function (path) {
            path.basename += "-min";
            path.extname = ".css";
        }))
        .pipe(dest(config.pathsDev.css))
}