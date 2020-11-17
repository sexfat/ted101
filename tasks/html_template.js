const {
    src,
    dest
} = require('gulp');

const fileinclude = require('gulp-file-include');

//路徑參數
const config = require('../gulp.config')

module.exports = function htmlTemplate() {
    return src(config.paths.html) //input
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(dest(config.pathsDev.dist)) //output
}