const {
    src,
    dest,
} = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

module.exports =  function babeles5() {
    return src('js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('app/js'))
}