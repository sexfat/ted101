const {
    src,
    dest
} = require('gulp');

const fileinclude = require('gulp-file-include');



module.exports = function htmlTemplate() {
    return src('./*.html') //input
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(dest('./app/')) //output
}