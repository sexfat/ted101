const {
    src,
    dest
} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');



module.exports = function styleSass() {
    return src('./src/sass/*.scss')
        .pipe(sass({
            outputStyle: "compressed" //壓縮css  expanded
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest('./dist/css/'))
}


// nested (預設的樣式) : 巢狀顯示
// expanded : 不要巢狀
// compact : 簡潔樣式，縮進成一行
// compressed ：壓縮模式