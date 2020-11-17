const {
    src,
    dest
} = require('gulp');

//壓縮圖片
const imagemin = require('gulp-imagemin');
//路徑參數
const config = require('../gulp.config')


module.exports =  function img() {
    return src(config.paths.images)
        .pipe(imagemin())
        .pipe(dest(config.pathsDev.images))
}