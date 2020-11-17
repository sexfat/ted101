const {
    src,
    dest
} = require('gulp');

//壓縮圖片
const imagemin = require('gulp-imagemin');

module.exports =  function img() {
    return src('dist/images/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
}