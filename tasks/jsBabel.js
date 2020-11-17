const {
    src,
    dest,
} = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//把路徑載入
const config = require('../gulp.config')


module.exports =  function babeles5() {
    return src(config.paths.js)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest(config.pathsDev.js))
}