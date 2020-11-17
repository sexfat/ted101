// 合併檔案任務
const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

const concat = require('gulp-concat');
const rename = require("gulp-rename");
const clean = require('./tasks/clean');
//把路徑載入
const config = require('../gulp.config')


module.exports =  function concatcss() {
    return src(config.pathsDev.css)
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(rename(function (path) {
            path.basename += "-min";
            path.extname = ".css";
        }))
        .pipe(dest('app/'))
}